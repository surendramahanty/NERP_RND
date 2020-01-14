import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { ClusterService } from '../services/cluster.service';
import { HomepassService } from '../../homepasses/services/homepass.service';
import { Helper } from '../../common/helper';
import { GMapsHelper } from '../../common/geo/googleMapsHelper';
import { AppConfig } from '../../app.config';
import { Cluster } from '../models/cluster';
import { Point, Polygon } from '../../common/geo/geometry';
import { Homepass } from '../../homepasses/models/homepass';
import { ServiceResponse } from '../../common/models/serviceResponse';

declare var $: any;
declare var shp: any;
declare var toGeoJSON: any;

@Component({
   templateUrl: './cluster-details.html',
   providers: [ClusterService],
})
export class ClusterDetails implements OnInit {

   polyOptions: any;
   map: any;
   drawingManager: any;

   clusterId: string;
   title: string = "New Cluster";
   tabTitle: string = "Add New";
   isNew = true;
   cluster: Cluster;
   clusters: Cluster[] = new Array<Cluster>();

   constructor(
      private location: Location,
      private route: ActivatedRoute,
      private httpClient: HttpClient,
      private appConfig: AppConfig,
      private clusterService: ClusterService,
      private homepassService: HomepassService,
      private helper: Helper) {

      this.polyOptions = {
         strokeWeight: 0,
         fillOpacity: 0.45,
         editable: false,
         draggable: false
      };
   }

   ngOnInit() {

      let location = GMapsHelper.getLatLng(this.appConfig.settings.MapCenter);
      this.map = GMapsHelper.initializeMap('clusterMap', location, 18, 21);
      this.drawingManager = GMapsHelper.drawingManagerTool(this.map, null, ['rectangle', 'polygon'], this.polyOptions);

      this.route.params.subscribe(
         params => {
            this.clusterId = params['id'];

            if (this.clusterId == null) {
               this.title = "New Cluster";
               this.isNew = true;
            }
            else {
               this.title = "Edit Cluster";
               this.tabTitle = "Edit Cluster";
               this.isNew = false;
               this.drawingManager.setMap(null);
            }

            this.getFormData(this.clusterId);
         });

      GMapsHelper.addListener(this.drawingManager, 'overlaycomplete', async (event) => {

         this.drawingManager.setDrawingMode(null);

         event.overlay.setOptions({ draggable: false });
         event.overlay.setOptions({ editable: false });

         let cluster = {
            name: "",
            code: "",
            description: "",
            geometry: null,
            homepasses: null,

            marker: event.overlay,
            allHomepasses: null
         };

         await this.addHomepasses(cluster, event.type);

         this.clusters.push(cluster);

      });
   }

   getFormData(clusterId: string) {

      this.clusterService.getCluster(clusterId).subscribe(
         async resp => {
            this.cluster = null;
            if (resp.status.toLowerCase() == "error") {
               this.helper.showAlertMessage(resp.message, "error");
            }
            else {
               if (resp.data != null) {
                  var cluster = resp.data;

                  var polygon = GMapsHelper.createPolygon(cluster.geometry.coordinates, this.polyOptions);

                  polygon.setMap(this.map);

                  cluster.marker = polygon;

                  await this.addHomepasses(cluster);

                  this.cluster = cluster;
                  this.clusters.push(this.cluster);

                  var latlngs = GMapsHelper.getLatLngsFromPolygon(cluster.geometry.coordinates);
                  GMapsHelper.setBounds(latlngs, this.map);

                  //var center = GeoHelper.polygonCenter(this.cluster.geometry);
                  //this.clusterMap.setCenter({ lng: center[0], lat: center[1] });
               }
            }

            $("#ajax-loading").hide();
         },
         (err) => {
            $("#ajax-loading").hide();
            this.cluster = null;
            let msg = `Unable to fetch cluster : ${err.message}`;
            this.helper.showAlertMessage(msg, "error");
         });
   }

   async addHomepasses(cluster: Cluster, drawingMode?: string) {

      let polygonArray: any;
      let radius = null;
      let center = null;

      if (drawingMode == 'rectangle') {
         polygonArray = GMapsHelper.boundsToPolygon(cluster.marker.getBounds());
      }
      else if (drawingMode == 'polygon') {
         polygonArray = GMapsHelper.pathArrayToPolygon(cluster.marker.getPath().getArray());
      }
      else {
         polygonArray = GMapsHelper.pathArrayToPolygon(cluster.marker.getPath().getArray());
      }
      //else if (drawingMode == 'circle') {
      //    center = [cluster.marker.center.lng(), cluster.marker.center.lat()];
      //    radius = cluster.marker.getRadius();
      //}

      cluster.geometry = new Polygon(polygonArray);

      if (drawingMode == 'circle')
         cluster.allHomepasses = await this.getHomepassesWithinRadius(center, radius);
      else
         cluster.allHomepasses = await this.getHomepasses(cluster.geometry);

      this.addEventListners(cluster, drawingMode);
   }

   async getHomepassesWithinRadius(center: Point, radius: number) {

      let homepasses = new Array<Homepass>();

      var resp = await this.httpClient.post<ServiceResponse>(this.homepassService.getHomepassesWithinRadiusApi, { Center: center, Radius: radius }).toPromise();

      if (resp.status.toLowerCase() != "error") {
         if (resp.data != null && resp.data.length > 0) {
            homepasses = resp.data;
         }
      }

      return homepasses;

   }

   async getHomepasses(polygon: Polygon) {

      let homepasses = new Array<Homepass>();

      var resp = await this.httpClient.post<ServiceResponse>(this.homepassService.getHomepassesInPolygonApi, polygon).toPromise();

      if (resp.status.toLowerCase() != "error") {
         if (resp.data != null && resp.data.length > 0) {
            homepasses = resp.data;
         }
      }

      return homepasses;

   }

   addEventListners(cluster: Cluster, drawingMode?: string) {

      GMapsHelper.addListener(cluster.marker, "rightclick", (event) => {

         if (cluster.marker.draggable == false) {
            cluster.marker.setOptions({ draggable: true, editable: true });
         }
         else {
            cluster.marker.setOptions({ draggable: false, editable: false });
         }
      });

      //GMapsHelper.addListener(cluster.marker, 'dragend', (event) => {
      //    cluster.marker.data.location.coordinates[0] = event.latLng.lng();
      //    cluster.marker.data.location.coordinates[1] = event.latLng.lat();
      //    this.cluster = cluster;
      //});


      //if (drawingMode == 'rectangle') {
      //    GMapsHelper.addListener(cluster.marker.getBounds(), 'set_at', async () => {
      //        let polygonArray = GMapsHelper.boundsToPolygon(cluster.marker.getBounds());
      //        cluster.geometry = new Polygon(polygonArray);

      //        cluster.allHomepasses = await this.getHomepasses(cluster.geometry);
      //    });

      //    GMapsHelper.addListener(cluster.marker.getBounds(), 'insert_at', async () => {
      //        let polygonArray = GMapsHelper.boundsToPolygon(cluster.marker.getBounds());
      //        cluster.geometry = new Polygon(polygonArray);

      //        cluster.allHomepasses = await this.getHomepasses(cluster.geometry);
      //    });

      //    GMapsHelper.addListener(cluster.marker.getBounds(), 'remove_at', async () => {
      //        let polygonArray = GMapsHelper.boundsToPolygon(cluster.marker.getBounds());
      //        cluster.geometry = new Polygon(polygonArray);

      //        cluster.allHomepasses = await this.getHomepasses(cluster.geometry);
      //    });
      //}
      //else {
      //    GMapsHelper.addListener(cluster.marker.getPath(), 'set_at', async () => {
      //        let polygonArray = GMapsHelper.pathArrayToPolygon(cluster.marker.getPath().getArray());
      //        cluster.geometry = new Polygon(polygonArray);

      //        cluster.allHomepasses = await this.getHomepasses(cluster.geometry);
      //    });

      //    GMapsHelper.addListener(cluster.marker.getPath(), 'insert_at', async () => {
      //        let polygonArray = GMapsHelper.pathArrayToPolygon(cluster.marker.getPath().getArray());
      //        cluster.geometry = new Polygon(polygonArray);

      //        cluster.allHomepasses = await this.getHomepasses(cluster.geometry);
      //    });

      //    GMapsHelper.addListener(cluster.marker.getPath(), 'remove_at', async () => {
      //        let polygonArray = GMapsHelper.pathArrayToPolygon(cluster.marker.getPath().getArray());
      //        cluster.geometry = new Polygon(polygonArray);

      //        cluster.allHomepasses = await this.getHomepasses(cluster.geometry);
      //    });
      //}

      GMapsHelper.addListener(cluster.marker, 'click', (event) => {
         this.cluster = cluster;
      });

   }

   stringify(obj: any): string {
      return JSON.stringify(obj);
   }

   removeUploadedCluster(index: number) {
      var cluster = this.clusters[index];

      if (cluster.marker)
         cluster.marker.setMap(null);

      this.clusters.splice(index, 1);
   }

   isAllSelected() {
      const numSelected = this.cluster.homepasses ? this.cluster.homepasses.length : 0;
      const numRows = this.cluster.allHomepasses.length;
      return numSelected === numRows;
   }

   toggleSelection(homepass: Homepass) {

      var index = -1;

      if (this.cluster.homepasses)
         index = this.cluster.homepasses.findIndex(x => x == homepass.id);
      else
         this.cluster.homepasses = [];

      if (index == -1)
         this.cluster.homepasses.push(homepass.id);
      else
         this.cluster.homepasses.splice(index, 1);
   }

   masterToggle() {

      if (this.isAllSelected()) {
         this.cluster.homepasses = [];
      }
      else {
         this.cluster.homepasses = [];
         this.cluster.allHomepasses.forEach(x => this.cluster.homepasses.push(x.id));
      }
   }

   fileChangeEvent(event: any) {

      var file = event.target.files[0];

      var reader = new FileReader();

      var fileExt = file.name.split('.').pop().toLowerCase();

      reader.onload = (e) => {

         try {

            if (fileExt == "kml") {
               let kml = reader.result as string;
               let geojson = toGeoJSON.kml((new DOMParser()).parseFromString(kml, 'text/xml'));
               this.populateClusters(geojson.features);
            }
            else if (fileExt == "zip") {
               shp(reader.result as ArrayBuffer).then((geojson) => {
                  this.populateClusters(geojson.features);
               });
            }

         } catch (e) {
            this.helper.showAlertMessage("Could not parse the file.", "error");
         }

      }

      if (fileExt == "csv" || fileExt == "kml")
         reader.readAsText(file);
      else if (fileExt == "zip")
         reader.readAsArrayBuffer(file);
      else
         this.helper.showAlertMessage("Invalid file format", "error");
   }

   populateClusters(features: any) {

      this.clusters.length = 0;

      let clusters = new Array<Cluster>();

      for (var i = 0; i < features.length; i++) {
         let properties = features[i].properties;

         let cluster = {
            name: properties.name,
            code: properties.name,
            description: "",
            geometry: features[i].geometry,
            homepasses: null,

            marker: null,
            allHomepasses: null
         };

         var polygon = GMapsHelper.createPolygon(cluster.geometry.coordinates, this.polyOptions);

         polygon.setMap(this.map);

         cluster.marker = polygon;

         clusters.push(cluster);

         this.addHomepasses(cluster);
      }

      this.clusters = clusters;
   }

   deleteCluster() {
      var index = this.clusters.findIndex(x => x.geometry.coordinates[0] == this.cluster.geometry.coordinates[0] && x.geometry.coordinates[1] == this.cluster.geometry.coordinates[1]);

      if (this.clusters[index].marker)
         this.clusters[index].marker.setMap(null);

      this.clusters.splice(index, 1);

      this.cluster = null;

      if (this.isNew == false) {
         this.clusterService.deleteCluster(this.cluster.id).subscribe(
            resp => {
               if (resp.status.toLowerCase() == "error") {
                  this.helper.showAlertMessage(resp.message, "error");
               }
               else {
                  this.helper.showAlertMessage("Cluster successfully deleted", "success");
                  this.goBack();
               }
            },
            (err) => {
               this.helper.showAlertMessage("Unable to delete cluster information.", "error");
            });
      }
   }

   save() {

      var errorMessages = this.validateCluster(this.clusters);

      if (errorMessages.length == 0) {

         this.clusters.forEach(x => { x.marker = null; x.allHomepasses = null });

         this.clusterService.saveClusters(this.clusters).subscribe(
            resp => {
               if (resp.status.toLowerCase() == "error") {
                  this.helper.showAlertMessage(resp.message, "error");
               }
               else {
                  this.helper.showAlertMessage("Cluster information saved", "success");
                  this.goBack();
               }
            },
            (err) => {
               this.helper.showAlertMessage("Unable to save cluster information.", "error");
            });
      }
      else {
         var errorMessage = this.helper.getErrorMessagesText(errorMessages);
         this.helper.showAlertMessage(errorMessage, "error");
      }
   }

   validateCluster(clusters: Cluster[]): string[] {
      var errorMessages = [];

      this.clusters.forEach(cluster => {

         if (cluster.name == null || cluster.name.trim() == '')
            errorMessages.push("Cluster Name cannot be empty");

         if (cluster.code == null || cluster.code.trim() == '')
            errorMessages.push("Cluster Code cannot be empty");
      });

      return errorMessages;
   }

   goBack(): void {
      this.location.back();
   }
}
