import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoryDetails } from './views/accessory-details';
import { AccessoryList } from './views/accessory-list';

export const accessoryRoutes: Routes = [
    {
        path: 'accessories',
        children: [
            { path: '', component: AccessoryList },
            { path: 'details', component: AccessoryDetails },
            { path: 'details/:id', component: AccessoryDetails }
        ]
    },
];

export const AccessoryRouting: ModuleWithProviders = RouterModule.forChild(accessoryRoutes);
