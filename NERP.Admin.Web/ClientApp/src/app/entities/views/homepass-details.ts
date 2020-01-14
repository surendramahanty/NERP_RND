import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Helper } from '../../common/helper';
import { Homepass } from '../models/homepass';
import { HomepassService } from '../services/homepass.service';

declare var $: any;

@Component({
    templateUrl: './homepass-details.html',
    providers: [HomepassService],
})
export class HomepassDetails implements OnInit {

    homepassId: string;
    homepass: Homepass;
    title: string = "New Homepass";

    constructor(
        private location: Location,
        private route: ActivatedRoute,
        private homepassService: HomepassService,
        private helper: Helper) {

        this.homepass = new Homepass();
    }

    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.homepassId = params['id'];

                if (this.homepassId != null)
                    this.title = "Edit Homepass";
                else {
                    this.title = "New Homepass";
                }

                this.getFormData(this.homepassId);

            });
    }

    getFormData(homepassId: string) {

        if (homepassId != null) {

            $("#ajax-loading").show();

            this.homepassService.getHomepass(homepassId).subscribe(
                resp => {
                    this.homepass = new Homepass();

                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.homepass = resp.data;
                        }
                    }

                    $("#ajax-loading").hide();
                },
                (err) => {
                    $("#ajax-loading").hide();
                    this.homepass = new Homepass();
                    this.helper.showAlertMessage("Unable to fetch homepass details", "error");
                });
        }
        else
            this.homepass = new Homepass();
    }

   async save() {
      if (this.homepass.id == undefined) {
         var errorMessages = await this.validateEntity(this.homepass);

         if (errorMessages.length == 0) {

            this.homepassService.saveHomepass(this.homepass).subscribe(
               resp => {

                  if (resp.status.toLowerCase() == "error") {
                     this.helper.showAlertMessage(resp.message, "error");
                  }
                  else {
                     if (resp.data != null) {
                        this.helper.showAlertMessage("Homepass information saved", "success");
                        this.goBack();
                     }
                     else
                        this.helper.showAlertMessage("Unable to save homepass information.", "error");
                  }
               },
               (err) => {
                  //let msg = `Unable to save user information : ${err.message}`;
                  this.helper.showAlertMessage("Unable to save homepass information.", "error");
               });
         }
         else {
            this.helper.showAlertMessage(this.helper.getErrorMessagesText(errorMessages), "error");
         }
      } else {
         this.homepassService.saveHomepass(this.homepass).subscribe(
            resp => {

               if (resp.status.toLowerCase() == "error") {
                  this.helper.showAlertMessage(resp.message, "error");
               }
               else {
                  if (resp.data != null) {
                     this.helper.showAlertMessage("Homepass information saved", "success");
                     this.goBack();
                  }
                  else
                     this.helper.showAlertMessage("Unable to save homepass information.", "error");
               }
            },
            (err) => {
               //let msg = `Unable to save user information : ${err.message}`;
               this.helper.showAlertMessage("Unable to save homepass information.", "error");
            });
      }
    }

    async validateEntity(homepass: Homepass): Promise<string[]> {
        var errorMessages = [];

        if (homepass.name == null || homepass.name.trim() == '')
                errorMessages.push("Name cannot be empty.");
        else {
            let response = await this.homepassService.checkNameExists(homepass.name);

           if (response.message =='false')
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
