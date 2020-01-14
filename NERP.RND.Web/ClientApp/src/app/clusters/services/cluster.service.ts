import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";

import { PaginationRequest, SortOrder } from '../../common/models/paginationRequest';
import { PaginationResponse } from '../../common/models/paginationResponse';
import { ServiceResponse } from '../../common/models/serviceResponse';
import { Cluster } from '../models/cluster';

@Injectable()
export class ClusterService {

    getClustersApi = 'Clusters/GetClusters/';
    getClusterApi = 'Clusters/GetCluster/';
    saveClusterApi = 'Clusters/SaveCluster/';
    saveClustersApi = 'Clusters/SaveClusters/';
    deleteClusterApi = 'Clusters/DeleteCluster/';

    constructor(private http: HttpClient) { }

    getClusters(paginationRequest?: PaginationRequest): Observable<PaginationResponse> {

        if (paginationRequest == null)
            paginationRequest = {
                page: null,
                pageSize: null,
                filter: null,
                order: {
                    orderByProperty: "UpdatedDate",
                    sortOrder: SortOrder.descending
                }
            };

        return this.http.post<PaginationResponse>(this.getClustersApi, paginationRequest);
    }

    getCluster(clusterId): Observable<ServiceResponse> {

        const params = new HttpParams()
            .set('clusterId', clusterId);

        return this.http.get<ServiceResponse>(this.getClusterApi, { params });
    }

    saveCluster(cluster: Cluster): Observable<ServiceResponse> {

        return this.http.post<ServiceResponse>(this.saveClusterApi, cluster);
    }

    saveClusters(clusters: Cluster[]): Observable<ServiceResponse> {

        return this.http.post<ServiceResponse>(this.saveClustersApi, clusters);
    }

    deleteCluster(clusterId: string): Observable<ServiceResponse> {

        const params = new HttpParams()
            .set('clusterId', clusterId);

        return this.http.delete<ServiceResponse>(this.deleteClusterApi, { params });
    }
}
