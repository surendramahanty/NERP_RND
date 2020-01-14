import { DbBaseEntity } from '../../common/models/dbBaseEntity';
import { Point, Polygon } from '../../common/geo/geometry';
import { CustomField } from '../../common/models/customField';
import { FileAttachment } from '../../common/models/FileAttachment';

export class Homepass extends DbBaseEntity {
    name: string;
    code: string;
    description?: string;
    type?: string;
    geometry: Point = new Point();
    area?: Polygon = new Polygon();
    connections: number;

    customFields?: CustomField[] = new Array<CustomField>();
    photos?: FileAttachment[] = new Array<FileAttachment>();
    attachments?: FileAttachment[] = new Array<FileAttachment>();

    marker?: any;
}
