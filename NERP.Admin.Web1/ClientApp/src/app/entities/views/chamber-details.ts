import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { forkJoin } from 'rxjs';

import { Helper } from '../../common/helper';
import { ChamberService } from '../services/chamber.service';
import { Chamber } from '../models/chamber';

declare var $: any;

@Component({
    templateUrl: './chamber-details.html',
    providers: [ChamberService],
})
export class ChamberDetails implements OnInit {

    chamberId: string;
    chamber: Chamber;
    title: string = "New Chamber";

    constructor(
        private location: Location,
        private route: ActivatedRoute,
        private chamberService: ChamberService,
        private helper: Helper) {

        this.chamber = new Chamber();
    }

    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.chamberId = params['id'];

                if (this.chamberId != null)
                    this.title = "Edit Chamber";
                else {
                    this.title = "New Chamber";
                }

                this.getFormData(this.chamberId);

            });
    }

    getFormData(chamberId: string) {

        if (chamberId != null) {

            $("#ajax-loading").show();

            this.chamberService.getChamber(chamberId).subscribe(
                resp => {
                    this.chamber = new Chamber();

                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.chamber = resp.data;
                        }
                    }

                    $("#ajax-loading").hide();
                },
                (err) => {
                    $("#ajax-loading").hide();
                    this.chamber = new Chamber();
                    this.helper.showAlertMessage("Unable to fetch chamber details", "error");
                });
        }
        else
            this.chamber = new Chamber();
    }

    async save() {

        var errorMessages = await this.validateEntity(this.chamber);

        if (errorMessages.length == 0) {

            this.chamberService.saveChamber(this.chamber).subscribe(
                resp => {

                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.helper.showAlertMessage("Chamber information saved", "success");
                            this.goBack();
                        }
                        else
                            this.helper.showAlertMessage("Unable to save chamber information.", "error");
                    }
                },
                (err) => {
                    //let msg = `Unable to save user information : ${err.message}`;
                    this.helper.showAlertMessage("Unable to save chamber information.", "error");
                });
        }
        else {
            this.helper.showAlertMessage(this.helper.getErrorMessagesText(errorMessages), "error");
        }
    }

    async validateEntity(chamber: Chamber): Promise<string[]> {
        var errorMessages = [];

        if (chamber.name == null || chamber.name.trim() == '')
            errorMessages.push("Name cannot be empty.");
        else {
            let resp = await this.chamberService.checkNameExists(chamber.name);

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
