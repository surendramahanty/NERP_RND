import { DbBaseEntity } from '../../common/models/dbBaseEntity';

export class User extends DbBaseEntity {
    loginId: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    emailId: string;
    roleId: string;
    groups: string[];
    roleName: string;
    isActive: boolean;
    lastLogin: string;
}
