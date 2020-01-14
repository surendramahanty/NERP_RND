import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesignList } from './views/design-list';
import { DesignDetails } from './views/design-details';

export const designRoutes: Routes = [
   {
      path: 'designs',
      children: [
         { path: '', component: DesignList },
         { path: 'details', component: DesignDetails },
         { path: 'details/:id', component: DesignDetails },
      ]
   },
];

export const DesignRouting: ModuleWithProviders = RouterModule.forChild(designRoutes);
