import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule, MatCheckboxModule, MatRadioModule } from '@angular/material';
import { SharedModule } from '../shared.module';

import { DesignRouting } from './design.routes';
import { DesignList } from './views/design-list';
import { DesignDetails } from './views/design-details';
import { DesignService } from './services/design.service';
import { UserService } from '../users/services/user.service';
import { SplitterService } from '../entities/services/splitter.service';

import { DesignInfo } from './components/dzn-info';
import { DesignHelper } from './services/design.helper';
import { DesignDocuments } from './components/dzn-documents';
import { DesignClusters } from './components/dzn-clusters';
import { DesignBookingIds } from './components/dzn-bookingIds';
import { DesignNetworkSettings } from './components/dzn-networkSettings';
import { DesignEntities } from './components/dzn-entities';
import { CableService } from '../entities/services/cable.service';
import { ChamberService } from '../entities/services/chamber.service';
import { DuctService } from '../entities/services/duct.service';
import { ODFService } from '../entities/services/odf.service';
import { PoleService } from '../entities/services/pole.service';
import { SpliceClosureService } from '../entities/services/spliceClosure.service';
import { AccessoryService } from '../accessories/services/accessory.service';
import { CivilworkService } from '../civilworks/services/civilwork.service';
import { DesignAccessories } from './components/dzn-accessories';
import { DesignCivilwork } from './components/dzn-civilworks';
import { DesignDuct } from './components/dzn-duct';
import { DesignCable } from './components/dzn-cable';
import { DesignSpliceClosure } from './components/dzn-spliceClosure';
import { DesignCosting } from './components/dzn-costing';
import { DesignMap } from './components/dzn-map';
import { DesignBOM } from './components/dzn-bom';
import { DesignFPDs } from './components/dzn-fdp';
import { BomHelper } from './services/bom.helper';
import { FTTxHelper } from './services/fttx.helper';
import { BackboneHelper } from './services/backbone.helper';
import { fdtService } from '../entities/services/fdt.service';
import { fatService } from '../entities/services/fat.service';
import { PopService } from '../entities/services/pop.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSelectModule,
        SharedModule,
        DesignRouting
    ],
    declarations: [
        DesignList,
        DesignDetails,
        DesignInfo,
        DesignDocuments,
        DesignClusters,
        DesignBookingIds,
        DesignNetworkSettings,
        DesignEntities,
        DesignFPDs,
        DesignAccessories,
        DesignCivilwork,
        DesignDuct,
        DesignCable,
        DesignSpliceClosure,
        DesignCosting,
        DesignMap,
        DesignBOM

    ],
    providers: [
        DesignService,
        DesignHelper,
        BomHelper,
        FTTxHelper,
        BackboneHelper,
        UserService,
        CableService,
        ChamberService,
        DuctService,
        ODFService,
        PoleService,
        SpliceClosureService,
        SplitterService,
        AccessoryService,
       CivilworkService, fdtService, fatService, PopService
    ]
})
export class DesignModule { }
