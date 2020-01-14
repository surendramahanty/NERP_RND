import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { forkJoin } from 'rxjs';

import { Helper } from '../../common/helper';
import { CivilworkService } from '../services/civilwork.service';
import { Civilwork } from '../models/civilwork';

declare var $: any;

@Component({
    templateUrl: './civilwork-details.html',
    providers: [CivilworkService],
})
export class CivilworkDetails implements OnInit {

    civilworkId: string;
    civilwork: Civilwork = new Civilwork();
    title: string = "New Civilwork";

    constructor(
        private location: Location,
        private route: ActivatedRoute,
        private civilworkService: CivilworkService,
        private helper: Helper) { }

    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.civilworkId = params['id'];

                if (this.civilworkId != null)
                    this.title = "Edit Civilwork";
                else {
                    this.title = "New Civilwork";
                }

                this.getFormData(this.civilworkId);

            });
    }

    getFormData(civilworkId: string) {

        if (this.civilworkId != null) {

            $("#ajax-loading").show();

            this.civilworkService.getCivilwork(this.civilworkId).subscribe(
                resp => {
                    this.civilwork = new Civilwork();

                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.civilwork = resp.data;
                        }
                    }

                    $("#ajax-loading").hide();
                },
                (err) => {
                    $("#ajax-loading").hide();
                    this.civilwork = new Civilwork();
                    this.helper.showAlertMessage("Unable to fetch civilwork details", "error");
                });
        }
        else
            this.civilwork = new Civilwork();
    }

    addNewSupplier() {

        if (this.civilwork.suppliers == null)
            this.civilwork.suppliers = [];

        this.civilwork.suppliers.push({
            name: "",
            sku: "",
            price: null,
            validFrom: "",
            validTo: ""
        });
    }

    deleteSupplier(index: number) {
        this.civilwork.suppliers.splice(index, 1);
    }

    async save() {

        var errorMessages = await this.validateEntity(this.civilwork);

        if (errorMessages.length == 0) {

            this.civilworkService.saveCivilwork(this.civilwork).subscribe(
                resp => {

                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.helper.showAlertMessage("Civilwork information saved", "success");
                            this.goBack();
                        }
                        else
                            this.helper.showAlertMessage("Unable to save civilwork information.", "error");
                    }
                },
                (err) => {
                    //let msg = `Unable to save user information : ${err.message}`;
                    this.helper.showAlertMessage("Unable to save civilwork information.", "error");
                });
        }
        else {
            this.helper.showAlertMessage(this.helper.getErrorMessagesText(errorMessages), "error");
        }
    }

    async validateEntity(civilwork: Civilwork): Promise<string[]> {
        var errorMessages = [];

        if (civilwork.name == null || civilwork.name.trim() == '')
            errorMessages.push("Name cannot be empty.");
        else {
           if (civilwork.id == undefined) {
              let resp = await this.civilworkService.checkNameExists(civilwork.name);

              if (resp.message=='false')
                 errorMessages.push("Name already exists.");
           }
        }

        return errorMessages;
    }

    goBack(): void {
        this.location.back();
    }
}
