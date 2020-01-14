import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Helper } from '../../common/helper';
import { DuctService } from '../services/duct.service';
import { Duct } from '../models/duct';

declare var $: any;

@Component({
    templateUrl: './duct-details.html',
    providers: [DuctService],
})
export class DuctDetails implements OnInit {

    ductId: string;
    duct: Duct;
    title: string = "New Duct";

    constructor(
        private location: Location,
        private route: ActivatedRoute,
        private ductService: DuctService,
        private helper: Helper) {

        this.duct = new Duct();
    }

    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.ductId = params['id'];

                if (this.ductId != null)
                    this.title = "Edit Duct";
                else {
                    this.title = "New Duct";
                }

                this.getFormData(this.ductId);

            });
    }

    getFormData(ductId: string) {

        if (ductId != null) {

            $("#ajax-loading").show();

            this.ductService.getDuct(ductId).subscribe(
                resp => {
                    this.duct = new Duct();

                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.duct = resp.data;
                        }
                    }

                    $("#ajax-loading").hide();
                },
                (err) => {
                    $("#ajax-loading").hide();
                    this.duct = new Duct();
                    this.helper.showAlertMessage("Unable to fetch duct details", "error");
                });
        }
        else
            this.duct = new Duct();
    }

    async save() {

        var errorMessages = await this.validateEntity(this.duct);

        if (errorMessages.length == 0) {

            this.ductService.saveDuct(this.duct).subscribe(
                resp => {

                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.helper.showAlertMessage("Duct information saved", "success");
                            this.goBack();
                        }
                        else
                            this.helper.showAlertMessage("Unable to save duct information.", "error");
                    }
                },
                (err) => {
                    //let msg = `Unable to save user information : ${err.message}`;
                    this.helper.showAlertMessage("Unable to save duct information.", "error");
                });
        }
        else {
            this.helper.showAlertMessage(this.helper.getErrorMessagesText(errorMessages), "error");
        }
    }

    async validateEntity(duct: Duct): Promise<string[]> {
        var errorMessages = [];

        if (duct.name == null || duct.name.trim() == '')
                errorMessages.push("Name cannot be empty.");
        else {
            let resp = await this.ductService.checkNameExists(duct.name);

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
