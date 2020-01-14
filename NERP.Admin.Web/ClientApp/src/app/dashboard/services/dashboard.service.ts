import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable()
export class DashboardService {

   constructor(private http: HttpClient) { }

}
