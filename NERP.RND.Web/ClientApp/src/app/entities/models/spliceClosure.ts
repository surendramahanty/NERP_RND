import { BaseNetworkEntity } from './baseNetworkEntity';
import { Owner } from './owner';
import { Installation } from './installation';
import { Point } from '../../common/geo/geometry';

export class SpliceClosure extends BaseNetworkEntity {

    entityType: string = "SpliceClosure";
    noOfPorts?: number;
    geometry: Point;
    installation?: Installation = new Installation();
    owner?: Owner = new Owner();
}
