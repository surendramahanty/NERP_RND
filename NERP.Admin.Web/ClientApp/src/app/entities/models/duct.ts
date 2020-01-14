import { LineString } from '../../common/geo/geometry';
import { BaseNetworkEntity } from './baseNetworkEntity';
import { Installation } from './installation';
import { Owner } from './owner';

export class Duct extends BaseNetworkEntity {

    height?: number;
    width?: number;
    innerDiameter?: number;
    outerDiameter?: number;

    geometry: LineString;
    measuredLength?: number;
    calculatedLength?: number;

    installation?: Installation = new Installation();
    owner?: Owner = new Owner();
}

