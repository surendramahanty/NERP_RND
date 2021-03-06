import { BaseNetworkEntity } from './baseNetworkEntity';
import { Owner } from './owner';
import { Installation } from './installation';
import { Point } from '../../common/geo/geometry';

export class Pole extends BaseNetworkEntity {

   entityType: string = "Pole";
   loopLength: string = "";
   height?: number;
   geometry: Point;
   installation?: Installation = new Installation();
   owner?: Owner = new Owner();
}
