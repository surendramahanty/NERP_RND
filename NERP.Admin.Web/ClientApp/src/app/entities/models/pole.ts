import { Point } from '../../common/geo/geometry';
import { BaseNetworkEntity } from './baseNetworkEntity';
import { Installation } from './installation';
import { Owner } from './owner';

export class Pole extends BaseNetworkEntity {
    poleHeight?: number;
    geometry: Point;
    installation?: Installation = new Installation();
    owner?: Owner = new Owner();
}
