import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserList } from './views/user-list';
import { UserDetails } from './views/user-details';

export const userRoutes: Routes = [
    {
        path: 'users',
        children: [
           { path: '', component: UserList },
           { path: 'details', component: UserDetails },
           { path: 'details/:id', component: UserDetails },
        ]
    },
];

export const UserRouting: ModuleWithProviders = RouterModule.forChild(userRoutes);
