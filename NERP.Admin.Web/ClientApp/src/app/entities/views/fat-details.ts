import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { forkJoin } from 'rxjs';

import { Helper } from '../../common/helper';
import { FatService } from '../services/fat.service';
import { FAT } from '../models/fat';

declare var $: any;

@Component({
   templateUrl: './fat-details.html',
   providers: [FatService],
})
export class FatDetails implements OnInit {
   Flag1 = "Fat";
   fatId: string;
   fat: FAT;
    title: string = "New Fat";

    constructor(
        private location: Location,
        private route: ActivatedRoute,
       private fatService: FatService,
        private helper: Helper) {

       this.fat = new FAT();
    }

    ngOnInit() {
        this.route.params.subscribe(
           params => {
              this.fatId = params['id'];
             
              if (this.fatId != null)
                    this.title = "Edit Fat";
                else {
                 this.title = "New Fat";
                }

              this.getFormData(this.fatId);

            });
    }

   getFormData(fatId: string) {



      if (fatId != null) {

            $("#ajax-loading").show();

         this.fatService.getFAT(fatId).subscribe(
             resp => {
                this.fat = new FAT();

                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                       if (resp.data != null) {
                          this.fat = resp.data;
                        }
                    }

                    $("#ajax-loading").hide();
                },
                (err) => {
                   $("#ajax-loading").hide();
                   this.fat = new FAT();
                    this.helper.showAlertMessage("Unable to fetch fat details", "error");
                });
        }
        else
          this.fat = new FAT();
    }

   async save() {
      if (this.fat.id == undefined) {
         var errorMessages = await this.validateEntity(this.fat);

         if (errorMessages.length == 0) {

            this.fatService.saveFAT(this.fat).subscribe(
               resp => {

                  if (resp.status.toLowerCase() == "error") {
                     this.helper.showAlertMessage(resp.message, "error");
                  }
                  else {
                     if (resp.data != null) {
                        this.helper.showAlertMessage("Fat information saved", "success");
                        this.goBack();
                     }
                     else
                        this.helper.showAlertMessage("Unable to save fat information.", "error");
                  }
               },
               (err) => {
                  //let msg = `Unable to save user information : ${err.message}`;
                  this.helper.showAlertMessage("Unable to fat information.", "error");
               });
         }
         else {
            this.helper.showAlertMessage(this.helper.getErrorMessagesText(errorMessages), "error");
         }
      } else {
        

         this.fatService.saveFAT(this.fat).subscribe(
               resp => {

                  if (resp.status.toLowerCase() == "error") {
                     this.helper.showAlertMessage(resp.message, "error");
                  }
                  else {
                     if (resp.data != null) {
                        this.helper.showAlertMessage("FAT information saved", "success");
                        this.goBack();
                     }
                     else
                        this.helper.showAlertMessage("Unable to save fat information.", "error");
                  }
               },
               (err) => {
                  //let msg = `Unable to save user information : ${err.message}`;
                  this.helper.showAlertMessage("Unable to save fdt information.", "error");
               });
         
        
      }
    }

    async validateEntity(fat: FAT): Promise<string[]> {
        var errorMessages = [];

       if (fat.name == null || fat.name.trim() == '')
                errorMessages.push("Name cannot be empty.");
       else {
          let resp = await this.fatService.checkNameExists(fat.name);

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
