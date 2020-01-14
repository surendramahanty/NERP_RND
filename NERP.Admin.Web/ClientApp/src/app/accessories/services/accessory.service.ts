import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";

import { Accessory } from '../models/accessory';
import { PaginationRequest, SortOrder } from '../../common/models/paginationRequest';
import { PaginationResponse } from '../../common/models/paginationResponse';
import { ServiceResponse } from '../../common/models/serviceResponse';

@Injectable()
export class AccessoryService {

    getAccessoriesApi = 'Accessories/GetAccessories/';
    getAccessoryApi = 'Accessories/GetAccessory/';
    checkNameExistsApi = 'Accessories/CheckNameExists/';
    saveAccessoryApi = 'Accessories/SaveAccessory/';
    deleteAccessoryApi = 'Accessories/DeleteAccessory/';

    constructor(private http: HttpClient) { }

    getAccessories(paginationRequest?: PaginationRequest): Observable<PaginationResponse> {

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

        return this.http.post<PaginationResponse>(this.getAccessoriesApi, paginationRequest);
    }

    getAccessory(accessoryId): Observable<ServiceResponse> {

        const params = new HttpParams()
            .set('accessoryId', accessoryId);

        return this.http.get<ServiceResponse>(this.getAccessoryApi, { params });
    }

    async checkNameExists(name: string): Promise<ServiceResponse> {

        const params = new HttpParams()
            .set('name', name);

        return await this.http.get<ServiceResponse>(this.checkNameExistsApi, { params }).toPromise();
    }

    saveAccessory(accessory: Accessory): Observable<ServiceResponse> {

        return this.http.post<ServiceResponse>(this.saveAccessoryApi, accessory);
    }

    deleteAccessory(accessoryId: string): Observable<ServiceResponse> {

        const params = new HttpParams()
            .set('accessoryId', accessoryId);

        return this.http.delete<ServiceResponse>(this.deleteAccessoryApi, { params });
    }
}
