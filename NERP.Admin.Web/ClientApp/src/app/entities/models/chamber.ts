import { Point } from '../../common/geo/geometry';
import { BaseNetworkEntity } from './baseNetworkEntity';
import { Installation } from './installation';
import { Owner } from './owner';

export class Chamber extends BaseNetworkEntity {

   chamberCategory?: string;
   chamberClosureType?: string;
    spliceTrayCount?: number;
    isBuried?: boolean;

    geometry: Point;
    installation?: Installation = new Installation();
    owner?: Owner = new Owner();
}

