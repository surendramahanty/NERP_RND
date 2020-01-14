import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";

import { User } from '../models/user';
import { ServiceResponse } from '../../common/models/serviceResponse';
import { PaginationRequest, SortOrder } from '../../common/models/paginationRequest';
import { PaginationResponse } from '../../common/models/paginationResponse';


@Injectable()
export class UserService {

   getUsersApi = "Users/GetUsers/";
   getUserApi = 'Users/GetUser/';
   checkLoginIdExistsApi = 'Users/CheckLoginIdExists/';
   saveUserApi = 'Users/SaveUser/';
   deleteUserApi = 'Users/DeleteUser/';

   constructor(private http: HttpClient) { }

   authenticateUser(loginCredentials: any): Observable<ServiceResponse> {

      return this.http.post<ServiceResponse>('/Users/Authenticate', loginCredentials);
   }

   getUserProfile(): Observable<ServiceResponse> {
      return this.http.get<ServiceResponse>('/Users/GetUserProfile');
   }

   getUser(userId: string): Observable<ServiceResponse> {

      const params = new HttpParams()
         .set('userId', userId);

      return this.http.get<ServiceResponse>(this.getUserApi, { params });
   }

   getUsers(paginationRequest?: PaginationRequest): Observable<PaginationResponse> {

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

      return this.http.post<PaginationResponse>(this.getUsersApi, paginationRequest);
   }

   async checkLoginIdExists(loginId: string): Promise<ServiceResponse> {

      const params = new HttpParams()
         .set('loginId', loginId);

      return await this.http.get<ServiceResponse>(this.checkLoginIdExistsApi, { params }).toPromise();
   }

   saveUser(user: User): Observable<ServiceResponse> {

      return this.http.post<ServiceResponse>(this.saveUserApi, user);
   }

   deleteUser(userId: string): Observable<ServiceResponse> {
      const params = new HttpParams()
         .set('userId', userId);

      return this.http.delete<ServiceResponse>(this.deleteUserApi, { params });
   }
}
