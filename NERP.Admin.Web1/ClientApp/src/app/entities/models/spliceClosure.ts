import { Point } from '../../common/geo/geometry';
import { BaseNetworkEntity } from './baseNetworkEntity';
import { Installation } from './installation';
import { Owner } from './owner';

export class SpliceClosure extends BaseNetworkEntity {
    noOfPorts?: number;
    geometry: Point;
    installation?: Installation = new Installation();
    owner?: Owner = new Owner();
}
