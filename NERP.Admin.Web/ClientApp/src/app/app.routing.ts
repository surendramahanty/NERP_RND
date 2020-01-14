import { Routes, RouterModule } from '@angular/router';
import { Dashboard } from './dashboard/views/dashboard';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Dashboard },
    {
        path: 'groups',
        loadChildren: () => import('./groups/group.module').then(m => m.GroupModule)
    },
    {
        path: 'roles',
        loadChildren: () => import('./roles/role.module').then(m => m.RoleModule)
    },
    {
        path: 'users',
        loadChildren: () => import('./users/user.module').then(m => m.UserModule)
    },
    {
        path: 'entities',
        loadChildren: () => import('./entities/entities.module').then(a => a.EntitiesModule)
    },
    {
        path: 'accessories',
        loadChildren: () => import('./accessories/accessory.module').then(a => a.AccessoryModule)
    },
    {
        path: 'civilworks',
        loadChildren: () => import('./civilworks/civilwork.module').then(a => a.CivilworkModule)
    },
    {
        path: 'layers',
        loadChildren: () => import('./layers/layer.module').then(a => a.LayerModule)
    },
    {
        path: 'generalSettings',
        loadChildren: () => import('./generalSettings/generalSettings.module').then(a => a.GeneralSettingsModule)
    },
    {
        path: 'activityLogs',
        loadChildren: () => import('./activityLogs/activityLog.module').then(a => a.ActivityLogModule)
    }
];

export const Routing = RouterModule.forRoot(appRoutes);
