import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupList } from './views/group-list';
import { GroupDetails } from './views/group-details';

export const groupRoutes: Routes = [
   {
      path: 'groups',
      children: [
         { path: '', component: GroupList },
         { path: 'details', component: GroupDetails },
         { path: 'details/:id', component: GroupDetails },
      ]
   },
];

export const GroupRouting: ModuleWithProviders = RouterModule.forChild(groupRoutes);
