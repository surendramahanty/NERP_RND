import { Owner } from './owner';
import { Installation } from './installation';
import { BaseNetworkEntity } from './baseNetworkEntity';
import { LineString } from '../../common/geo/geometry';

export class MicroDuct extends BaseNetworkEntity {

   entityType: string = "Duct";
   height?: number;
   width?: number;
   innerDiameter?: number;
   outerDiameter?: number;
   parentType?: string;
   geometry: LineString;
   measuredLength?: number;
   calculatedLength?: number;
   xPosition?: string;
   yPosition?: string;
   installation?: Installation = new Installation();
   owner?: Owner = new Owner();
}

