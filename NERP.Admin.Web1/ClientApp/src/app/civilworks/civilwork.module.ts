import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule, MatRadioModule, MatSelectModule, MatSliderModule } from '@angular/material';
import { SharedModule } from '../shared.module';
import { CivilworkRouting } from './civilwork.routes';
import { CivilworkService } from './services/civilwork.service';
import { CivilworkDetails } from './views/civilwork-details';
import { CivilworkList } from './views/civilwork-list';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatRadioModule, MatSelectModule, MatCheckboxModule, MatSliderModule,
        CivilworkRouting,
        SharedModule
    ],
    declarations: [
        CivilworkList,
        CivilworkDetails,
    ],
    providers: [
        CivilworkService,

    ]
})
export class CivilworkModule { }
