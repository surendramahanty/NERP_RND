import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { forkJoin } from 'rxjs';

import { Helper } from '../../common/helper';
import { ODFService } from '../services/odf.service';
import { ODF } from '../models/odf';

declare var $: any;

@Component({
    templateUrl: './odf-details.html',
    providers: [ODFService],
})
export class ODFDetails implements OnInit {

    odfId: string;
    odf: ODF;
    title: string = "New ODF";

    constructor(
        private location: Location,
        private route: ActivatedRoute,
        private odfService: ODFService,
        private helper: Helper) {

        this.odf = new ODF();
    }

    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.odfId = params['id'];

                if (this.odfId != null)
                    this.title = "Edit ODF";
                else {
                    this.title = "New ODF";
                }

                this.getFormData(this.odfId);

            });
    }

    getFormData(odfId: string) {

        if (odfId != null) {

            $("#ajax-loading").show();

            this.odfService.getODF(odfId).subscribe(
                resp => {
                    this.odf = new ODF();

                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.odf = resp.data;
                        }
                    }

                    $("#ajax-loading").hide();
                },
                (err) => {
                    $("#ajax-loading").hide();
                    this.odf = new ODF();
                    this.helper.showAlertMessage("Unable to fetch odf details", "error");
                });
        }
        else
            this.odf = new ODF();
    }

   async save() {
      if (this.odf.id == undefined) {
         var errorMessages = await this.validateEntity(this.odf);

         if (errorMessages.length == 0) {

            this.odfService.saveODF(this.odf).subscribe(
               resp => {

                  if (resp.status.toLowerCase() == "error") {
                     this.helper.showAlertMessage(resp.message, "error");
                  }
                  else {
                     if (resp.data != null) {
                        this.helper.showAlertMessage("ODF information saved", "success");
                        this.goBack();
                     }
                     else
                        this.helper.showAlertMessage("Unable to save ODF information.", "error");
                  }
               },
               (err) => {
                  //let msg = `Unable to save user information : ${err.message}`;
                  this.helper.showAlertMessage("Unable to save ODF information.", "error");
               });
         }
         else {
            this.helper.showAlertMessage(this.helper.getErrorMessagesText(errorMessages), "error");
         }
      } else {
         

            this.odfService.saveODF(this.odf).subscribe(
               resp => {

                  if (resp.status.toLowerCase() == "error") {
                     this.helper.showAlertMessage(resp.message, "error");
                  }
                  else {
                     if (resp.data != null) {
                        this.helper.showAlertMessage("ODF information saved", "success");
                        this.goBack();
                     }
                     else
                        this.helper.showAlertMessage("Unable to save ODF information.", "error");
                  }
               },
               (err) => {
                  //let msg = `Unable to save user information : ${err.message}`;
                  this.helper.showAlertMessage("Unable to save ODF information.", "error");
               });
         
      }
    }

    async validateEntity(odf: ODF): Promise<string[]> {
        var errorMessages = [];

        if (odf.name == null || odf.name.trim() == '')
                errorMessages.push("Name cannot be empty.");
        else {
            let resp = await this.odfService.checkNameExists(odf.name);

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
