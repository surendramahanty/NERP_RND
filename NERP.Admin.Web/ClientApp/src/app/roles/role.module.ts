import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';

//import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';

import { RoleList } from './views/role-list';
import { RoleDetails } from './views/role-details';
import { RoleService } from './services/role.service';
import { RoleRouting } from './role.routes';
import { SharedModule } from '../shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CheckboxModule,
        TreeTableModule,
        RoleRouting,
        SharedModule
    ],
    declarations: [
        RoleList,
        RoleDetails
    ],
    providers: [
        RoleService
    ]
})
export class RoleModule { }
