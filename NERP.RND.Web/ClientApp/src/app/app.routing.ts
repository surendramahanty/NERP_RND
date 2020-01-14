import { Routes, RouterModule } from '@angular/router';
import { Dashboard } from './dashboard/views/dashboard';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Dashboard },
    {
        path: 'homepasses',
        loadChildren: () => import('./homepasses/homepass.module').then(m => m.HomepassModule)
    },
    {
        path: 'clusters',
        loadChildren: () => import('./clusters/cluster.module').then(m => m.ClusterModule)
    },
    {
        path: 'designs',
        loadChildren: () => import('./designs/design.module').then(m => m.DesignModule)
    }
];

export const Routing = RouterModule.forRoot(appRoutes);
