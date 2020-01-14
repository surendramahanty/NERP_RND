import { DbBaseEntity } from '../../common/models/dbBaseEntity';

export class Layer extends DbBaseEntity {
    name: string;
    description: string;
    modulePermissions: ModulePermission[];
}

export class ModulePermission {
    moduleId: string;
    permissionCodes: string[];
}
