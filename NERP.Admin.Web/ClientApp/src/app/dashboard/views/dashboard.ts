import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

import { DashboardService } from '../services/dashboard.service';

declare var $: any;
declare var echarts: any;

@Component({
   templateUrl: './dashboard.html',
   providers: [DashboardService],
})
export class Dashboard implements OnInit {

   constructor(
      private dashboardService: DashboardService) { }

   ngOnInit() {
      //this.getFormData();
   }

   getFormData() {

      //$("#ajax-loading").show();

      //let taskSummarySvc = this.reportsService.getTaskSummary();
      //let realTimeSummarySvc = this.reportsService.getRealTimeSummary();

      //forkJoin([taskSummarySvc, realTimeSummarySvc]).subscribe(
      //   async results => {
      //      var roles=[]
      //      if (results[0] && results[0].data) {
      //         this.taskSummary = results[0].data;
      //      }

      //      if (results[1] && results[1].data) {
      //         //this.eDeliverySummary = results[1].data;
      //         //this.showRealTimeSummaryChart();
      //      }

      //      //await new Promise(resolve => {
      //      //   setTimeout(() => {
      //      //      roles = this.accountService.roles;
      //      //      resolve();
      //      //   }, 100);
      //      //});

          
      //      var loginUser = this.accountService.loginUser;

      //      this.userRole = roles.find(x => x.id.toLowerCase() == loginUser.role.toLowerCase());

      //      $("#ajax-loading").hide();

      //   },
      //   error => {
      //      $("#ajax-loading").hide();
      //   });
   }

}
