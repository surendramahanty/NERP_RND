import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";

import { Role } from '../models/role';
import { map } from 'rxjs/operators';
import { PaginationRequest, SortOrder } from '../../common/models/paginationRequest';
import { PaginationResponse } from '../../common/models/paginationResponse';
import { ServiceResponse } from '../../common/models/serviceResponse';

@Injectable()
export class RoleService {

   getRolesApi = 'Roles/GetRoles/';
   getRoleApi = 'Roles/GetRole/';
   checkNameExistsApi = 'Roles/CheckNameExists/';
   saveRoleApi = 'Roles/SaveRole/';
   deleteRoleApi = 'Roles/DeleteRole/';

   allRoles: Role[];

   constructor(private http: HttpClient) { }

   getRoles(paginationRequest: PaginationRequest): Observable<PaginationResponse> {

      if (paginationRequest == null)
         paginationRequest = {
            page: null,
            pageSize: null,
            filter: null,
            order: {
               orderByProperty: "name",
               sortOrder: SortOrder.descending
            }
         };

      return this.http.post<PaginationResponse>(this.getRolesApi, paginationRequest);
   }

   getRole(roleId): Observable<ServiceResponse> {

      const params = new HttpParams()
         .set('roleId', roleId);

      return this.http.get<ServiceResponse>(this.getRoleApi, { params });
   }

   async checkNameExists(name: string): Promise<ServiceResponse> {

      const params = new HttpParams()
         .set('name', name);

      return await this.http.get<ServiceResponse>(this.checkNameExistsApi, { params }).toPromise();
   }

   saveRole(role: Role): Observable<ServiceResponse> {

      return this.http.post<ServiceResponse>(this.saveRoleApi, role);
   }

   deleteRole(roleId: string): Observable<ServiceResponse> {

      const params = new HttpParams()
         .set('roleId', roleId);

      return this.http.delete<ServiceResponse>(this.deleteRoleApi, { params });
   }

   //getAllRoles(): Observable<Role[]> {

   //   if (this.allRoles)
   //      return of(this.allRoles) as Observable<Role[]>;

   //   return this.http.get<ServiceResponse>(this.getRolesApi)
   //      .pipe(
   //         map(svcResponse => {

   //            if (svcResponse.status.toLowerCase() == "ok") {

   //               this.allRoles = svcResponse.data;

   //               return this.allRoles;
   //            }
   //            else {
   //               throw Observable.throw(new Error(svcResponse.message));
   //            }

   //         }),
   //         //err => Observable.throw(err)
   //      );
   //}
}
