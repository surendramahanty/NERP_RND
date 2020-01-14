import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginationRequest, SortOrder } from '../../common/models/paginationRequest';
import { PaginationResponse } from '../../common/models/paginationResponse';
import { ServiceResponse } from '../../common/models/serviceResponse';
import { FAT } from '../models/fat';

@Injectable()
export class FatService {

   getFatsApi = 'Fat/GetFatAll/';
   getFatApi = 'Fat/GetFat/'; 
   checkNameExistsApi = 'Fat/CheckNameExists/';
   saveFatApi = 'Fat/SaveFat/';
   deleteFatApi = 'Fat/DeleteFat/';

   constructor(private http: HttpClient) { }

   getFATs(paginationRequest: PaginationRequest): Observable<PaginationResponse> {

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

      return this.http.post<PaginationResponse>(this.getFatsApi, paginationRequest);
   }

   getFAT(fatId): Observable<ServiceResponse> {

      const params = new HttpParams()
         .set('fatId', fatId);

      return this.http.get<ServiceResponse>(this.getFatApi, { params });
   }

   async checkNameExists(name: string): Promise<ServiceResponse> {

      const params = new HttpParams()
         .set('name', name);

      return await this.http.get<ServiceResponse>(this.checkNameExistsApi, { params }).toPromise();
   }

   saveFAT(fat: FAT): Observable<ServiceResponse> {

      return this.http.post<ServiceResponse>(this.saveFatApi, fat);
   }

   deleteFAT(fatId: string): Observable<ServiceResponse> {

      const params = new HttpParams()
         .set('fdtId', fatId);

      return this.http.delete<ServiceResponse>(this.deleteFatApi, { params });
   }
}
