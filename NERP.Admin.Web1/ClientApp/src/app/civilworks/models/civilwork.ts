import { DbBaseEntity } from '../../common/models/dbBaseEntity';
import { CustomField } from '../../common/models/customField';
import { FileAttachment } from '../../common/models/FileAttachment';
import { Supplier } from '../../common/models/supplier';

export class Civilwork extends DbBaseEntity {
    name: string;
    code?: string;
    parentId?: string;
    parentEntityType?: string;
    customFields?: CustomField[] = new Array<CustomField>();
    photos?: FileAttachment;
    attachments?: FileAttachment;
    suppliers?: Supplier[] = new Array<Supplier>();
}
