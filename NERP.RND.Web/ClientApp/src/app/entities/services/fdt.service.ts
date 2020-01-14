import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";

import { ServiceResponse } from '../../common/models/serviceResponse';
import { PaginationRequest, SortOrder } from '../../common/models/paginationRequest';

import { FDT } from '../models/fdt';

@Injectable()
export class fdtService {

    getfdtsApi = 'Fdt/GetFdts/';
   getfdtApi = 'Fdt/Getfdt/';
    savefdtApi = 'fdt/Savefdt/';
    deletefdtApi = 'fdt/Deletefdt/';

    constructor(private http: HttpClient) { }

    getfdts(paginationRequest?: PaginationRequest): Observable<ServiceResponse> {

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

        return this.http.post<ServiceResponse>(this.getfdtsApi, paginationRequest);
    }

    getfdt(fdtId): Observable<ServiceResponse> {

        const params = new HttpParams()
            .set('fdtId', fdtId);

        return this.http.get<ServiceResponse>(this.getfdtApi, { params });
    }

   savefdt(fdt: FDT): Observable<ServiceResponse> {
        return this.http.post<ServiceResponse>(this.savefdtApi, fdt);
    }

    deletefdt(fdtId: string): Observable<ServiceResponse> {

        const params = new HttpParams()
            .set('fdtId', fdtId);

        return this.http.delete<ServiceResponse>(this.deletefdtApi, { params });
    }

}
