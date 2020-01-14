import { BaseNetworkEntity } from './baseNetworkEntity';
import { Owner } from './owner';
import { Installation } from './installation';
import { Point } from '../../common/geo/geometry';

export class Chamber extends BaseNetworkEntity {

   entityType: string = "Chamber";
   loopLength: string = "";
   category?: string;
   closureType?: string;
   spliceTrayCount?: number;
   isBuried?: boolean;

   geometry: Point;
   installation?: Installation = new Installation();
   owner?: Owner = new Owner();
}

