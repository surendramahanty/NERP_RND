import { Position, Point } from './geometry';
import { Cable } from '../../entities/models/cable';
import { Helper } from '../helper';
//import { Accessory } from '../../designs/models/design';
import { Civilwork } from '../../civilworks/models/civilwork';
import { Chamber } from '../../entities/models/chamber';
import { Pole } from '../../entities/models/pole';
import { Splitter } from '../../entities/models/splitter';
import { SpliceClosure } from '../../entities/models/spliceClosure';
import { Duct } from '../../entities/models/duct';
import { ODF } from '../../entities/models/odf';
import { Accessory } from '../../accessories/models/accessory';

export class GeoNode {
    id?: string;
    levelName?: string;
    level: number;
    coordinates?: Position;
    connections?: number;
    children?: GeoNode[];
    segments?: Segment[];

    constructor(id?:string, coordinates?: Position) {

        //if (id == null || id == "")
        //    id = Helper.generateObjectId();

        this.coordinates = coordinates;
    }
}

export class Segment {
    id: string;
    start: string;
    end: string;
    coordinates: Array<Position>;
    accessories?: Accessory[];
    civilworks?: Civilwork[];
    cable?: Cable;
    chambers?: Chamber[];
    ducts?: Duct;
    odfs?: ODF[];
    poles?: Pole[];
    splitters?: Splitter[];
    spliceClosures?: SpliceClosure[];
}
