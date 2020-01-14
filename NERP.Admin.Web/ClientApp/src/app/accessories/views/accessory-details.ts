import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { forkJoin } from 'rxjs';

import { Helper } from '../../common/helper';
import { AccessoryService } from '../services/accessory.service';
import { Accessory } from '../models/accessory';

declare var $: any;

@Component({
    templateUrl: './accessory-details.html',
    providers: [AccessoryService],
})
export class AccessoryDetails implements OnInit {

    accessoryId: string;
    accessory: Accessory = new Accessory();
    title: string = "New Accessory";

    constructor(
        private location: Location,
        private route: ActivatedRoute,
        private accessoryService: AccessoryService,
        private helper: Helper) { }

    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.accessoryId = params['id'];

                if (this.accessoryId != null)
                    this.title = "Edit Accessory";
                else {
                    this.title = "New Accessory";
                }

                this.getFormData(this.accessoryId);

            });
    }

    getFormData(accessoryId: string) {

        if (this.accessoryId != null) {

            $("#ajax-loading").show();

            this.accessoryService.getAccessory(this.accessoryId).subscribe(
                resp => {
                    this.accessory = new Accessory();

                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.accessory = resp.data;
                        }
                    }

                    $("#ajax-loading").hide();
                },
                (err) => {
                    $("#ajax-loading").hide();
                    this.accessory = new Accessory();
                    this.helper.showAlertMessage("Unable to fetch accessory details", "error");
                });
        }
        else
            this.accessory = new Accessory();
    }

    addNewSupplier() {

        if (this.accessory.suppliers == null)
            this.accessory.suppliers = [];

        this.accessory.suppliers.push({
            name: "",
            sku: "",
            price: null,
            validFrom: "",
            validTo: ""
        });
    }

    deleteSupplier(index: number) {
        this.accessory.suppliers.splice(index, 1);
    }

    async save() {

        var errorMessages = await this.validateEntity(this.accessory);

        if (errorMessages.length == 0) {

            this.accessoryService.saveAccessory(this.accessory).subscribe(
                resp => {

                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.helper.showAlertMessage("Accessory information saved", "success");
                            this.goBack();
                        }
                        else
                            this.helper.showAlertMessage("Unable to save accessory information.", "error");
                    }
                },
                (err) => {
                    //let msg = `Unable to save user information : ${err.message}`;
                    this.helper.showAlertMessage("Unable to save accessory information.", "error");
                });
        }
        else {
            this.helper.showAlertMessage(this.helper.getErrorMessagesText(errorMessages), "error");
        }
    }

    async validateEntity(accessory: Accessory): Promise<string[]> {
       var errorMessages = [];
       
          if (accessory.name == null || accessory.name.trim() == '')
             errorMessages.push("Name cannot be empty.");
          else {
             if (accessory.id == undefined) {
                let resp = await this.accessoryService.checkNameExists(accessory.name);

                if (resp.message=='false')
                   errorMessages.push("Name already exists.");
             }
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
