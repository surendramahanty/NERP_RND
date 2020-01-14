import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppConfig } from '../../app.config';
import { PaginationRequest, SortOrder } from '../../common/models/paginationRequest';
import { PaginationResponse } from '../../common/models/paginationResponse';
import { ServiceResponse } from '../../common/models/serviceResponse';
import { Design } from '../models/design';

@Injectable()
export class DesignService {

    constructor(
        private http: HttpClient,
        private appConfig: AppConfig) { }

    getDesigns(paginationRequest?: PaginationRequest): Observable<PaginationResponse> {

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

        return this.http.post<PaginationResponse>(this.appConfig.urls.Design.getDesignsApi, paginationRequest);
    }

    getDesign(designId): Observable<ServiceResponse> {

        const params = new HttpParams()
            .set('designId', designId);

        return this.http.get<ServiceResponse>(this.appConfig.urls.Design.getDesignApi, { params });
    }

    saveDesign(design: Design): Observable<ServiceResponse> {

        var formData = new FormData();

        design.documents.forEach(x => {
            if (x.file)
                formData.append("DocumentFiles", x.file, x.file.name);
        });

        formData.append("SerializedDesign", JSON.stringify(design));

        return this.http.post<ServiceResponse>(this.appConfig.urls.Design.saveDesignApi, formData);


        //return this.http.post<ServiceResponse>(this.appConfig.urls.Design.saveDesignApi, design);
    }

    deleteDesign(designId: string): Observable<ServiceResponse> {

        const params = new HttpParams()
            .set('designId', designId);

        return this.http.delete<ServiceResponse>(this.appConfig.urls.Design.deleteDesignApi, { params });
    }

    deleteDocument(designId: string, documentId: string): Observable<ServiceResponse> {
        const params = new HttpParams()
            .set('projectId', designId)
            .set('documentId', documentId);

        return this.http.get<ServiceResponse>(this.appConfig.urls.Design.deleteDocumentApi, { params });
   }

   exportDesign(designId): Observable<ServiceResponse> {

      const params = new HttpParams()
         .set('designId', designId);

      return this.http.get<ServiceResponse>(this.appConfig.urls.Design.exportDesignApi, { params });
   }
}
