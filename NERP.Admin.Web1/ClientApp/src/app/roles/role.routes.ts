import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoleList } from './views/role-list';
import { RoleDetails } from './views/role-details';

export const roleRoutes: Routes = [
   {
      path: 'roles',
      children: [
         { path: '', component: RoleList },
         { path: 'details', component: RoleDetails },
         { path: 'details/:id', component: RoleDetails },
      ]
   },
];

export const RoleRouting: ModuleWithProviders = RouterModule.forChild(roleRoutes);
