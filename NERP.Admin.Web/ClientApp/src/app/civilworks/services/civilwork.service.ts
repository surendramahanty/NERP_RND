import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";

import { Civilwork } from '../models/civilwork';
import { PaginationRequest, SortOrder } from '../../common/models/paginationRequest';
import { PaginationResponse } from '../../common/models/paginationResponse';
import { ServiceResponse } from '../../common/models/serviceResponse';

@Injectable()
export class CivilworkService {

    getCivilworksApi = 'Civilworks/GetCivilworks/';
    getCivilworkApi = 'Civilworks/GetCivilwork/';
    checkNameExistsApi = 'Civilworks/CheckNameExists/';
    saveCivilworkApi = 'Civilworks/SaveCivilwork/';
    deleteCivilworkApi = 'Civilworks/DeleteCivilwork/';

    constructor(private http: HttpClient) { }

    getCivilworks(paginationRequest?: PaginationRequest): Observable<PaginationResponse> {

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

        return this.http.post<PaginationResponse>(this.getCivilworksApi, paginationRequest);
    }

    getCivilwork(civilworkId): Observable<ServiceResponse> {

        const params = new HttpParams()
            .set('civilworkId', civilworkId);

        return this.http.get<ServiceResponse>(this.getCivilworkApi, { params });
    }

    async checkNameExists(name: string): Promise<ServiceResponse> {

        const params = new HttpParams()
            .set('name', name);

        return await this.http.get<ServiceResponse>(this.checkNameExistsApi, { params }).toPromise();
    }

    saveCivilwork(civilwork: Civilwork): Observable<ServiceResponse> {

        return this.http.post<ServiceResponse>(this.saveCivilworkApi, civilwork);
    }

    deleteCivilwork(civilworkId: string): Observable<ServiceResponse> {

        const params = new HttpParams()
            .set('civilworkId', civilworkId);

        return this.http.delete<ServiceResponse>(this.deleteCivilworkApi, { params });
    }
}
