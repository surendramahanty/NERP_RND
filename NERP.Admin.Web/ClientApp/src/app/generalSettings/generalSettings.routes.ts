import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralSettingsDetails } from './views/generalSettings-details';

export const generalSettingsRoutes: Routes = [
   {
      path: 'generalSettings',
      children: [
         { path: '', component: GeneralSettingsDetails },
      ]
   },
];

export const GeneralSettingsRouting: ModuleWithProviders = RouterModule.forChild(generalSettingsRoutes);
