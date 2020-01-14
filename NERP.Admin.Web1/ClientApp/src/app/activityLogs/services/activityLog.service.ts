import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";

import { ServiceResponse } from '../../common/models/serviceResponse';
import { PaginationRequest, SortOrder } from '../../common/models/paginationRequest';
import { PaginationResponse } from '../../common/models/paginationResponse';

@Injectable()
export class ActivityLogService {

   getActivityLogsApi = 'ActivityLogs/GetActivityLogs/';
   getActivityLogApi = 'ActivityLogs/GetActivityLog/';

   constructor(private http: HttpClient) { }

   getActivityLogs(paginationRequest?: PaginationRequest): Observable<PaginationResponse> {

      if (paginationRequest == null)
         paginationRequest = {
            page: null,
            pageSize: null,
            filter: null,
            order: {
               orderByProperty: "ActivityOn",
               sortOrder: SortOrder.descending
            }
         };

      return this.http.post<PaginationResponse>(this.getActivityLogsApi, paginationRequest);
   }

   getActivityLog(activityLogId): Observable<ServiceResponse> {

      const params = new HttpParams()
         .set('activityLogId', activityLogId);

      return this.http.get<ServiceResponse>(this.getActivityLogApi, { params });
   }

   //LogActivity(activityLog: ActivityLog): Observable<ServiceResponse> {
   //   return this.http.post<ServiceResponse>(this.LogActivityApi, activityLog);
   //}
}
