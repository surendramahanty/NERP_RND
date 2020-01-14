import { DbBaseEntity } from '../../common/models/dbBaseEntity';
import { Polygon } from '../../common/geo/geometry';
import { Homepass } from '../../homepasses/models/homepass';

export class Cluster extends DbBaseEntity{

    name: string;
    code: string;
    description?: string;
    geometry: Polygon;
    //radius?: number;
    homepasses?: string[];

    marker?: any;
    allHomepasses?: Homepass[];
}

//export class ClusterHomepass  {

//    id: string;
//    name: string;
//    code: string;
//}
