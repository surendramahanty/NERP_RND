import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginationRequest, SortOrder } from '../../common/models/paginationRequest';
import { PaginationResponse } from '../../common/models/paginationResponse';
import { ServiceResponse } from '../../common/models/serviceResponse';
import { FDT } from '../models/fdt';

@Injectable()
export class FdtService {

   getFdtsApi = 'Fdt/GetFdtAll/';
   getFdtApi = 'Fdt/GetFdt/';
   checkNameExistsApi = 'Fdt/CheckNameExists/';
   saveFdtApi = 'Fdt/SaveFdt/';
   deleteFdtApi = 'Fdt/DeleteFdt/';

   constructor(private http: HttpClient) { }

   getFDTs(paginationRequest: PaginationRequest): Observable<PaginationResponse> {

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

      return this.http.post<PaginationResponse>(this.getFdtsApi, paginationRequest);
   }

   getFDT(fdtId): Observable<ServiceResponse> {

      const params = new HttpParams()
         .set('fdtId', fdtId);

      return this.http.get<ServiceResponse>(this.getFdtApi, { params });
   }

   async checkNameExists(name: string): Promise<ServiceResponse> {

      const params = new HttpParams()
         .set('name', name);

      return await this.http.get<ServiceResponse>(this.checkNameExistsApi, { params }).toPromise();
   }

   saveFDT(fdt: FDT): Observable<ServiceResponse> {

      return this.http.post<ServiceResponse>(this.saveFdtApi, fdt);
   }

   deleteFDT(fatId: string): Observable<ServiceResponse> {

      const params = new HttpParams()
         .set('fdtId', fatId);

      return this.http.delete<ServiceResponse>(this.deleteFdtApi, { params });
   }
}
