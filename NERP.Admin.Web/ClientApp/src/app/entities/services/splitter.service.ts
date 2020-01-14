import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginationRequest, SortOrder } from '../../common/models/paginationRequest';
import { ServiceResponse } from '../../common/models/serviceResponse';
import { Splitter } from '../models/splitter';


@Injectable()
export class SplitterService {

    getSplittersApi = 'Splitters/GetSplitters/';
    getSplitterApi = 'Splitters/GetSplitter/';
    checkNameExistsApi = 'Splitters/CheckNameExists/';
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

    async checkNameExists(name: string): Promise<ServiceResponse> {

        const params = new HttpParams()
            .set('name', name);

        return await this.http.get<ServiceResponse>(this.checkNameExistsApi, { params }).toPromise();
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
