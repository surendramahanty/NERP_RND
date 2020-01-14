import { Point } from '../../common/geo/geometry';
import { CustomField } from '../../common/models/customField';
import { DbBaseEntity } from '../../common/models/dbBaseEntity';
import { FileAttachment } from '../../common/models/FileAttachment';

export class Homepass extends DbBaseEntity {
    name: string;
    icon?: string;
    zoomLevel?: number;

    code: string;
    description?: string;
    type?: string;
    geometry: Point;

    customFields?: CustomField[] = new Array<CustomField>();
    photos?: FileAttachment[] = new Array<FileAttachment>();
    attachments?: FileAttachment[] = new Array<FileAttachment>();

}
