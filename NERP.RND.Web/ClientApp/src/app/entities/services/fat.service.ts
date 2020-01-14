import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";

import { ServiceResponse } from '../../common/models/serviceResponse';
import { PaginationRequest, SortOrder } from '../../common/models/paginationRequest';
import { FAT } from '../models/fat';

@Injectable()
export class fatService {

    getfatsApi = 'fat/Getfats/';
    getfatApi = 'fat/Getfat/';
    savefatApi = 'fat/Savefat/';
    deletefatApi = 'fat/Deletefat/';

    constructor(private http: HttpClient) { }

    getfats(paginationRequest?: PaginationRequest): Observable<ServiceResponse> {

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

        return this.http.post<ServiceResponse>(this.getfatsApi, paginationRequest);
    }

    getfat(fatId): Observable<ServiceResponse> {

        const params = new HttpParams()
            .set('fatId', fatId);

        return this.http.get<ServiceResponse>(this.getfatApi, { params });
    }

    savefat(fat: FAT): Observable<ServiceResponse> {
        return this.http.post<ServiceResponse>(this.savefatApi, fat);
    }

    deletefat(fatId: string): Observable<ServiceResponse> {

        const params = new HttpParams()
            .set('fatId', fatId);

        return this.http.delete<ServiceResponse>(this.deletefatApi, { params });
    }

}
