import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';

//import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';

import { HomepassList } from './views/homepass-list';
import { HomepassDetails } from './views/homepass-details';
import { HomepassService } from './services/homepass.service';
import { HomepassRouting } from './homepass.routes';
import { SharedModule } from '../shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CheckboxModule,
        TreeTableModule,
        HomepassRouting,
        SharedModule
    ],
    declarations: [
        HomepassList,
        HomepassDetails
    ],
    providers: [
        HomepassService
    ]
})
export class HomepassModule { }
