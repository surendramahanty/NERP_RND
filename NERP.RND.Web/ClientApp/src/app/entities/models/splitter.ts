import { BaseNetworkEntity } from './baseNetworkEntity';
import { Owner } from './owner';
import { Installation } from './installation';
import { Optics } from './optics';
import { Point } from '../../common/geo/geometry';

export class Splitter extends BaseNetworkEntity {
    entityType: string = "Splitter";

    splitterRatio?: string;
    lossValue?: number;
    optics?: Optics = new Optics();

    geometry: Point;
    installation?: Installation = new Installation();
    owner?: Owner = new Owner();
}
