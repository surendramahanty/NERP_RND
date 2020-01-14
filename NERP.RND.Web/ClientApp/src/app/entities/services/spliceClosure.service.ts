import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";

import { ServiceResponse } from '../../common/models/serviceResponse';
import { SpliceClosure } from '../models/spliceClosure';
import { PaginationRequest, SortOrder } from '../../common/models/paginationRequest';

@Injectable()
export class SpliceClosureService {

    getSpliceClosuresApi = 'SpliceClosures/GetSpliceClosures/';
    getSpliceClosureApi = 'SpliceClosures/GetSpliceClosure/';
    saveSpliceClosureApi = 'SpliceClosures/SaveSpliceClosure/';
    deleteSpliceClosureApi = 'SpliceClosures/DeleteSpliceClosure/';

    constructor(private http: HttpClient) { }

    getSpliceClosures(paginationRequest?: PaginationRequest): Observable<ServiceResponse> {

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

        return this.http.post<ServiceResponse>(this.getSpliceClosuresApi, paginationRequest);
    }

    getSpliceClosure(spliceClosureId): Observable<ServiceResponse> {

        const params = new HttpParams()
            .set('spliceClosureId', spliceClosureId);

        return this.http.get<ServiceResponse>(this.getSpliceClosureApi, { params });
    }

    saveSpliceClosure(spliceClosure: SpliceClosure): Observable<ServiceResponse> {
        return this.http.post<ServiceResponse>(this.saveSpliceClosureApi, spliceClosure);
    }

    deleteSpliceClosure(spliceClosureId: string): Observable<ServiceResponse> {

        const params = new HttpParams()
            .set('spliceClosureId', spliceClosureId);

        return this.http.delete<ServiceResponse>(this.deleteSpliceClosureApi, { params });
    }
}
