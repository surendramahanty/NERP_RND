import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { forkJoin } from 'rxjs';

import { Helper } from '../../common/helper';
import { SplitterService } from '../services/splitter.service';
import { Splitter } from '../models/splitter';

declare var $: any;

@Component({
    templateUrl: './splitter-details.html',
    providers: [SplitterService],
})
export class SplitterDetails implements OnInit {

    splitterId: string;
    splitter: Splitter;
    title: string = "New Splitter";

    constructor(
        private location: Location,
        private route: ActivatedRoute,
        private splitterService: SplitterService,
        private helper: Helper) {

        this.splitter = new Splitter();
    }

    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.splitterId = params['id'];

                if (this.splitterId != null)
                    this.title = "Edit Splitter";
                else {
                    this.title = "New Splitter";
                }

                this.getFormData(this.splitterId);

            });
    }

    getFormData(splitterId: string) {

        if (splitterId != null) {

            $("#ajax-loading").show();

            this.splitterService.getSplitter(splitterId).subscribe(
                resp => {
                    this.splitter = new Splitter();

                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.splitter = resp.data;
                        }
                    }

                    $("#ajax-loading").hide();
                },
                (err) => {
                    $("#ajax-loading").hide();
                    this.splitter = new Splitter();
                    this.helper.showAlertMessage("Unable to fetch splitter details", "error");
                });
        }
        else
            this.splitter = new Splitter();
    }

    async save() {

        var errorMessages = await this.validateEntity(this.splitter);

        if (errorMessages.length == 0) {

            this.splitterService.saveSplitter(this.splitter).subscribe(
                resp => {

                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.helper.showAlertMessage("Splitter information saved", "success");
                            this.goBack();
                        }
                        else
                            this.helper.showAlertMessage("Unable to save splitter information.", "error");
                    }
                },
                (err) => {
                    //let msg = `Unable to save user information : ${err.message}`;
                    this.helper.showAlertMessage("Unable to save splitter information.", "error");
                });
        }
        else {
            this.helper.showAlertMessage(this.helper.getErrorMessagesText(errorMessages), "error");
        }
    }

    async validateEntity(splitter: Splitter): Promise<string[]> {
        var errorMessages = [];

        if (splitter.name == null || splitter.name.trim() == '')
                errorMessages.push("Name cannot be empty.");
        else {
            let resp = await this.splitterService.checkNameExists(splitter.name);

            if (resp)
                errorMessages.push("Name already exists.");
        }
        //    if (user.loginId == null || user.loginId.trim() == "")
        //        errorMessages.push("Login Id cannot be empty string");

        //    //if (user.password == null || user.password.trim() == "")
        //    //   errorMessages.push("Password cannot be empty string");

        return errorMessages;
    }

    goBack(): void {
        this.location.back();
    }
}
