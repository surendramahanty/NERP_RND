import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { forkJoin } from 'rxjs';

import { Helper } from '../../common/helper';
import { PoleService } from '../services/pole.service';
import { Pole } from '../models/pole';

declare var $: any;

@Component({
    templateUrl: './pole-details.html',
    providers: [PoleService],
})
export class PoleDetails implements OnInit {

    poleId: string;
    pole: Pole;
    title: string = "New Pole";

    constructor(
        private location: Location,
        private route: ActivatedRoute,
        private poleService: PoleService,
        private helper: Helper) {

        this.pole = new Pole();
    }

    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.poleId = params['id'];

                if (this.poleId != null)
                    this.title = "Edit Pole";
                else {
                    this.title = "New Pole";
                }

                this.getFormData(this.poleId);

            });
    }

    getFormData(poleId: string) {



        if (poleId != null) {

            $("#ajax-loading").show();

            this.poleService.getPole(poleId).subscribe(
                resp => {
                    this.pole = new Pole();

                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.pole = resp.data;
                        }
                    }

                    $("#ajax-loading").hide();
                },
                (err) => {
                    $("#ajax-loading").hide();
                    this.pole = new Pole();
                    this.helper.showAlertMessage("Unable to fetch pole details", "error");
                });
        }
        else
            this.pole = new Pole();
    }

   async save() {
      if (this.pole.id == undefined) {
         var errorMessages = await this.validateEntity(this.pole);

         if (errorMessages.length == 0) {

            this.poleService.savePole(this.pole).subscribe(
               resp => {

                  if (resp.status.toLowerCase() == "error") {
                     this.helper.showAlertMessage(resp.message, "error");
                  }
                  else {
                     if (resp.data != null) {
                        this.helper.showAlertMessage("Pole information saved", "success");
                        this.goBack();
                     }
                     else
                        this.helper.showAlertMessage("Unable to save pole information.", "error");
                  }
               },
               (err) => {
                  //let msg = `Unable to save user information : ${err.message}`;
                  this.helper.showAlertMessage("Unable to save pole information.", "error");
               });
         }
         else {
            this.helper.showAlertMessage(this.helper.getErrorMessagesText(errorMessages), "error");
         }
      } else {
        

            this.poleService.savePole(this.pole).subscribe(
               resp => {

                  if (resp.status.toLowerCase() == "error") {
                     this.helper.showAlertMessage(resp.message, "error");
                  }
                  else {
                     if (resp.data != null) {
                        this.helper.showAlertMessage("Pole information saved", "success");
                        this.goBack();
                     }
                     else
                        this.helper.showAlertMessage("Unable to save pole information.", "error");
                  }
               },
               (err) => {
                  //let msg = `Unable to save user information : ${err.message}`;
                  this.helper.showAlertMessage("Unable to save pole information.", "error");
               });
         
        
      }
    }

    async validateEntity(pole: Pole): Promise<string[]> {
        var errorMessages = [];

        if (pole.name == null || pole.name.trim() == '')
                errorMessages.push("Name cannot be empty.");
        else {
            let resp = await this.poleService.checkNameExists(pole.name);

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
