import { DbBaseEntity } from '../../common/models/dbBaseEntity';

export class ActivityLog extends DbBaseEntity {
    loginId: string;
    sourceIP: string;
    application: string;
    module: string;
    action: string;
    activityOn: string;
    otherInfo: string;
    webServer: string;
    browser: string;
}
