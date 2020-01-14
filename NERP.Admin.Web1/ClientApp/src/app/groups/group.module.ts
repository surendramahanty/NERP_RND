import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';

import { TreeTableModule } from 'primeng/treetable';

import { GroupList } from './views/group-list';
import { GroupDetails } from './views/group-details';
import { GroupService } from './services/group.service';
import { GroupRouting } from './group.routes';
import { SharedModule } from '../shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CheckboxModule,
        TreeTableModule,
        GroupRouting,
        SharedModule
    ],
    declarations: [
        GroupList,
        GroupDetails
    ],
    providers: [
        GroupService
    ]
})
export class GroupModule { }
