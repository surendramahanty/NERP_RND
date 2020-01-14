import { CustomField } from '../../common/models/customField';
import { DbBaseEntity } from '../../common/models/dbBaseEntity';
import { FileAttachment } from '../../common/models/FileAttachment';
import { Supplier } from '../../common/models/supplier';
import { temaplateinfo } from '../../common/models/templateinfo';

export class BaseNetworkEntity extends DbBaseEntity {

    name?: string;
    icon?: string;
    type?: string;
    brand?: string;
    model?: string;
    zoomLevel?: number;

    code?: string;
    regionId?: string;
    parentId?: string;
    parentEntityType?: string;
    constructionStage?: string;
    activationStage?: string;
    accessibility?: string;
    hierarchyType?: string;
    customFields?: CustomField[] = new Array<CustomField>();
    photos?: FileAttachment[] = new Array<FileAttachment>();
    attachments?: FileAttachment[] = new Array<FileAttachment>();
   suppliers?: Supplier[] = new Array<Supplier>();
   template?: temaplateinfo[] = new Array<temaplateinfo>();
   
    constructor(id?: string, code?: string) {
        super();
        this.id = id;
        this.code = code;
    }
}
