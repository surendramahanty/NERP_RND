import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepassList } from './views/homepass-list';
import { HomepassDetails } from './views/homepass-details';

export const homepassRoutes: Routes = [
   {
      path: 'homepasses',
      children: [
         { path: '', component: HomepassList },
         { path: 'details', component: HomepassDetails },
         { path: 'details/:id', component: HomepassDetails },
      ]
   },
];

export const HomepassRouting: ModuleWithProviders = RouterModule.forChild(homepassRoutes);
