import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from 'rxjs/operators';

import { Layer } from '../models/layer';
import { PaginationRequest, SortOrder } from '../../common/models/paginationRequest';
import { PaginationResponse } from '../../common/models/paginationResponse';
import { ServiceResponse } from '../../common/models/serviceResponse';

@Injectable()
export class LayerService {

   getLayersApi = 'Layers/GetLayers/';
   getLayerApi = 'Layers/GetLayer/';
   saveLayerApi = 'Layers/SaveLayer/';
   deleteLayerApi = 'Layers/DeleteLayer/';

   allLayers: Layer[];

   constructor(private http: HttpClient) { }

   getLayers(paginationRequest: PaginationRequest): Observable<PaginationResponse> {

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

      return this.http.post<PaginationResponse>(this.getLayersApi, paginationRequest);
   }

   getLayer(layerId): Observable<ServiceResponse> {

      const params = new HttpParams()
         .set('layerId', layerId);

      return this.http.get<ServiceResponse>(this.getLayerApi, { params });
   }

   saveLayer(layer: Layer): Observable<ServiceResponse> {

      return this.http.post<ServiceResponse>(this.saveLayerApi, layer);
   }

   deleteLayer(layerId: string): Observable<ServiceResponse> {

      const params = new HttpParams()
         .set('layerId', layerId);

      return this.http.delete<ServiceResponse>(this.deleteLayerApi, { params });
   }

   //getAllLayers(): Observable<Layer[]> {

   //   if (this.allLayers)
   //      return of(this.allLayers) as Observable<Layer[]>;

   //   return this.http.get<ServiceResponse>(this.getLayersApi)
   //      .pipe(
   //         map(svcResponse => {

   //            if (svcResponse.status.toLowerCase() == "ok") {

   //               this.allLayers = svcResponse.data;

   //               return this.allLayers;
   //            }
   //            else {
   //               throw Observable.throw(new Error(svcResponse.message));
   //            }

   //         }),
   //         //err => Observable.throw(err)
   //      );
   //}
}
