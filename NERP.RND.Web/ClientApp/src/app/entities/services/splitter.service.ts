import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";

import { ServiceResponse } from '../../common/models/serviceResponse';
import { Splitter } from '../models/splitter';
import { PaginationRequest, SortOrder } from '../../common/models/paginationRequest';

@Injectable()
export class SplitterService {

    getSplittersApi = 'Splitters/GetSplitters/';
    getSplitterApi = 'Splitters/GetSplitter/';
    saveSplitterApi = 'Splitters/SaveSplitter/';
    deleteSplitterApi = 'Splitters/DeleteSplitter/';

    constructor(private http: HttpClient) { }

    getSplitters(paginationRequest?: PaginationRequest): Observable<ServiceResponse> {

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

        return this.http.post<ServiceResponse>(this.getSplittersApi, paginationRequest);
    }

    getSplitter(splitterId): Observable<ServiceResponse> {

        const params = new HttpParams()
            .set('splitterId', splitterId);

        return this.http.get<ServiceResponse>(this.getSplitterApi, { params });
    }

    saveSplitter(splitter: Splitter): Observable<ServiceResponse> {
        return this.http.post<ServiceResponse>(this.saveSplitterApi, splitter);
    }

    deleteSplitter(splitterId: string): Observable<ServiceResponse> {

        const params = new HttpParams()
            .set('splitterId', splitterId);

        return this.http.delete<ServiceResponse>(this.deleteSplitterApi, { params });
    }

}
