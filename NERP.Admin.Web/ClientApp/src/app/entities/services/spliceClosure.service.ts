import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginationRequest, SortOrder } from '../../common/models/paginationRequest';
import { ServiceResponse } from '../../common/models/serviceResponse';
import { SpliceClosure } from '../models/spliceClosure';


@Injectable()
export class SpliceClosureService {

    getSpliceClosuresApi = 'SpliceClosures/GetSpliceClosures/';
    getSpliceClosureApi = 'SpliceClosures/GetSpliceClosure/';
    checkNameExistsApi = 'SpliceClosures/CheckNameExists/';
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

    async checkNameExists(name: string): Promise<ServiceResponse> {

        const params = new HttpParams()
            .set('name', name);

        return await this.http.get<ServiceResponse>(this.checkNameExistsApi, { params }).toPromise();
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
