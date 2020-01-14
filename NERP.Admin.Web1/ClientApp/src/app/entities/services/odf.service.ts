import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginationRequest, SortOrder } from '../../common/models/paginationRequest';
import { ServiceResponse } from '../../common/models/serviceResponse';
import { ODF } from '../models/odf';


@Injectable()
export class ODFService {

    getODFsApi = 'ODFs/GetODFs/';
    getODFApi = 'ODFs/GetODF/';
    checkNameExistsApi = 'ODFs/CheckNameExists/';
    saveODFApi = 'ODFs/SaveODF/';
    deleteODFApi = 'ODFs/DeleteODF/';

    constructor(private http: HttpClient) { }

    getODFs(paginationRequest: PaginationRequest): Observable<ServiceResponse> {

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

        return this.http.post<ServiceResponse>(this.getODFsApi, paginationRequest);
    }

    getODF(odfId): Observable<ServiceResponse> {

        const params = new HttpParams()
            .set('odfId', odfId);

        return this.http.get<ServiceResponse>(this.getODFApi, { params });
    }

    async checkNameExists(name: string): Promise<ServiceResponse> {

        const params = new HttpParams()
            .set('name', name);

        return await this.http.get<ServiceResponse>(this.checkNameExistsApi, { params }).toPromise();
    }

    saveODF(odf: ODF): Observable<ServiceResponse> {
        return this.http.post<ServiceResponse>(this.saveODFApi, odf);
    }

    deleteODF(odfId: string): Observable<ServiceResponse> {

        const params = new HttpParams()
            .set('odfId', odfId);

        return this.http.delete<ServiceResponse>(this.deleteODFApi, { params });
    }

}
