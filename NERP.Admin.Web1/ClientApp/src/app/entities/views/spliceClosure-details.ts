import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { forkJoin } from 'rxjs';

import { Helper } from '../../common/helper';
import { SpliceClosureService } from '../services/spliceClosure.service';
import { SpliceClosure } from '../models/spliceClosure';

declare var $: any;

@Component({
    templateUrl: './spliceClosure-details.html',
    providers: [SpliceClosureService],
})
export class SpliceClosureDetails implements OnInit {

    spliceClosureId: string;
    spliceClosure: SpliceClosure;
    title: string = "New SpliceClosure";

    constructor(
        private location: Location,
        private route: ActivatedRoute,
        private spliceClosureService: SpliceClosureService,
        private helper: Helper) {

        this.spliceClosure = new SpliceClosure();
    }

    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.spliceClosureId = params['id'];

                if (this.spliceClosureId != null)
                    this.title = "Edit SpliceClosure";
                else {
                    this.title = "New SpliceClosure";
                }

                this.getFormData(this.spliceClosureId);

            });
    }

    getFormData(spliceClosureId: string) {

        if (spliceClosureId != null) {

            $("#ajax-loading").show();

            this.spliceClosureService.getSpliceClosure(spliceClosureId).subscribe(
                resp => {
                    this.spliceClosure = new SpliceClosure();

                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.spliceClosure = resp.data;
                        }
                    }

                    $("#ajax-loading").hide();
                },
                (err) => {
                    $("#ajax-loading").hide();
                    this.spliceClosure = new SpliceClosure();
                    this.helper.showAlertMessage("Unable to fetch spliceClosure details", "error");
                });
        }
        else
            this.spliceClosure = new SpliceClosure();
    }

    async save() {

        var errorMessages = await this.validateEntity(this.spliceClosure);

        if (errorMessages.length == 0) {

            this.spliceClosureService.saveSpliceClosure(this.spliceClosure).subscribe(
                resp => {

                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.helper.showAlertMessage("Splice Closure information saved", "success");
                            this.goBack();
                        }
                        else
                            this.helper.showAlertMessage("Unable to save splice closure information.", "error");
                    }
                },
                (err) => {
                    //let msg = `Unable to save user information : ${err.message}`;
                    this.helper.showAlertMessage("Unable to save splice closure information.", "error");
                });
        }
        else {
            this.helper.showAlertMessage(this.helper.getErrorMessagesText(errorMessages), "error");
        }
    }

    async validateEntity(spliceClosure: SpliceClosure): Promise<string[]> {
        var errorMessages = [];

        if (spliceClosure.name == null || spliceClosure.name.trim() == '')
                errorMessages.push("Name cannot be empty.");
        else {
            let resp = await this.spliceClosureService.checkNameExists(spliceClosure.name);

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
