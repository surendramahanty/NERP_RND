import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";

import { Group } from '../models/group';
import { PaginationRequest, SortOrder } from '../../common/models/paginationRequest';
import { PaginationResponse } from '../../common/models/paginationResponse';
import { ServiceResponse } from '../../common/models/serviceResponse';

@Injectable()
export class GroupService {

   getGroupsApi = 'Groups/GetGroups/';
   getGroupApi = 'Groups/GetGroup/';
   checkNameExistsApi = 'Groups/CheckNameExists/';
   saveGroupApi = 'Groups/SaveGroup/';
   deleteGroupApi = 'Groups/DeleteGroup/';

   constructor(private http: HttpClient) { }

   getGroups(paginationRequest: PaginationRequest): Observable<PaginationResponse> {

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

      return this.http.post<PaginationResponse>(this.getGroupsApi, paginationRequest);
   }

   getGroup(groupId): Observable<ServiceResponse> {

      const params = new HttpParams()
         .set('groupId', groupId);

      return this.http.get<ServiceResponse>(this.getGroupApi, { params });
   }

   async checkNameExists(name: string): Promise<ServiceResponse> {

      const params = new HttpParams()
         .set('name', name);

      return await this.http.get<ServiceResponse>(this.checkNameExistsApi, { params }).toPromise();
   }

   saveGroup(group: Group): Observable<ServiceResponse> {

      return this.http.post<ServiceResponse>(this.saveGroupApi, group);
   }

   deleteGroup(groupId: string): Observable<ServiceResponse> {

      const params = new HttpParams()
         .set('groupId', groupId);

      return this.http.delete<ServiceResponse>(this.deleteGroupApi, { params });
   }
}
