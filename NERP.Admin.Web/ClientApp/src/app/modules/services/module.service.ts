import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";

import { Module } from '../models/module';
import { ServiceResponse } from '../../common/models/serviceResponse';
import { PaginationRequest, SortOrder } from '../../common/models/paginationRequest';
import { PaginationResponse } from '../../common/models/paginationResponse';


@Injectable()
export class ModuleService {

   getModulesApi = "Modules/GetModules/";
   getModuleApi = 'Modules/GetModule/';
   saveModuleApi = 'Modules/SaveModule/';
   deleteModuleApi = 'Modules/DeleteModule/';

   constructor(private http: HttpClient) { }

   getModules(paginationRequest: PaginationRequest): Observable<PaginationResponse> {

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

      return this.http.post<PaginationResponse>(this.getModulesApi, paginationRequest);
   }

   getModule(moduleId: string): Observable<ServiceResponse> {

      const params = new HttpParams()
         .set('moduleId', moduleId);

      return this.http.get<ServiceResponse>(this.getModuleApi, { params });
   }

   saveModule(module: Module): Observable<ServiceResponse> {

      return this.http.post<ServiceResponse>(this.saveModuleApi, module);
   }

   deleteModule(moduleId: string): Observable<ServiceResponse> {
      const params = new HttpParams()
         .set('moduleId', moduleId);

      return this.http.delete<ServiceResponse>(this.deleteModuleApi, { params });
   }
}
