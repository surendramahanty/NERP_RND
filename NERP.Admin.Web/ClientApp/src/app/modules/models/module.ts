import { DbBaseEntity } from '../../common/models/dbBaseEntity';

export class Module extends DbBaseEntity {

    name: string;
    description: string;
    features: Feature[];
    permissions: Permission[];
    parentId: string;
}

export class Feature {
    code: string;
    name: string;
}

export class Permission {
    code: string;
    name: string;
}
