import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { forkJoin } from 'rxjs';

import { Helper } from '../../common/helper';
import { FdtService } from '../services/fdt.service';
import { FDT } from '../models/fdt';

declare var $: any;

@Component({
   templateUrl: './fdt-details.html',
   providers: [FdtService],
})
export class FdtDetails implements OnInit {
   Flag1 = "Fdt";
   fdtId: string;
   fdt: FDT;
    title: string = "New Fdt";

    constructor(
        private location: Location,
        private route: ActivatedRoute,
       private fdtService: FdtService,
        private helper: Helper) {

       this.fdt = new FDT();
    }

    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.fdtId = params['id'];

              if (this.fdtId != null)
                    this.title = "Edit Fdt";
                else {
                 this.title = "New Fdt";
                }

              this.getFormData(this.fdtId);

            });
    }

    getFormData(fdtId: string) {



       if (fdtId != null) {

            $("#ajax-loading").show();

          this.fdtService.getFDT(fdtId).subscribe(
             resp => {
                this.fdt = new FDT();

                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                       if (resp.data != null) {
                          this.fdt = resp.data;
                        }
                    }

                    $("#ajax-loading").hide();
                },
                (err) => {
                   $("#ajax-loading").hide();
                   this.fdt = new FDT();
                    this.helper.showAlertMessage("Unable to fetch fdt details", "error");
                });
        }
        else
          this.fdt = new FDT();
    }

   async save() {
      if (this.fdt.id == undefined) {
         var errorMessages = await this.validateEntity(this.fdt);

         if (errorMessages.length == 0) {

            this.fdtService.saveFDT(this.fdt).subscribe(
               resp => {

                  if (resp.status.toLowerCase() == "error") {
                     this.helper.showAlertMessage(resp.message, "error");
                  }
                  else {
                     if (resp.data != null) {
                        this.helper.showAlertMessage("Fdt information saved", "success");
                        this.goBack();
                     }
                     else
                        this.helper.showAlertMessage("Unable to save fdt information.", "error");
                  }
               },
               (err) => {
                  //let msg = `Unable to save user information : ${err.message}`;
                  this.helper.showAlertMessage("Unable to fdt fdt information.", "error");
               });
         }
         else {
            this.helper.showAlertMessage(this.helper.getErrorMessagesText(errorMessages), "error");
         }
      } else {
        

         this.fdtService.saveFDT(this.fdt).subscribe(
               resp => {

                  if (resp.status.toLowerCase() == "error") {
                     this.helper.showAlertMessage(resp.message, "error");
                  }
                  else {
                     if (resp.data != null) {
                        this.helper.showAlertMessage("FDT information saved", "success");
                        this.goBack();
                     }
                     else
                        this.helper.showAlertMessage("Unable to save fdt information.", "error");
                  }
               },
               (err) => {
                  //let msg = `Unable to save user information : ${err.message}`;
                  this.helper.showAlertMessage("Unable to save fdt information.", "error");
               });
         
        
      }
    }

    async validateEntity(fdt: FDT): Promise<string[]> {
        var errorMessages = [];

       if (fdt.name == null || fdt.name.trim() == '')
                errorMessages.push("Name cannot be empty.");
       else {
          let resp = await this.fdtService.checkNameExists(fdt.name);

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
