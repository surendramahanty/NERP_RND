import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatRadioModule, MatSelectModule, MatCheckboxModule, MatSliderModule } from '@angular/material';

import { EntitiesRouting } from './entities.routes';
import { EntityList } from './views/entity-list';
import { CustomFields } from './components/custom-fields';
import { CableDetails } from './views/cable-details';
import { ChamberDetails } from './views/chamber-details';
import { DuctDetails } from './views/duct-details';
import { ODFDetails } from './views/odf-details';
import { PoleDetails } from './views/pole-details';
import { SplitterDetails } from './views/splitter-details';
import { SpliceClosureDetails } from './views/spliceClosure-details';
import { CableService } from './services/cable.service';
import { ChamberService } from './services/chamber.service';
import { DuctService } from './services/duct.service';
import { ODFService } from './services/odf.service';
import { PoleService } from './services/pole.service';
import { SpliceClosureService } from './services/spliceClosure.service';
import { SplitterService } from './services/splitter.service';
import { SupplierComponent } from './components/supplier';
import { HomepassService } from './services/homepass.service';
import { HomepassDetails } from './views/homepass-details';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatRadioModule, MatSelectModule, MatCheckboxModule, MatSliderModule,
        EntitiesRouting
    ],
    declarations: [
        EntityList,
        CustomFields,
        SupplierComponent,
        CableDetails,
        ChamberDetails,
        DuctDetails,
        ODFDetails,
        PoleDetails,
        SplitterDetails,
        SpliceClosureDetails,
        HomepassDetails
    ],
    providers: [
        CableService,
        ChamberService,
        DuctService,
        ODFService,
        PoleService,
        SpliceClosureService,
        SplitterService,
        HomepassService
    ]
})
export class EntitiesModule { }
