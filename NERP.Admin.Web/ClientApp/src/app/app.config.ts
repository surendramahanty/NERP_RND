import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppConfig {
    constructor() {}

    baseUrl = "";
    baseRoutewareUrl = "";

    urls = {
        "Routeware": {
            SortPoints: this.baseRoutewareUrl + "api/Routeware/SortPoints",
            GenerateMST: this.baseRoutewareUrl + "api/Routeware/GenerateMST",
        },
        
    };
}

