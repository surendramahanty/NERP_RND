import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";

import { ServiceResponse } from '../../common/models/serviceResponse';
import { Pole } from '../models/pole';
import { PaginationRequest, SortOrder } from '../../common/models/paginationRequest';

@Injectable()
export class PoleService {

    getPolesApi = 'Poles/GetPoles/';
    getPoleApi = 'Poles/GetPole/';
    savePoleApi = 'Poles/SavePole/';
    deletePoleApi = 'Poles/DeletePole/';

    constructor(private http: HttpClient) { }

    getPoles(paginationRequest?: PaginationRequest): Observable<ServiceResponse> {

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

        return this.http.post<ServiceResponse>(this.getPolesApi, paginationRequest);
    }

    getPole(poleId): Observable<ServiceResponse> {

        const params = new HttpParams()
            .set('poleId', poleId);

        return this.http.get<ServiceResponse>(this.getPoleApi, { params });
    }

    savePole(pole: Pole): Observable<ServiceResponse> {
        return this.http.post<ServiceResponse>(this.savePoleApi, pole);
    }

    deletePole(poleId: string): Observable<ServiceResponse> {

        const params = new HttpParams()
            .set('poleId', poleId);

        return this.http.delete<ServiceResponse>(this.deletePoleApi, { params });
    }

}
