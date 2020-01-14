import { LineString } from '../../common/geo/geometry';
import { BaseNetworkEntity } from './baseNetworkEntity';
import { Installation } from './installation';
import { Optics } from './optics';
import { Owner } from './owner';

export class Cable extends BaseNetworkEntity {

    aLocation?: string;
    bLocation?: string;
    geometry: LineString;
    isUnderground?: boolean;
    measuredLength?: number;
    calculatedLength?: number;
    noOfTubes?: number;
    corePerTube?: number;
    optics?: Optics = new Optics();
    installation?: Installation = new Installation();
    owner?: Owner = new Owner();

    constructor(id?:string, code?: string, isUnderground?: boolean, noOfTubes?: number, corePerTube?: number, optics?: Optics) {
        super(id, code);
        this.isUnderground = isUnderground;
        this.noOfTubes = noOfTubes;
        this.corePerTube = corePerTube;
        this.optics = optics==null? new Optics(): optics;
    }
}

