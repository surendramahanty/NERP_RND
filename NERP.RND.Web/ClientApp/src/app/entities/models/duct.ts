import { Owner } from './owner';
import { Installation } from './installation';
import { BaseNetworkEntity } from './baseNetworkEntity';
import { LineString } from '../../common/geo/geometry';

export class Duct extends BaseNetworkEntity {

    entityType: string = "Duct";
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

