import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginationRequest, SortOrder } from '../../common/models/paginationRequest';
import { PaginationResponse } from '../../common/models/paginationResponse';
import { ServiceResponse } from '../../common/models/serviceResponse';
import { Homepass } from '../models/homepass';

@Injectable()
export class HomepassService {

    getHomepassesApi = 'Homepasses/GetHomepasses/';
    getHomepassApi = 'Homepasses/GetHomepass/';
    checkNameExistsApi = 'Homepasses/CheckNameExists/';
    saveHomepassApi = 'Homepasses/SaveHomepass/';
    deleteHomepassApi = 'Homepasses/DeleteHomepass/';

    constructor(private http: HttpClient) { }

    getHomepasses(paginationRequest: PaginationRequest): Observable<PaginationResponse> {

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

        return this.http.post<PaginationResponse>(this.getHomepassesApi, paginationRequest);
    }

    getHomepass(homepassId): Observable<ServiceResponse> {

        const params = new HttpParams()
            .set('homepassId', homepassId);

        return this.http.get<ServiceResponse>(this.getHomepassApi, { params });
    }

   async checkNameExists(name: string): Promise<ServiceResponse> {

        const params = new HttpParams()
            .set('name', name);

       return await this.http.get<ServiceResponse>(this.checkNameExistsApi, { params }).toPromise();
    }
  
    saveHomepass(homepass: Homepass): Observable<ServiceResponse> {

        return this.http.post<ServiceResponse>(this.saveHomepassApi, homepass);
    }

    deleteHomepass(homepassId: string): Observable<ServiceResponse> {

        const params = new HttpParams()
            .set('homepassId', homepassId);

        return this.http.delete<ServiceResponse>(this.deleteHomepassApi, { params });
    }
}
