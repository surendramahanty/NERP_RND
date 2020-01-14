import { LineString } from '../../common/geo/geometry';
import { BaseNetworkEntity } from './baseNetworkEntity';
import { Installation } from './installation';
import { Optics } from './optics';
import { Owner } from './owner';

export class FDT extends BaseNetworkEntity {
   templateCode: string;
   templateName: string;
   odfCount: number;
   splitterCount: number;
   connectionType: any;
   topology: any;

    optics?: Optics = new Optics();
    installation?: Installation = new Installation();
    owner?: Owner = new Owner();

    constructor(id?:string, code?: string, optics?: Optics) {
        super(id, code);
        this.optics = optics==null? new Optics(): optics;
    }
}

