import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';

import { TreeTableModule } from 'primeng/treetable';

import { LayerList } from './views/layer-list';
import { LayerDetails } from './views/layer-details';
import { LayerService } from './services/layer.service';
import { LayerRouting } from './layer.routes';
import { SharedModule } from '../shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CheckboxModule,
        TreeTableModule,
        LayerRouting,
        SharedModule
    ],
    declarations: [
        LayerList,
        LayerDetails
    ],
    providers: [
        LayerService
    ]
})
export class LayerModule { }
