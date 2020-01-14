import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ActivityLogService } from '../services/activityLog.service';
import { ActivityLog } from '../models/activityLog';
import { Helper } from '../../common/helper';

declare var $: any;

@Component({
   templateUrl: './activityLog-details.html',
   providers: [ActivityLogService],
})
export class ActivityLogDetails implements OnInit {

   activityLogId: string = "";
   activityLog: ActivityLog = new ActivityLog();
   module_function: string = "";
   otherInfo: string = "";

   constructor(
      private location: Location,
      private route: ActivatedRoute,
      private activityLogService: ActivityLogService,
      private helper: Helper) { }


   ngOnInit() {
      this.route.params.subscribe(
         params => {
            this.activityLogId = params['id'];

            this.getFormData(this.activityLogId);
         });
   }

   getFormData(activityLogId: string) {

      $("#ajax-loading").show();

      this.activityLogService.getActivityLog(activityLogId).subscribe(
         resp => {
            if (resp.status.toLowerCase() == "error") {
               this.helper.showAlertMessage(resp.message, "error");
            }
            else {
               if (resp.data != null) {
                  this.activityLog = resp.data;
                  this.module_function = this.activityLog.module + " / " + this.activityLog.action;
                  this.otherInfo = JSON.stringify(JSON.parse(this.activityLog.otherInfo), undefined, 3);
               }
            }

            $("#ajax-loading").hide();
         },
         (err) => {
            $("#ajax-loading").hide();
            this.helper.showAlertMessage("Error fetching activity log.", "error");
         });
   }

   goBack(): void {
      this.location.back();
   }
}
