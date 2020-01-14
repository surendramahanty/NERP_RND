import { BaseNetworkEntity } from './baseNetworkEntity';
import { Owner } from './owner';
import { Installation } from './installation';
import { Point } from '../../common/geo/geometry';

export class ODF extends BaseNetworkEntity {

    entityType: string = "ODF";
    noOfPorts?: number;
    mountingType?: string;
    height?: number;
    width?: number;
    length?: number;

    geometry: Point;
    installation?: Installation = new Installation();
    owner?: Owner = new Owner();
}
