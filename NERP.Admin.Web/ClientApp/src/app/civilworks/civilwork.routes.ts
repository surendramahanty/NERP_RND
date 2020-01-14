import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CivilworkDetails } from './views/civilwork-details';
import { CivilworkList } from './views/civilwork-list';

export const civilworkRoutes: Routes = [
    {
        path: 'civilworks',
        children: [
            { path: '', component: CivilworkList },
            { path: 'details', component: CivilworkDetails },
            { path: 'details/:id', component: CivilworkDetails }
        ]
    },
];

export const CivilworkRouting: ModuleWithProviders = RouterModule.forChild(civilworkRoutes);
