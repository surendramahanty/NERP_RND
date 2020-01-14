import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule, MatRadioModule, MatSelectModule, MatSliderModule } from '@angular/material';
import { SharedModule } from '../shared.module';
import { AccessoryRouting } from './accessory.routes';
import { AccessoryService } from './services/accessory.service';
import { AccessoryDetails } from './views/accessory-details';
import { AccessoryList } from './views/accessory-list';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatRadioModule, MatSelectModule, MatCheckboxModule, MatSliderModule,
        AccessoryRouting,
        SharedModule
    ],
    declarations: [
        AccessoryList,
        AccessoryDetails,
    ],
    providers: [
        AccessoryService,

    ]
})
export class AccessoryModule { }
