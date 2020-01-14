import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayerList } from './views/layer-list';
import { LayerDetails } from './views/layer-details';

export const layerRoutes: Routes = [
   {
      path: 'layers',
      children: [
         { path: '', component: LayerList },
         { path: 'details', component: LayerDetails },
         { path: 'details/:id', component: LayerDetails },
      ]
   },
];

export const LayerRouting: ModuleWithProviders = RouterModule.forChild(layerRoutes);



