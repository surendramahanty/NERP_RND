import { DbBaseEntity } from '../../common/models/dbBaseEntity';
import { CustomField } from '../../common/models/customField';
import { FileAttachment } from '../../common/models/FileAttachment';
import { Supplier } from '../../common/models/supplier';

export class Accessory extends DbBaseEntity {
    name: string;
    code?: string;
    icon?: string;
    parentId?: string;
    parentEntityType?: string;
    type?: string;
    brand?: string;
    model?: string;
    zoomLevel: number;
    customFields?: CustomField[] = new Array<CustomField>();
    photos?: FileAttachment;
    attachments?: FileAttachment;
    suppliers?: Supplier[] = new Array<Supplier>();
}
