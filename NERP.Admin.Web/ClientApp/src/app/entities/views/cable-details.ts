import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { forkJoin } from 'rxjs';

import { Helper } from '../../common/helper';
import { CableService } from '../services/cable.service';
import { Cable } from '../models/cable';

declare var $: any;

@Component({
    templateUrl: './cable-details.html',
    providers: [CableService],
})
export class CableDetails implements OnInit {

    cableId: string;
    cable: Cable;
    title: string = "New Cable";

    constructor(
        private location: Location,
        private route: ActivatedRoute,
        private cableService: CableService,
        private helper: Helper) {

        this.cable = new Cable();
    }

    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.cableId = params['id'];

                if (this.cableId != null)
                    this.title = "Edit Cable";
                else {
                    this.title = "New Cable";
                }

                this.getFormData(this.cableId);

            });
    }

    getFormData(cableId: string) {

        if (cableId != null) {

            $("#ajax-loading").show();

            this.cableService.getCable(cableId).subscribe(
                resp => {
                    this.cable = new Cable();

                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.cable = resp.data;
                        }
                    }

                    $("#ajax-loading").hide();
                },
                (err) => {
                    $("#ajax-loading").hide();
                    this.cable = new Cable();
                    this.helper.showAlertMessage("Unable to fetch cable details", "error");
                });
        }
        else
            this.cable = new Cable();
    }

   async save() {
      if (this.cable.id == undefined) {
         var errorMessages = await this.validateEntity(this.cable);
         if (errorMessages.length == 0) {

            this.cableService.saveCable(this.cable).subscribe(
               resp => {

                  if (resp.status.toLowerCase() == "error") {
                     this.helper.showAlertMessage(resp.message, "error");
                  }
                  else {
                     if (resp.data != null) {
                        this.helper.showAlertMessage("Cable information saved", "success");
                        this.goBack();
                     }
                     else
                        this.helper.showAlertMessage("Unable to save cable information.", "error");
                  }
               },
               (err) => {
                  //let msg = `Unable to save user information : ${err.message}`;
                  this.helper.showAlertMessage("Unable to save cable information.", "error");
               });
         }
         else {
            this.helper.showAlertMessage(this.helper.getErrorMessagesText(errorMessages), "error");
         }
      } else {
         this.cableService.saveCable(this.cable).subscribe(
            resp => {

               if (resp.status.toLowerCase() == "error") {
                  this.helper.showAlertMessage(resp.message, "error");
               }
               else {
                  if (resp.data != null) {
                     this.helper.showAlertMessage("Cable information saved", "success");
                     this.goBack();
                  }
                  else
                     this.helper.showAlertMessage("Unable to save cable information.", "error");
               }
            },
            (err) => {
               //let msg = `Unable to save user information : ${err.message}`;
               this.helper.showAlertMessage("Unable to save cable information.", "error");
            });
      }
        
      
       

      
    }

    async validateEntity(cable: Cable): Promise<string[]> {
        var errorMessages = [];

        if (cable.name == null || cable.name.trim() == '')
            errorMessages.push("Name cannot be empty.");
        else {
            let resp = await this.cableService.checkNameExists(cable.name);

           if (resp.message == 'false')
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
