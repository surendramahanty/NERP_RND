import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginationRequest, SortOrder } from '../../common/models/paginationRequest';
import { ServiceResponse } from '../../common/models/serviceResponse';
import { Cable } from '../models/cable';

@Injectable()
export class CableService {

    getCablesApi = 'Cables/GetCables/';
    getCableApi = 'Cables/GetCable/';
    checkNameExistsApi = 'Cables/CheckNameExists/';
    saveCableApi = 'Cables/SaveCable/';
    deleteCableApi = 'Cables/DeleteCable/';

    constructor(private http: HttpClient) { }

    getCables(paginationRequest?: PaginationRequest): Observable<ServiceResponse> {

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

        return this.http.post<ServiceResponse>(this.getCablesApi, paginationRequest);
    }

    getCable(cableId): Observable<ServiceResponse> {

        const params = new HttpParams()
            .set('cableId', cableId);

        return this.http.get<ServiceResponse>(this.getCableApi, { params });
    }

    async checkNameExists(name: string): Promise<ServiceResponse> {

        const params = new HttpParams()
            .set('name', name);

        return await this.http.get<ServiceResponse>(this.checkNameExistsApi, { params }).toPromise();
    }

    saveCable(cable: Cable): Observable<ServiceResponse> {
        return this.http.post<ServiceResponse>(this.saveCableApi, cable);
    }

    deleteCable(cableId: string): Observable<ServiceResponse> {

        const params = new HttpParams()
            .set('cableId', cableId);

        return this.http.delete<ServiceResponse>(this.deleteCableApi, { params });
    }

}
