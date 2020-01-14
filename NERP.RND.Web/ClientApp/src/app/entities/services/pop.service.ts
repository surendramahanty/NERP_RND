import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";

import { ServiceResponse } from '../../common/models/serviceResponse';
import { Chamber } from '../models/chamber';
import { PaginationRequest, SortOrder } from '../../common/models/paginationRequest';
import { PoP } from '../models/pop';

@Injectable()
export class PopService {

   getPopsApi = 'Pop/GetPops/';
   getPopApi = 'Pop/GetPop/';
   savePopApi = 'Pop/SavePop/';
   deletePopApi = 'Pop/DeletePop/';

    constructor(private http: HttpClient) { }

    getChambers(paginationRequest?: PaginationRequest): Observable<ServiceResponse> {

        if (paginationRequest == null)
            paginationRequest = {
                page: null,
                pageSize: null,
                filter: null,
                order: {
                    orderByProperty: "updatedDate",
                    sortOrder: SortOrder.descending
                }
            };

       return this.http.post<ServiceResponse>(this.getPopsApi, paginationRequest);
    }

   getChamber(popId): Observable<ServiceResponse> {

        const params = new HttpParams()
           .set('popId', popId);

       return this.http.get<ServiceResponse>(this.getPopApi, { params });
    }

   saveChamber(pop: PoP): Observable<ServiceResponse> {
       return this.http.post<ServiceResponse>(this.savePopApi, pop);
    }

   deleteChamber(popId: string): Observable<ServiceResponse> {

        const params = new HttpParams()
           .set('popId', popId);

       return this.http.delete<ServiceResponse>(this.deletePopApi, { params });
    }
}
