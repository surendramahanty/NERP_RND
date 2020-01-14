import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

import { GeneralSettings } from '../model/generalSettings';
import { GeneralSettingsService } from '../services/generalSettings.service';
import { Helper } from '../../common/helper';

declare var $: any

@Component({
   templateUrl: './generalSetting-details.html',
   providers: [GeneralSettingsService],
})
export class GeneralSettingsDetails implements OnInit {

   generalSettings: GeneralSettings = new GeneralSettings();

   constructor(
      private router: Router,
      private route: ActivatedRoute,
      private generalSettingsService: GeneralSettingsService,
      private helper: Helper) { }

   ngOnInit() {
       this.getFormData();
   }

   //public settings: PaletteSettings = {
   //   //palette: [
   //   //   "#7f8000", "#00ff00", "#0017ff", "#0098b3",
   //   //   "#9000ec", "#108810", "#505050", "#ffe134", "#ff0000",
   //   //   "#ff1193"
   //   //],
   //   palette: [
   //      "#00ff00", "#0017ff", "#9000ec", "#ffe134", "#ff0000",
   //   ],
   //   columns: 5,
   //   tileSize: 25
   //}

  // addBoundaryHierarchy() {
  //    if (this.generalSettings.boundaryHierarchies == null)
  //       this.generalSettings.boundaryHierarchies = [];

  //    this.generalSettings.boundaryHierarchies.push({ name: "", colorCode: "" });
  // }

  // deleteboundaryHierarchy(index) {
  //    this.generalSettings.boundaryHierarchies.splice(index, 1);
  // }

  ///* addUtilization() {

  //    if (this.generalSettings.ofcUtilization == null)
  //       this.generalSettings.ofcUtilization = [];

  //    this.generalSettings.ofcUtilization.push({ name: "", colorCode: "" });
  // }

  // deleteofcUtilization(index) {
  //    this.generalSettings.ofcUtilization.splice(index, 1);
  // }*/
  // addConstructionStage() {

  //    if (this.generalSettings.constructionStages == null)
  //       this.generalSettings.constructionStages = [];

  //    this.generalSettings.constructionStages.push({ name: "", colorCode: "#0017ff" });
  // }

  // deleteConstructionStage(index) {
  //    this.generalSettings.constructionStages.splice(index, 1);
  // }

  // addActivationStage() {

  //    if (this.generalSettings.activationStages == null)
  //       this.generalSettings.activationStages = [];

  //    this.generalSettings.activationStages.push({ name: "", colorCode: "#0017ff" });
  // }

  // deleteActivationStage(index) {
  //    this.generalSettings.activationStages.splice(index, 1);
  // }

  // addAccessibility() {

  //    if (this.generalSettings.accessibilities == null)
  //       this.generalSettings.accessibilities = [];

  //    this.generalSettings.accessibilities.push({ name: "", colorCode: "#0017ff" });
  // }

  // deleteAccessibility(index) {
  //    this.generalSettings.accessibilities.splice(index, 1);
  // }

  // addHierarchyType() {

  //    if (this.generalSettings.hierarchyTypes == null)
  //       this.generalSettings.hierarchyTypes = [];

  //    this.generalSettings.hierarchyTypes.push({ name: "", colorCode: "#0017ff" });
  // }

  // deleteHierarchyType(index) {
  //    this.generalSettings.hierarchyTypes.splice(index, 1);
  // }
  // addOpticalLinkBudget() {

  //    if (this.generalSettings.opticalLinkBudget == null)
  //       this.generalSettings.opticalLinkBudget = [];

  //    this.generalSettings.opticalLinkBudget.push({ waveLengthName: "", cablelengthLoss: "", spliceLoss: "", patchingLoss: "", patchConnectorLoss:""});
  // }

  // deleteOpticalLinkBudget(index) {
  //    this.generalSettings.opticalLinkBudget.splice(index, 1);
  // }
    getFormData() {
        $("#ajax-loading").show();

        this.generalSettingsService.getGeneralSettings().subscribe(
            resp => {
                this.generalSettings = new GeneralSettings();

                if (resp.status.toLowerCase() == "error") {
                    this.helper.showAlertMessage(resp.message, "error");
                }
                else {
                    if (resp.data != null) {
                        this.generalSettings = resp.data;
                    }
                }

                $("#ajax-loading").hide();
            },
            (err) => {
                $("#ajax-loading").hide();
                this.generalSettings = new GeneralSettings();
                let msg = `Unable to fetch general settings : ${err.message}`;
                this.helper.showAlertMessage(msg, "error");
            });

   }

   save() {

      var errorMessages = this.validateGeneralSetting(this.generalSettings);

      if (errorMessages.length == 0) {

         this.generalSettingsService.saveGeneralSettings(this.generalSettings).subscribe(
            resp => {

               if (resp && resp.data && resp.status.toLowerCase() == "ok")
                  this.helper.showAlertMessage("General settings are saved", "success");
               else
                  this.helper.showAlertMessage("error saving general settings", "error");
            },
            err => {
               this.helper.showAlertMessage("Unable to save general settings.", "error");
            });
      }
      else {
         this.helper.showAlertMessage(this.helper.getErrorMessagesText(errorMessages), "error");
      }
   }

   validateGeneralSetting(generalSetting: GeneralSettings): string[] {
      var errorMessages = [];

       if (generalSetting.fileAttachmentLimit < 0 || generalSetting.fileAttachmentLimit > 20)
         errorMessages.push("File attachments must be within the range of 0 to 20 MBs")
      
      return errorMessages;
   }
   
   //public restrictAlpha(event): boolean {
   //  // var event = e.keyCode == 0 ? e.charCode : e.keyCode;
   //   return (event.charCode > 96 && event.charCode < 123) || (event.charCode > 64 && event.charCode < 91) || (event.charCode >= 48 && event.charCode <= 57) || event.charCode <= 32;
   //}
}
