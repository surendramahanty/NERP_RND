import { Point } from '../../common/geo/geometry';
import { BaseNetworkEntity } from './baseNetworkEntity';
import { Installation } from './installation';
import { Optics } from './optics';
import { Owner } from './owner';

export class Splitter extends BaseNetworkEntity {
    splitterRatio?: string;
    lossValue?: number;
    optics?: Optics = new Optics();

    geometry: Point;
    installation?: Installation = new Installation();
    owner?: Owner = new Owner();
}
