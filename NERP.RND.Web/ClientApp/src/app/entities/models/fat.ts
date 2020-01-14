import { BaseNetworkEntity } from './baseNetworkEntity';
import { Owner } from './owner';
import { Installation } from './installation';
import { Optics } from './optics';
import { Point } from '../../common/geo/geometry';

export class FAT extends BaseNetworkEntity {
   entityType: string = "FAT";
   templateCode: string;
   templateName: string;
   pigtailCount: number;
   splitterCount: number;
   connectionType: any;
   topology: any;
   geometry: Point;
   optics?: Optics = new Optics();
   installation?: Installation = new Installation();
   owner?: Owner = new Owner();
}
