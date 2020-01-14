import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityLogDetails } from './views/activityLog-details';
import { ActivityLogList } from './views/activityLog-list';

export const activityLogRoutes: Routes = [
   {
      path: 'activityLogs',
      children: [
         { path: '', component: ActivityLogList },
         { path: 'details/:id', component: ActivityLogDetails },
      ]
   },
];

export const ActivityLogRouting: ModuleWithProviders = RouterModule.forChild(activityLogRoutes);
