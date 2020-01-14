import { BaseNetworkEntity } from './baseNetworkEntity';
import { Owner } from './owner';
import { Installation } from './installation';
import { Point } from '../../common/geo/geometry';

export class PoP extends BaseNetworkEntity {

   entityType: string = "PoP";
   
   geometry: Point;
   installation?: Installation = new Installation();
   owner?: Owner = new Owner();
}

