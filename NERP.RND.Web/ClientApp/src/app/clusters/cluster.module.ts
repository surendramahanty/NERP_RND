import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { CheckboxModule } from 'primeng/checkbox';

//import { TreeModule } from 'primeng/tree';
//import { TreeTableModule } from 'primeng/treetable';
import { MatCheckboxModule } from '@angular/material';

import { ClusterList } from './views/cluster-list';
import { ClusterDetails } from './views/cluster-details';
import { ClusterService } from './services/cluster.service';
import { ClusterRouting } from './cluster.routes';
import { SharedModule } from '../shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatCheckboxModule,
        //TreeTableModule,
        ClusterRouting,
        SharedModule
    ],
    declarations: [
        ClusterList,
        ClusterDetails
    ],
    providers: [
        ClusterService
    ]
})
export class ClusterModule { }
