import { Point } from '../../common/geo/geometry';
import { BaseNetworkEntity } from './baseNetworkEntity';
import { Installation } from './installation';
import { Owner } from './owner';

export class ODF extends BaseNetworkEntity {
    noOfPorts?: number;
    mountingType?: string;
    height?: number;
    width?: number;
    length?: number;

    geometry: Point;
    installation?: Installation = new Installation();
    owner?: Owner = new Owner();
}
