import { DbBaseEntity } from '../../common/models/dbBaseEntity';

export class Group extends DbBaseEntity {

    name: string;
    description: string;
    moduleFeatures: ModuleFeature[];
}

export class ModuleFeature {

    moduleId: string;
    moduleName: string;
    featureCodes: string[];
}
