import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";

import { ServiceResponse } from '../../common/models/serviceResponse';
import { PaginationRequest, SortOrder } from '../../common/models/paginationRequest';
import { Duct } from '../models/duct';

@Injectable()
export class DuctService {

    getDuctsApi = 'Ducts/GetDucts/';
    getDuctApi = 'Ducts/GetDuct/';
    saveDuctApi = 'Ducts/SaveDuct/';
    deleteDuctApi = 'Ducts/DeleteDuct/';

    constructor(private http: HttpClient) { }

    getDucts(paginationRequest?: PaginationRequest): Observable<ServiceResponse> {

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

        return this.http.post<ServiceResponse>(this.getDuctsApi, paginationRequest);
    }

    getDuct(ductId): Observable<ServiceResponse> {

        const params = new HttpParams()
            .set('ductId', ductId);

        return this.http.get<ServiceResponse>(this.getDuctApi, { params });
    }

    saveDuct(duct: Duct): Observable<ServiceResponse> {
        return this.http.post<ServiceResponse>(this.saveDuctApi, duct);
    }

    deleteDuct(ductId: string): Observable<ServiceResponse> {

        const params = new HttpParams()
            .set('ductId', ductId);

        return this.http.delete<ServiceResponse>(this.deleteDuctApi, { params });
    }
}
