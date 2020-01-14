import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";
import { PaginationRequest, SortOrder } from '../../common/models/paginationRequest';
import { PaginationResponse } from '../../common/models/paginationResponse';
import { ServiceResponse } from '../../common/models/serviceResponse';
import { Homepass } from '../models/homepass';

@Injectable()
export class HomepassService {

    getHomepassesApi = 'Homepasses/GetHomepasses/';
    getHomepassApi = 'Homepasses/GetHomepass/';
    getHomepassesInClusterApi = 'Homepasses/GetHomepassesInCluster/';
    getHomepassesInPolygonApi = 'Homepasses/GetHomepassesInPolygon/';
    getHomepassesWithinRadiusApi = 'Homepasses/GetHomepassesWithinRadius/';
    saveHomepassApi = 'Homepasses/SaveHomepass/';
    saveHomepassesApi = 'Homepasses/SaveHomepasses/';
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

    //getHomepassesInCluster(clusterId): Observable<ServiceResponse> {

    //    const params = new HttpParams()
    //        .set('clusterId', clusterId);

    //    return this.http.get<ServiceResponse>(this.getHomepassesInClusterApi, { params });
    //}

    //async getHomepassesInCluster(clusterId) {

    //    const params = new HttpParams()
    //        .set('clusterId', clusterId);

    //    return await this.http.get<ServiceResponse>(this.getHomepassesInClusterApi, { params }).toPromise();

    //}

    saveHomepass(homepass: Homepass): Observable<ServiceResponse> {

        return this.http.post<ServiceResponse>(this.saveHomepassApi, homepass);
    }

    saveHomepasses(homepasses: Homepass[]): Observable<ServiceResponse> {

        return this.http.post<ServiceResponse>(this.saveHomepassesApi, homepasses);
    }

    deleteHomepass(homepassId: string): Observable<ServiceResponse> {

        const params = new HttpParams()
            .set('homepassId', homepassId);

        return this.http.delete<ServiceResponse>(this.deleteHomepassApi, { params });
    }
}
