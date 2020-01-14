import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root'
})
export class AppConfig {
   constructor() { }

   baseUrl: string = "";

   urls = {
      "Design": {
         getDesignsApi: "Designs/GetDesigns/",
         getDesignApi: "Designs/GetDesign/",
         saveDesignApi: "Designs/SaveDesign/",
         deleteDesignApi: "Designs/DeleteDesign/",
         deleteDocumentApi: "Designs/DeleteDocument/",
         exportDesignApi: "Designs/ExportDesign/"
      },
      "Routeware": {
         SortPoints: "http://183.82.114.169:4000/api/Routeware/SortPoints", //183.82.114.169:4000 ,
         GenerateMST: "http://183.82.114.169:4000/api/Routeware/GenerateMST",
         GenerateMSTRecursive: "http://183.82.114.169:4000/api/Routeware/GenerateMSTRecursive",
      },

   };

   settings = {
      "Region": 'Indonesia\\Jakarta',
      "MapCenter": [-6.14063, 106.734856]
   };
}

