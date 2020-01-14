import { DbBaseEntity } from '../../common/models/dbBaseEntity';
import { Document } from '../../common/models/document';
import { BookingId } from '../../common/models/bookingId';
import { Cable } from '../../entities/models/cable';
import { Chamber } from '../../entities/models/chamber';
import { Duct } from '../../entities/models/duct';
import { Pole } from '../../entities/models/pole';
import { SpliceClosure } from '../../entities/models/spliceClosure';
import { Splitter } from '../../entities/models/splitter';
import { Accessory } from '../../accessories/models/accessory';
import { Civilwork } from '../../civilworks/models/civilwork';

import { GeoNode } from '../../common/geo/geoNode';
import { ODF } from '../../entities/models/odf';
import { FDP } from '../../entities/models/fdp';
import { Homepass } from '../../homepasses/models/homepass';
import { PoP } from '../../entities/models/pop';

export class Design extends DbBaseEntity {
    referenceId: string;
    name: string;
    code: string;
    description: string;
    designType: string;
    assignedTo: string;
    version: number = 1;
    documents: Document[] = new Array<Document>();
    clusterId: string;
    homepasses: Homepass[]; 
    bookingIds: BookingId[] = new Array<BookingId>();
    networkSettings: NetworkSetting[] = new Array<NetworkSetting>();
    log: string = "";
    bluePrint?: GeoNode;
    boq: Costing[];

    generatedCodes: CodeId[];

}

export class NetworkSetting {
    id: string;
    name: string;
    position: number;
    startNode: NodeSettings = new NodeSettings();
    destinationNode: NodeSettings = new NodeSettings();
    fdpNode?: NodeSettings = new NodeSettings();
    cabling: Cabling = new Cabling();
}

export class NodeSettings {
    entitySettings: EntitySettings = new EntitySettings();
    fdpSettings?: FDPSettings = new FDPSettings();
    accessorySettings: AccessorySettings = new AccessorySettings();
    civilworkSettings: CivilworkSettings = new CivilworkSettings();
    ductSettings: DuctSettings = new DuctSettings();
    equipmentSettings: EquipmentSettings = new EquipmentSettings();
    fiberDrop: number;
}

export class EntitySettings {
    entityName: string = "";
    dataSource: string = "automatic";
    existingDesignId?: string;
    importedFile?: string;
    chambers: Chamber[] = new Array<Chamber>();
    odfs: ODF[] = new Array<ODF>();
    poles: Pole[] = new Array<Pole>();
    spliceClosures: SpliceClosure[] = new Array<SpliceClosure>();
    splitters: Splitter[] = new Array<Splitter>();
    pops: PoP[] = new Array<PoP>();
}

export class FDPSettings {
    dataSource: string = "import";
    existingDesignId?: string;
    importedFile?: string;
    fdps: FDP[] = new Array<FDP>();
    aggregateFdps: FDP[] = new Array<FDP>();
}

export class AccessorySettings {
    entityName: string = "";
    dataSource: string = "automatic";
    //existingDesignId?: string;
    //importedFile?: string;
    accessories?: Accessory[] = new Array<Accessory>();
    existingAccessories?: Accessory[] = new Array<Accessory>();
}

export class CivilworkSettings {
    civilworks: Civilwork[] = new Array<Civilwork>();
}

export class DuctSettings {
    ducts: Duct[] = new Array<Duct>();
}

export class EquipmentSettings {
    entityName: string = "";
    dataSource: string = "";
    equipments: string[] = new Array<string>();
}

export class Cabling {
    cableSettings: CableSettings = new CableSettings();
    spliceClosureSettings: SpliceClosureSettings = new SpliceClosureSettings();
    accessorySettings: AccessorySettings = new AccessorySettings();
    ductSettings: DuctSettings = new DuctSettings();
}

export class CableSettings {
    entityName: string = "Cable";
    cableType: string;
    dataSource: string = "";
    cables: Cable[] = new Array<Cable>();
    pole: Pole = new Pole();
    chamber: Chamber = new Chamber();
    chamberInterval: number;
    cableLoop: number;
    loopInterval: number;
    loopAtClosure: number;
    connectionPercent: number = 100;
}

export class SpliceClosureSettings {
    entityName: string = "";
    dataSource: string = "";
    spliceClosures: SpliceClosure[] = new Array<SpliceClosure>();;
    straightJoin: boolean;
    drumLength: number;
    intersectionJoints: boolean;
}

export class CodeId {
    entityType: string;
    maxId: number;
}

export class Costing {
    levelName: string;
    level: number;
    entityType: string;
    code: string;
    description: string;
    units: string;
    quantity: number = 0;
    materialCost: number = 0;
    serviceCost: number = 0;
    currency: string;
}
