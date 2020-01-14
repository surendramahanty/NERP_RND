import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";

import { ServiceResponse } from '../../common/models/serviceResponse';
import { Chamber } from '../models/chamber';
import { PaginationRequest, SortOrder } from '../../common/models/paginationRequest';

@Injectable()
export class ChamberService {

    getChambersApi = 'Chambers/GetChambers/';
    getChamberApi = 'Chambers/GetChamber/';
    saveChamberApi = 'Chambers/SaveChamber/';
    deleteChamberApi = 'Chambers/DeleteChamber/';

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

        return this.http.post<ServiceResponse>(this.getChambersApi, paginationRequest);
    }

    getChamber(chamberId): Observable<ServiceResponse> {

        const params = new HttpParams()
            .set('chamberId', chamberId);

        return this.http.get<ServiceResponse>(this.getChamberApi, { params });
    }

    saveChamber(chamber: Chamber): Observable<ServiceResponse> {
        return this.http.post<ServiceResponse>(this.saveChamberApi, chamber);
    }

    deleteChamber(chamberId: string): Observable<ServiceResponse> {

        const params = new HttpParams()
            .set('chamberId', chamberId);

        return this.http.delete<ServiceResponse>(this.deleteChamberApi, { params });
    }
}
