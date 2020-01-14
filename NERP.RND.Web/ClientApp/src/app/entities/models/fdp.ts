import { Point } from '../../common/geo/geometry';
import { DbBaseEntity } from '../../common/models/dbBaseEntity';

export class FDP extends DbBaseEntity {
    name: string;
    code: string;
    description?: string;
    geometry: Point = new Point();

    marker?: any;
}
