import { Injectable } from '@angular/core';
import { Observable, of, forkJoin } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";
import { ServiceResponse } from '../models/serviceResponse';
import { LoginUser } from '../models/loginUser';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) { }
    loginUser: LoginUser;

    authenticateUser(loginCredentials: any): Observable<ServiceResponse> {

        return this.http.post<ServiceResponse>('/Auth/Authenticate', loginCredentials);
    }

    getLoginUserProfile(): Observable<ServiceResponse> {

        return this.http.get<ServiceResponse>('/Auth/GetLoginUserProfile');
    }

    getFeatureAccess(featureCode: string) {
        if (this.loginUser)
            return this.loginUser.features.includes(featureCode);
        else
            return false;
    }

    getFunctionalityAccess(permissionCode: string) {

        if (this.loginUser)
            return this.loginUser.permissions.includes(permissionCode);
        else
            return false;
    }

    //getLoginUser(force: boolean = false): any {

    //    if (force !== true && this.loginUser)
    //        return of(this.loginUser) as Observable<LoginUser>;

    //    let usersSvc = this.http.get<ServiceResponse>("/Auth/GetLoginUserProfile");
    //    let rolesSvc = this.http.get<ServiceResponse>("Roles/GetRoles");

    //    return forkJoin(
    //        usersSvc.pipe(map(resp => { this.loginUser = resp.data; return this.loginUser; })),
    //        rolesSvc.pipe(map(resp => { this.roles = resp.data; })),
    //    );
    //}
}
