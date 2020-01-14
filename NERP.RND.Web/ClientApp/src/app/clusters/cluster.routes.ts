import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClusterList } from './views/cluster-list';
import { ClusterDetails } from './views/cluster-details';

export const clusterRoutes: Routes = [
   {
      path: 'clusters',
      children: [
         { path: '', component: ClusterList },
         { path: 'details', component: ClusterDetails },
         { path: 'details/:id', component: ClusterDetails },
      ]
   },
];

export const ClusterRouting: ModuleWithProviders = RouterModule.forChild(clusterRoutes);
