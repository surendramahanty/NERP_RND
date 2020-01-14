import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";

import { ServiceResponse } from '../../common/models/serviceResponse';
import { GeneralSettings } from '../model/generalSettings';


@Injectable()
export class GeneralSettingsService {

   getGeneralSettingsApi = 'GeneralSettings/GetGeneralSettings/';
   saveGeneralSettingApi = 'GeneralSettings/SaveGeneralSettings/';

   constructor(private http: HttpClient) { }

   getGeneralSettings(): Observable<ServiceResponse> {

      return this.http.get<ServiceResponse>(this.getGeneralSettingsApi);
   }

   saveGeneralSettings(generalSettings: GeneralSettings): Observable<ServiceResponse> {

      return this.http.post<ServiceResponse>(this.saveGeneralSettingApi, generalSettings);
   }

}
