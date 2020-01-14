import { Component, Input, SimpleChanges, OnInit, OnChanges } from '@angular/core';
import { Design, EntitySettings } from '../models/design';
import { AppConfig } from '../../app.config';
import { BomHelper } from '../services/bom.helper';
import { GMapsHelper } from '../../common/geo/googleMapsHelper';
import { GeoHelper } from '../../common/geo/geoHelper';
import { EntitiesHelper } from '../services/entities.helper';
import { GeoNode, Segment } from '../../common/geo/geoNode';
import { MapEntitiesHelper } from '../services/map-entities.helper';
import { GeoNodeHelper } from '../services/geoNode.helper';
import { Chamber } from '../../entities/models/chamber';
import { Position, Point, LineString } from '../../common/geo/geometry';
import { Helper } from '../../common/helper';
import { Pole } from '../../entities/models/pole';
import * as _ from "lodash";
import { Splitter } from '../../entities/models/splitter';
import { Cable } from '../../entities/models/cable';
import { SpliceClosure } from 'src/app/entities/models/spliceClosure';
import { Supplier } from 'src/app/common/models/supplier';
//import { Customer } from '../../entities/models/customer';
//import { Duct } from '../../entities/models/duct';
import { MicroDuct } from '../../entities/models/MicroDuct';
import { PoP } from '../../entities/models/pop';
import { ODF } from '../../entities/models/odf';
import { Duct } from '../../entities/models/duct';
import { parse } from 'url';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DesignEntities } from './dzn-entities';
import { ChamberService } from '../../entities/services/chamber.service';
import { ODFService } from '../../entities/services/odf.service';
import { PoleService } from '../../entities/services/pole.service';
import { SpliceClosureService } from '../../entities/services/spliceClosure.service';
import { SplitterService } from '../../entities/services/splitter.service';
import { fatService } from '../../entities/services/fat.service';
import { fdtService } from '../../entities/services/fdt.service';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
import { FAT } from '../../entities/models/fat';
import { FDT } from '../../entities/models/Solution2.zip';
import { DuctService } from '../../entities/services/duct.service';
import { CableService } from '../../entities/services/cable.service';

declare var $: any;
declare var google: any;
declare var GMHelper: any;
declare var entitiesHelper: any;
declare var fromComponent: any;

@Component({
   selector: 'dzn-map',
   templateUrl: './dzn-map.html'
})
export class DesignMap implements OnInit, OnChanges {
   @Input() entitySettings: EntitySettings = new EntitySettings();
   @Input() public design: Design = new Design();
   masterEntities: any;
   private entityIcons = [];
   layers = [];
   markerData: any;
   map: any;
   isEntitiesGenerated: boolean = false;
   entitiesHelper: EntitiesHelper;
   mapEntitiesHelper: MapEntitiesHelper;
   selectedEntity: any;
   CurrentselectedEntity: any;
   changedSegments = [];
   chamber: Chamber = new Chamber();
   poles: Pole = new Pole();
   Flag: any;
   DeleteFlag: any;
   designEntity: any;
   entities = [];
   designEntities: any;
   marker: any;
   filterResult: any;

   Data: any;
   selectedLayers = ["Cable", "Chamber", "Pole", "Splitter", "PoP", "Duct", "MicroDuct"];
   //pop: any;
   des: any;
   PoleIncrementalID = 0;
   ChamberIncrementalID = 0;
   CableIncrementalID = 0;
   OdfIncrementalID = 0;
   SplitterIncrementalID = 0;
   PopIncrementalID = 0;
   SpliceClosureIncrementalID = 0;
   entityType: any;

   getdata: any;
   fatdata: FAT = new FAT();
   fdt: FDT = new FDT();
   FatIncrementalID = 0;
   FdtIncrementalID = 0;
   constructor(
      private appConfig: AppConfig, private helper: Helper,
      private bomHelper: BomHelper, private chamberService: ChamberService,
      private odfService: ODFService,
      private poleService: PoleService,
      private spliceClosureService: SpliceClosureService,
      private splitterService: SplitterService,
      private fatService: fatService,
      private fdtService: fdtService, private ductService: DuctService, private cableService: CableService
   ) {

      this.entityIcons.push({ entityType: "Homepass", icon: { url: "images/map-entities/homepass.png" } });
      this.entityIcons.push({ entityType: "Chamber", icon: { url: "images/map-entities/chamber.png", anchor: new google.maps.Point(10, 10) } });
      this.entityIcons.push({ entityType: "ODF", icon: { url: "images/map-entities/odf.png" } });
      this.entityIcons.push({ entityType: "Pole", icon: { url: "images/map-entities/pole.png" } });
      this.entityIcons.push({ entityType: "PoP", icon: { url: "images/map-entities/pop.png" } });
      this.entityIcons.push({ entityType: "Splitter", icon: { url: "images/map-entities/splitter.png" } });
      this.entityIcons.push({ entityType: "SpliceClosure", icon: { url: "images/map-entities/spliceclosure.png" } });

      this.layers.push({ id: "Cable", name: "Cable" });
      this.layers.push({ id: "Duct", name: "Duct" });
      this.layers.push({ id: "MicroDuct", name: "MicroDuct" });

      this.layers.push({ id: "Chamber", name: "Chamber" });
      this.layers.push({ id: "ODF", name: "ODF" });
      this.layers.push({ id: "Pole", name: "Pole" });
      this.layers.push({ id: "PoP", name: "PoP" });
      this.layers.push({ id: "SpliceClosure", name: "Splice Closure" });
      this.layers.push({ id: "Splitter", name: "Splitter" });
      this.layers.push({ id: "Homepass", name: "Homepass" });

      this.entityIcons.push({ entityType: "FAT", icon: { url: "images/map-entities/FAT.png" } });
      this.entityIcons.push({ entityType: "FDT", icon: { url: "images/map-entities/FDT.png" } });
      this.layers.push({ id: "FAT", name: "FAT" });
      this.layers.push({ id: "FDT", name: "FDT" });

      this.isEntitiesGenerated = false;
   }

   ngOnInit() {
      this.DeleteFlag = null;

      this.selectedEntity = null;
      this.CurrentselectedEntity = null;

      this.designEntity = 0;
      let location = GMapsHelper.getLatLng(this.appConfig.settings.MapCenter);

      if (this.design.bluePrint) {
         location = GeoHelper.convertToPosition(this.design.bluePrint.coordinates);
      }

      this.map = GMapsHelper.initializeMap('designMap', location, 18, 21);
      this.mapEntitiesHelper = new MapEntitiesHelper(this.map);
      var overlay = GMHelper.createOverlay(this.map);

      var entityItems = $('.entityMenu img');

      this.entitiesHelper = new EntitiesHelper(this.design.bookingIds, this.design.generatedCodes);
      let mapEntitiesHelper = new MapEntitiesHelper(this.map);




      let des = this.des;
    
      for (var i = 0; i < entityItems.length; i++) {

         $(entityItems[i]).draggable({

            helper: 'clone', containment: '#designMap',

            stop: (e) => {


               let seg = this.design.bluePrint.children[0].segments;
               this.Data = this.design.bluePrint.children;

               var dropPoint = new google.maps.Point(e.pageX - 250, e.pageY - 200);
               var entityType = e.target.attributes[1].nodeValue;

               var latLng = GMHelper.getLatLongFromDragPoint(overlay, dropPoint);

               if (entityType == "Chamber") {
                  this.masterEntities = null;
                  this.getdata = null;
                  let masterSvc = this.chamberService.getChambers();
                  masterSvc.subscribe(
                     resp => {
                        this.masterEntities = null;
                        if (resp.data != null && resp.data.length > 0) {
                           this.masterEntities = resp.data;
                           for (var i = 0; i <= resp.data.length - 1; i++) {
                              for (var j = 0; j <= resp.data[i].suppliers.length - 1; j++) {
                                 if (resp.data[i].suppliers[j].default != undefined && resp.data[i].suppliers[j].default == "true") {
                                    this.getdata = resp.data[i].suppliers[j];
                                    break;
                                 } else {
                                    continue;
                                 }
                              }

                           }

                           if (seg) {
                              this.CurrentselectedEntity = null;
                              this.chamber = null;

                              if (seg[0].chambers == null) {
                                 seg[0].chambers = new Array<Chamber>();
                                 this.chamber.entityType = "Chamber";
                                 this.chamber.id = Helper.generateObjectId();
                                 this.chamber.code = this.entitiesHelper.generatedCodes('Chamber');
                                 this.chamber.name = this.chamber.code;

                                 this.chamber.geometry = new Point([latLng.lng(), latLng.lat()]);


                                 var marker = mapEntitiesHelper.drawPoint(this.chamber, { url: "images/map-entities/chamber.png", anchor: new google.maps.Point(10, 10) }, true, true);
                                 this.CurrentselectedEntity = marker.data;
                                 GMapsHelper.addListener(marker, 'click', (event) => {

                                    this.selectedEntity = marker.data;
                                 });

                                 let supplier = new Supplier();
                                 supplier.currency = this.getdata.currency;
                                 supplier.name = this.getdata.name;
                                 supplier.stockQty = this.getdata.stockQty;
                                 supplier.price = this.getdata.price;
                                 supplier.validFrom = this.getdata.validFrom;
                                 supplier.validTo = this.getdata.validTo;

                                 this.chamber.suppliers = new Array<Supplier>();
                                 this.chamber.suppliers.push(supplier);
                                 seg[0].chambers.push(this.chamber);
                                 this.isEditable(true, marker);
                              }
                              else {
                                 this.CurrentselectedEntity = null;
                                 this.chamber = null;
                                 this.chamber = _.cloneDeep(seg[0].chambers[0]);
                                 if (this.chamber == undefined) {
                                    this.chamber = null;
                                 }
                                 if (this.ChamberIncrementalID == 0) {
                                    for (var i = seg[0].chambers.length - 1; i >= 0; i--) {
                                       if (seg[0].chambers[i].code != undefined || seg[0].chambers[i].code != null) {
                                          var ID2 = seg[0].chambers[i].code;
                                          var ID3 = ID2.toString();
                                          var ID4 = ID3.split('_');
                                          this.ChamberIncrementalID = parseInt(ID4[1]) + 1;
                                          break;
                                       } else {
                                          continue;
                                       }
                                    }
                                 } else {
                                    this.ChamberIncrementalID = this.ChamberIncrementalID + 1;
                                 }
                                 this.chamber.id = Helper.generateObjectId();
                                 this.chamber.code = 'Chamber_' + this.ChamberIncrementalID;
                                 this.chamber.name = 'Chamber_' + this.ChamberIncrementalID;
                                 this.chamber.geometry = new Point([latLng.lng(), latLng.lat()]);

                                 var marker = mapEntitiesHelper.drawPoint(this.chamber, { url: "images/map-entities/chamber.png", anchor: new google.maps.Point(10, 10) }, true, true);

                                 this.CurrentselectedEntity = marker.data;
                                 GMapsHelper.addListener(marker, 'click', (event) => {

                                    this.selectedEntity = marker.data;
                                 });

                                 let getdata = $.grep(this.masterEntities, function (l) {
                                    return l.default == "true";
                                 })
                                 let supplier = new Supplier();
                                 supplier.currency = this.getdata.currency;
                                 supplier.name = this.getdata.name;
                                 supplier.stockQty = this.getdata.stockQty;
                                 supplier.price = this.getdata.price;
                                 supplier.validFrom = this.getdata.validFrom;
                                 supplier.validTo = this.getdata.validTo;
                                 this.chamber.suppliers = new Array<Supplier>();
                                 this.chamber.suppliers.push(supplier);
                                 seg[0].chambers.push(this.chamber);
                                 this.isEditable(true, marker);
                              }
                           }
                        }
                     },
                     (err) => {
                        this.masterEntities = new Array<Chamber>();
                     });

               }

               if (entityType == "Pole") {
                  this.getdata = null;
                  let masterSvc = this.poleService.getPoles();
                  masterSvc.subscribe(
                     resp => {
                        if (resp.data != null && resp.data.length > 0) {
                           for (var i = 0; i <= resp.data.length - 1; i++) {
                              for (var j = 0; j <= resp.data[i].suppliers.length - 1; j++) {
                                 if (resp.data[i].suppliers[j].default != undefined && resp.data[i].suppliers[j].default == "true") {
                                    this.getdata = resp.data[i].suppliers[j];
                                    break;
                                 } else {
                                    continue;
                                 }
                              }

                           }
                           if (seg) {
                              this.poles = null;
                              if (seg[0].poles == null) {
                                 seg[0].poles = new Array<Pole>();
                                 this.poles.entityType = "Pole";
                                 this.poles.id = Helper.generateObjectId();

                                 this.poles.code = this.entitiesHelper.generatedCodes('Pole');;
                                 this.poles.name = this.poles.code;
                                 this.poles.geometry = new Point([latLng.lng(), latLng.lat()]);

                                 var marker = mapEntitiesHelper.drawPoint(this.poles, { url: "images/map-entities/pole.png", anchor: new google.maps.Point(10, 10) }, true, true);
                                 this.CurrentselectedEntity = marker.data;
                                 GMapsHelper.addListener(marker, 'click', (event) => {
                                    this.selectedEntity = marker.data;
                                 });
                                 let supplier = new Supplier();
                                 supplier.currency = this.getdata.currency;
                                 supplier.name = this.getdata.name;
                                 supplier.stockQty = this.getdata.stockQty;
                                 supplier.price = this.getdata.price;
                                 supplier.validFrom = this.getdata.validFrom;
                                 supplier.validTo = this.getdata.validTo;

                                 this.poles.suppliers = new Array<Supplier>();
                                 this.poles.suppliers.push(supplier);
                                 seg[0].poles.push(this.poles);
                                 this.isEditable(true, marker);
                              }
                              else {
                                 this.CurrentselectedEntity = null;
                                 this.poles = null;
                                 if (this.PoleIncrementalID == 0) {
                                    for (var i = seg[0].poles.length - 1; i >= 0; i--) {
                                       //seg[0].splitters[20].code
                                       if (seg[0].poles[i].code != undefined || seg[0].poles[i].code != null) {
                                          var ID2 = seg[0].poles[i].code;
                                          var ID3 = ID2.toString();
                                          var ID4 = ID3.split('_');
                                          this.PoleIncrementalID = parseInt(ID4[1]) + 1;
                                          //k = true;
                                          break;
                                       } else {
                                          continue;
                                       }
                                    }
                                 } else {
                                    this.PoleIncrementalID = this.PoleIncrementalID + 1;
                                 }
                                 this.poles = _.cloneDeep(seg[0].poles[0]);
                                 this.poles.id = Helper.generateObjectId();
                                 this.poles.code = 'Poles_' + this.PoleIncrementalID;
                                 this.poles.name = 'Poles_' + this.PoleIncrementalID;
                                 //newPole.name = newPole.code;
                                 this.poles.geometry = new Point([latLng.lng(), latLng.lat()]);

                                 var marker = mapEntitiesHelper.drawPoint(this.poles, { url: "images/map-entities/pole.png", anchor: new google.maps.Point(10, 10) }, true, true);
                                 this.CurrentselectedEntity = marker.data;
                                 GMapsHelper.addListener(marker, 'click', (event) => {

                                    this.selectedEntity = marker.data;
                                 });
                                 let supplier = new Supplier();
                                 supplier.currency = this.getdata.currency;
                                 supplier.name = this.getdata.name;
                                 supplier.stockQty = this.getdata.stockQty;
                                 supplier.price = this.getdata.price;
                                 supplier.validFrom = this.getdata.validFrom;
                                 supplier.validTo = this.getdata.validTo;

                                 this.poles.suppliers = new Array<Supplier>();
                                 this.poles.suppliers.push(supplier);
                                 seg[0].poles.push(this.poles);
                                 this.isEditable(true, marker);

                              }

                           }
                        }
                     },
                     (err) => {
                        this.masterEntities = new Array<Chamber>();
                     });
               }

               if (entityType == "UndergroundCable") {
                  let seg1 = new Segment();// this.design.bluePrint.children[0].segments;
                  this.masterEntities = null;
                  this.getdata = null;
                  let masterSvc = this.cableService.getCables();
                  masterSvc.subscribe(
                     resp => {
                        this.masterEntities = null;
                        if (resp.data != null && resp.data.length > 0) {
                           this.masterEntities = resp.data;
                           for (var i = 0; i <= resp.data.length - 1; i++) {
                              for (var j = 0; j <= resp.data[i].suppliers.length - 1; j++) {
                                 if (resp.data[i].suppliers[j].default != undefined && resp.data[i].suppliers[j].default == "true") {
                                    this.getdata = resp.data[i].suppliers[j];
                                    break;
                                 } else {
                                    continue;
                                 }
                              }

                           }

                           //var marker = mapEntitiesHelper.drawLine(cable, "#000000", 2, false, true);

                           var parentThis = this;
                           let colour = "#000000";
                           let lineWeight = 3;



                           let polyline = new google.maps.Polyline({
                              strokeColor: colour,
                              strokeOpacity: 1.0,
                              strokeWeight: lineWeight,
                              map: this.map
                           });

                           let path = polyline.getPath();

                           polyline.setMap(this.map);

                           GMHelper.clearClickListener(this.map, "click");

                           GMHelper.addListener(this.map, "click", function (event) {
                              polyline.setEditable(true);
                              path = polyline.getPath();
                              path.push(event.latLng);
                           });

                           this.map.setOptions({ draggableCursor: 'crosshair' });

                           GMHelper.addListener(polyline, "rightclick", function (event) {
                              GMHelper.clearClickListener(polyline, "rightclick");

                              GMHelper.clearClickListener(polyline.map, "click");

                              polyline.map.setOptions({ draggableCursor: '' });

                              polyline.setEditable(false);
                              //if (this.CableIncrementalID == undefined) {
                              let id = 0;
                              if (seg.length != undefined && seg.length > 0) {

                                 if (id == 0) {
                                    for (var i = seg.length - 1; i >= 0; i--) {
                                       if (seg[i].cable != undefined || seg[i].cable != null) {
                                          var ID2 = seg[i].cable.code;
                                          var ID3 = ID2.toString();
                                          var ID4 = ID3.split('_');
                                          id = parseInt(ID4[1]) + 1;
                                          break;
                                       } else {                                         
                                          continue;
                                       }
                                    }
                                 } else {
                                    id = id + 1;
                                 }
                              }
                              //let seg1 = new Segment();// this.design.bluePrint.children[0].segments;
                              if (id == 0) {
                                 id = 1;
                              }
                              seg1.id = Helper.generateObjectId();



                              let cable = new Cable();
                              cable.entityType = "Cable";
                              cable.id = Helper.generateObjectId();
                              cable.code = 'Cable_' + id;
                              cable.name = cable.code;
                              cable.isUnderground = true;
                              seg1.cable = cable;

                              //this.isEditable(true, marker);

                              var coords = polyline.getPath().getArray();

                              let newCoords = new Array<number[]>();

                              coords.forEach(x => {
                                 newCoords.push([x.lng(), x.lat()]);
                              });

                              cable.geometry = new LineString();
                              cable.geometry.coordinates = GeoHelper.cleanLineCoordinates(newCoords);

                              cable.measuredLength = GeoHelper.getLength(cable.geometry.coordinates);



                              let supplier = new Supplier();
                              supplier.currency = parentThis.getdata.currency;
                              supplier.name = parentThis.getdata.name;
                              supplier.stockQty = parentThis.getdata.stockQty;
                              supplier.price = parentThis.getdata.price;
                              supplier.validFrom = parentThis.getdata.validFrom;
                              supplier.validTo = parentThis.getdata.validTo;

                              cable.suppliers = new Array<Supplier>();
                              cable.suppliers.push(supplier);

                              seg1.coordinates = cable.geometry.coordinates;

                              seg1.cable = cable;


                              parentThis.design.bluePrint.children[0].segments.push(seg1);

                              var marker = mapEntitiesHelper.drawLine(cable, "#000000", 2, false, true);
                              //this.selectedEntity = polyline.data;


                              GMapsHelper.addListener(marker, 'click', (event) => {
                                 parentThis.selectedEntity = marker.data;
                              });
                           });
                        }
                     },
                     (err) => {
                        this.masterEntities = new Array<Chamber>();
                     });

               }
               if (entityType == "Overhead Cable") {

                  this.masterEntities = null;
                  this.getdata = null;
                  let masterSvc = this.ductService.getDucts();
                  masterSvc.subscribe(
                     resp => {
                        this.masterEntities = null;
                        if (resp.data != null && resp.data.length > 0) {
                           this.masterEntities = resp.data;
                           for (var i = 0; i <= resp.data.length - 1; i++) {
                              for (var j = 0; j <= resp.data[i].suppliers.length - 1; j++) {
                                 if (resp.data[i].suppliers[j].default != undefined && resp.data[i].suppliers[j].default == "true") {
                                    this.getdata = resp.data[i].suppliers[j];
                                    break;
                                 } else {
                                    continue;
                                 }
                              }

                           }

                           //var marker = mapEntitiesHelper.drawLine(cable, "#000000", 2, false, true);

                           var parentThis = this;
                           let colour = "#000000";
                           let lineWeight = 3;



                           let polyline = new google.maps.Polyline({
                              strokeColor: colour,
                              strokeOpacity: 1.0,
                              strokeWeight: lineWeight,
                              map: this.map
                           });

                           let path = polyline.getPath();

                           polyline.setMap(this.map);

                           GMHelper.clearClickListener(this.map, "click");

                           GMHelper.addListener(this.map, "click", function (event) {
                              polyline.setEditable(true);
                              path = polyline.getPath();
                              path.push(event.latLng);
                           });

                           this.map.setOptions({ draggableCursor: 'crosshair' });

                           GMHelper.addListener(polyline, "rightclick", function (event) {
                              GMHelper.clearClickListener(polyline, "rightclick");

                              GMHelper.clearClickListener(polyline.map, "click");

                              polyline.map.setOptions({ draggableCursor: '' });

                              polyline.setEditable(false);
                              let id = 0;
                              if (seg.length != undefined && seg.length > 0) {

                                 if (id == 0) {
                                    for (var i = seg.length - 1; i >= 0; i--) {
                                       if (seg[i].cable != undefined || seg[i].cable != null) {
                                          var ID2 = seg[i].cable.code;
                                          var ID3 = ID2.toString();
                                          var ID4 = ID3.split('_');
                                          id = parseInt(ID4[1]) + 1;
                                          break;
                                       } else {
                                          //id = 1;
                                          continue;
                                       }
                                    }

                                 } else {
                                    id = id + 1;
                                 }
                              }
                              if (id == 0) {
                                 id = 1;
                              }
                              let seg1 = new Segment();// this.design.bluePrint.children[0].segments;

                              seg1.id = Helper.generateObjectId();



                              let cable = new Cable();
                              cable.entityType = "Cable";
                              cable.id = Helper.generateObjectId();
                              var ids = cable.id.toString();
                              cable.name = "Cable_" + id;
                              cable.code = "Cable_" + id;
                              cable.isUnderground = false;
                              seg1.cable = cable;

                              //this.isEditable(true, marker);

                              var coords = polyline.getPath().getArray();

                              let newCoords = new Array<number[]>();

                              coords.forEach(x => {
                                 newCoords.push([x.lng(), x.lat()]);
                              });

                              cable.geometry = new LineString();
                              cable.geometry.coordinates = GeoHelper.cleanLineCoordinates(newCoords);

                              cable.measuredLength = GeoHelper.getLength(cable.geometry.coordinates);



                              let supplier = new Supplier();
                              supplier.currency = parentThis.getdata.currency;
                              supplier.name = parentThis.getdata.name;
                              supplier.stockQty = parentThis.getdata.stockQty;
                              supplier.price = parentThis.getdata.price;
                              supplier.validFrom = parentThis.getdata.validFrom;
                              supplier.validTo = parentThis.getdata.validTo;

                              cable.suppliers = new Array<Supplier>();
                              cable.suppliers.push(supplier);

                              seg1.coordinates = cable.geometry.coordinates;

                              seg1.cable = cable;


                              parentThis.design.bluePrint.children[0].segments.push(seg1);

                              var marker = mapEntitiesHelper.drawLine(cable, "#000000", 2, false, true);
                              //this.selectedEntity = polyline.data;


                              GMapsHelper.addListener(marker, 'click', (event) => {
                                 parentThis.selectedEntity = marker.data;
                              });
                           });
                        }
                     },
                     (err) => {
                        this.masterEntities = new Array<Chamber>();
                     });

               }
               //createEntity(entityType, latLng);
               if (entityType == "Duct") {
                  this.masterEntities = null;
                  this.getdata = null;
                  let masterSvc = this.ductService.getDucts();
                  masterSvc.subscribe(
                     resp => {
                        this.masterEntities = null;
                        if (resp.data != null && resp.data.length > 0) {
                           this.masterEntities = resp.data;
                           for (var i = 0; i <= resp.data.length - 1; i++) {
                              for (var j = 0; j <= resp.data[i].suppliers.length - 1; j++) {
                                 if (resp.data[i].suppliers[j].default != undefined && resp.data[i].suppliers[j].default == "true") {
                                    this.getdata = resp.data[i].suppliers[j];
                                    break;
                                 } else {
                                    continue;
                                 }
                              }

                           }

                           var lineSymbol = {
                              path: 'M 0,-1 0,1',
                              strokeOpacity: 1,
                              scale: 4
                           };

                           var polyline = new google.maps.Polyline({
                              strokeColor: '#FFA500',
                              strokeOpacity: 0,
                              editable: true,
                              icons: [{
                                 icon: lineSymbol,
                                 offset: '0',
                                 repeat: '20px'
                              }],

                           });


                           var parentThis = this;
                           let path = polyline.getPath();

                           polyline.setMap(this.map);

                           GMHelper.clearClickListener(this.map, "click");

                           GMHelper.addListener(this.map, "click", function (event) {
                              polyline.setEditable(true);
                              path = polyline.getPath();
                              path.push(event.latLng);
                           });

                           this.map.setOptions({ draggableCursor: 'crosshair' });

                           GMHelper.addListener(polyline, "rightclick", function (event) {
                              GMHelper.clearClickListener(polyline, "rightclick");

                              GMHelper.clearClickListener(polyline.map, "click");

                              polyline.map.setOptions({ draggableCursor: '' });

                              polyline.setEditable(false);

                              let id = 0;
                              if (seg.length != undefined && seg.length > 0) {

                                 if (id == 0) {
                                    for (var i = seg.length - 1; i >= 0; i--) {
                                       if (seg[i].ducts != undefined || seg[i].ducts != null) {
                                          var ID2 = seg[i].ducts.code;
                                          var ID3 = ID2.toString();
                                          var ID4 = ID3.split('_');
                                          id = parseInt(ID4[1]) + 1;
                                          break;
                                       } else {
                                          id =1;
                                          continue;
                                       }
                                    }
                                 } else {
                                    id = id + 1;
                                 }
                              }

                              let seg1 = new Segment();// this.design.bluePrint.children[0].segments;

                              //seg1.id = Helper.generateObjectId();



                              let duct = new Duct();
                              duct.entityType = "Duct";
                              duct.id = Helper.generateObjectId();
                              duct.name = "Duct_" + id;
                              duct.code = "Duct_" + id;

                              //seg1.ducts = duct;

                              //this.isEditable(true, marker);

                              var coords = polyline.getPath().getArray();

                              let newCoords = new Array<number[]>();

                              coords.forEach(x => {
                                 newCoords.push([x.lng(), x.lat()]);
                              });

                              duct.geometry = new LineString();
                              duct.geometry.coordinates = GeoHelper.cleanLineCoordinates(newCoords);

                              duct.measuredLength = GeoHelper.getLength(duct.geometry.coordinates);




                              let supplier = new Supplier();
                              supplier.currency = parentThis.getdata.currency;
                              supplier.name = parentThis.getdata.name;
                              supplier.stockQty = parentThis.getdata.stockQty;
                              supplier.price = parentThis.getdata.price;
                              supplier.validFrom = parentThis.getdata.validFrom;
                              supplier.validTo = parentThis.getdata.validTo;

                              duct.suppliers = new Array<Supplier>();
                              duct.suppliers.push(supplier);

                              //seg1.coordinates = duct.geometry.coordinates;

                              seg1.ducts = duct;


                              parentThis.design.bluePrint.children[0].segments.push(seg1);

                              var marker = mapEntitiesHelper.drawDuctLine(duct, "#000000", 2, false, true);
                              //this.selectedEntity = polyline.data;


                              GMapsHelper.addListener(marker, 'click', (event) => {
                                 parentThis.selectedEntity = marker.data;
                              });
                           });
                        }
                     },
                     (err) => {
                        this.masterEntities = new Array<Chamber>();
                     });
               }
               if (entityType == "Micro Duct") {

                  this.masterEntities = null;
                  this.getdata = null;
                  let masterSvc = this.ductService.getDucts();
                  masterSvc.subscribe(
                     resp => {
                        this.masterEntities = null;
                        if (resp.data != null && resp.data.length > 0) {
                           this.masterEntities = resp.data;
                           for (var i = 0; i <= resp.data.length - 1; i++) {
                              for (var j = 0; j <= resp.data[i].suppliers.length - 1; j++) {
                                 if (resp.data[i].suppliers[j].default != undefined && resp.data[i].suppliers[j].default == "true") {
                                    this.getdata = resp.data[i].suppliers[j];
                                    break;
                                 } else {
                                    continue;
                                 }
                              }

                           }


                  var lineSymbol = {
                     path: 'M 0,-1 0,1',
                     strokeOpacity: 1,
                     scale: 4
                  };

                  var polyline = new google.maps.Polyline({
                     strokeColor: '#000000',
                     strokeOpacity: 0,
                     editable: true,
                     icons: [{
                        icon: lineSymbol,
                        offset: '0',
                        repeat: '20px'
                     }],

                  });


                  var parentThis = this;
                  let path = polyline.getPath();

                  polyline.setMap(this.map);

                  GMHelper.clearClickListener(this.map, "click");

                  GMHelper.addListener(this.map, "click", function (event) {
                     polyline.setEditable(true);
                     path = polyline.getPath();
                     path.push(event.latLng);
                  });

                  this.map.setOptions({ draggableCursor: 'crosshair' });

                  GMHelper.addListener(polyline, "rightclick", function (event) {
                     GMHelper.clearClickListener(polyline, "rightclick");

                     GMHelper.clearClickListener(polyline.map, "click");

                     polyline.map.setOptions({ draggableCursor: '' });

                     polyline.setEditable(false);
                     let id = 0;
                     if (seg.length != undefined && seg.length > 0) {

                        if (id == 0) {
                           for (var i = seg.length - 1; i >= 0; i--) {
                              if (seg[i].ducts != undefined || seg[i].ducts != null) {
                                 var ID2 = seg[i].ducts.code;
                                 var ID3 = ID2.toString();
                                 var ID4 = ID3.split('_');
                                 id = parseInt(ID4[1]) + 1;
                                 break;
                              } else {
                                 id = 1;
                                 continue;
                              }
                           }
                        } else {
                           id = id + 1;
                        }
                     }

                     let seg1 = new Segment();// this.design.bluePrint.children[0].segments;

                     seg1.id = Helper.generateObjectId();



                     let microduct = new MicroDuct();
                     microduct.entityType = "MicroDuct";
                     microduct.id = Helper.generateObjectId();
                     var ids = microduct.id.toString();
                     microduct.name = "MicroDuct_" + id;
                     microduct.code = "MicroDuct_" + id;

                     seg1.microduct = microduct;

                     //this.isEditable(true, marker);

                     var coords = polyline.getPath().getArray();

                     let newCoords = new Array<number[]>();

                     coords.forEach(x => {
                        newCoords.push([x.lng(), x.lat()]);
                     });

                     microduct.geometry = new LineString();
                     microduct.geometry.coordinates = GeoHelper.cleanLineCoordinates(newCoords);

                     microduct.measuredLength = GeoHelper.getLength(microduct.geometry.coordinates);



                     let supplier = new Supplier();
                     supplier.currency = parentThis.getdata.currency;
                     supplier.name = parentThis.getdata.name;
                     supplier.stockQty = parentThis.getdata.stockQty;
                     supplier.price = parentThis.getdata.price;
                     supplier.validFrom = parentThis.getdata.validFrom;
                     supplier.validTo = parentThis.getdata.validTo;

                     microduct.suppliers = new Array<Supplier>();
                     microduct.suppliers.push(supplier);

                     //seg1.coordinates = microduct.geometry.coordinates;

                     seg1.microduct = microduct;


                     parentThis.design.bluePrint.children[0].segments.push(seg1);

                     var marker = mapEntitiesHelper.drawMicroDuctLine(microduct, "#000000", 2, false, true);
                     //this.selectedEntity = polyline.data;


                     GMapsHelper.addListener(marker, 'click', (event) => {
                        parentThis.selectedEntity = marker.data;
                     });
                  });
                        }
                     },
                     (err) => {
                        this.masterEntities = new Array<Chamber>();
                     });
               }

               if (entityType == "Pop") {
                  this.masterEntities = null;
                  this.getdata = null;
                  let masterSvc = this.chamberService.getChambers();
                  masterSvc.subscribe(
                     resp => {
                        this.masterEntities = null;
                        if (resp.data != null && resp.data.length > 0) {
                           this.masterEntities = resp.data;
                           for (var i = 0; i <= resp.data.length - 1; i++) {
                              for (var j = 0; j <= resp.data[i].suppliers.length - 1; j++) {
                                 if (resp.data[i].suppliers[j].default != undefined && resp.data[i].suppliers[j].default == "true") {
                                    this.getdata = resp.data[i].suppliers[j];
                                    break;
                                 } else {
                                    continue;
                                 }
                              }

                           }

                           if (seg) {
                              if (seg[0].pops == null) {
                                 seg[0].pops = new Array<PoP>();

                                 let pop = new PoP();
                                 pop.entityType = "PoP";
                                 pop.id = Helper.generateObjectId();
                                 var Uid = pop.id.toString();
                                 pop.name = 'POP_' + Uid.substring(0, 5);
                                 pop.code = pop.name;
                                 pop.geometry = new Point([latLng.lng(), latLng.lat()]);

                                 var marker = mapEntitiesHelper.drawPoint(pop, { url: "images/map-entities/pop.png", anchor: new google.maps.Point(10, 10) }, true, true);

                                 let supplier = new Supplier();
                                 supplier.currency = "dollar";
                                 supplier.name = "supplier1";
                                 supplier.stockQty = 7
                                 supplier.price = 1200;
                                 supplier.validFrom = "2019-12-18";
                                 supplier.validTo = "2019-12-25";

                                 pop.suppliers = new Array<Supplier>();
                                 pop.suppliers.push(supplier);

                                 seg[0].pops.push(pop);
                                 GMapsHelper.addListener(marker, 'click', (event) => {

                                    this.selectedEntity = marker.data;
                                 });
                                 this.isEditable(true, marker);
                              }
                              else {
                                 var popLength = seg[0].pops.length + 1;
                                 let newpop = _.cloneDeep(seg[0].pops[0]);

                                 var LastPopIndex = this.Data.length - 1;
                                 var k = false;

                                 if (this.PopIncrementalID == 0) {
                                    for (var i = seg[0].pops.length - 1; i >= 0; i--) {
                                       //seg[0].splitters[20].code
                                       if (seg[0].pops[i].code != undefined || seg[0].pops[i].code != null) {
                                          var ID2 = seg[0].pops[i].code;
                                          var ID3 = ID2.toString();
                                          var ID4 = ID3.split('_');
                                          this.PopIncrementalID = parseInt(ID4[1]) + 1;
                                          k = true;
                                          break;
                                       } else {
                                          continue;
                                       }
                                    }
                                 } else {
                                    this.PopIncrementalID = this.PopIncrementalID + 1;
                                 }
                                 newpop.id = Helper.generateObjectId();
                                 newpop.code = 'Pop_' + this.PopIncrementalID;
                                 newpop.name = 'Pop_' + this.PopIncrementalID;
                                 newpop.geometry = new Point([latLng.lng(), latLng.lat()]);

                                 var marker = mapEntitiesHelper.drawPoint(newpop, { url: "images/map-entities/pop.png", anchor: new google.maps.Point(10, 10) }, true, true);

                                 seg[0].pops.push(newpop);
                                 GMapsHelper.addListener(marker, 'click', (event) => {

                                    this.selectedEntity = marker.data;
                                 });
                                 this.isEditable(true, marker);
                              }


                           }
                        }
                     },
                     (err) => {
                        this.masterEntities = new Array<Chamber>();
                     });
               }

               if (entityType == "FAT") {


                  this.fatdata = new FAT();
                  this.masterEntities = null;
                  this.getdata = null;
                  let masterSvc = this.fatService.getfats();
                  masterSvc.subscribe(
                     resp => {
                        this.masterEntities = null;
                        if (resp.data != null && resp.data.length > 0) {
                           this.masterEntities = resp.data;
                           for (var i = 0; i <= resp.data.length - 1; i++) {
                              for (var j = 0; j <= resp.data[i].suppliers.length - 1; j++) {
                                 if (resp.data[i].suppliers[j].default != undefined && resp.data[i].suppliers[j].default == "true") {
                                    this.getdata = resp.data[i].suppliers[j];
                                    break;
                                 } else {
                                    continue;
                                 }
                              }

                           }

                           if (seg) {
                              this.CurrentselectedEntity = null;


                              if (seg[0].fats == null) {
                                 seg[0].fats = new Array<FAT>();

                                 this.fatdata.entityType = "FAT";
                                 this.fatdata.id = Helper.generateObjectId();
                                 this.fatdata.code = "Fat_1";
                                 this.fatdata.name = "Fat_1";


                                 this.fatdata.geometry = new Point([latLng.lng(), latLng.lat()]);

                                 var marker = mapEntitiesHelper.drawPoint(this.fatdata, { url: "images/map-entities/FAT.png", anchor: new google.maps.Point(10, 10) }, true, true);
                                 this.CurrentselectedEntity = marker.data;
                                 GMapsHelper.addListener(marker, 'click', (event) => {

                                    this.selectedEntity = marker.data;
                                 });
                                 let supplier = new Supplier();
                                 supplier.currency = this.getdata.currency;
                                 supplier.name = this.getdata.name;
                                 supplier.stockQty = this.getdata.stockQty;
                                 supplier.price = this.getdata.price;
                                 supplier.validFrom = this.getdata.validFrom;
                                 supplier.validTo = this.getdata.validTo;
                                 this.fatdata.suppliers = new Array<Supplier>();
                                 this.fatdata.suppliers.push(supplier);

                                 seg[0].fats.push(this.fatdata);
                                 this.isEditable(true, marker);

                              }
                              else {
                                 this.CurrentselectedEntity = null;
                                 //this.fatdata = null;
                                 this.fatdata = _.cloneDeep(seg[0].fats[0]);
                                 if (this.fatdata == undefined) {
                                    this.fatdata = new FAT();
                                 }
                                 if (this.FatIncrementalID == 0) {
                                    for (var i = seg[0].fats.length - 1; i >= 0; i--) {
                                       if (seg[0].fats[i].code != undefined || seg[0].fats[i].code != null) {
                                          var ID2 = seg[0].fats[i].code;
                                          var ID3 = ID2.toString();
                                          var ID4 = ID3.split('_');
                                          this.FatIncrementalID = parseInt(ID4[1]) + 1;
                                          break;
                                       } else {
                                          continue;
                                       }

                                    }
                                 } else {
                                    this.FatIncrementalID = this.FatIncrementalID + 1;
                                 }
                                 this.fatdata.id = Helper.generateObjectId();
                                 this.fatdata.code = 'Fat_' + this.FatIncrementalID;
                                 this.fatdata.name = 'Fat_' + this.FatIncrementalID;
                                 this.fatdata.geometry = new Point([latLng.lng(), latLng.lat()]);

                                 var marker = mapEntitiesHelper.drawPoint(this.fatdata, { url: "images/map-entities/FAT.png", anchor: new google.maps.Point(10, 10) }, true, true);

                                 this.CurrentselectedEntity = marker.data;
                                 GMapsHelper.addListener(marker, 'click', (event) => {

                                    this.selectedEntity = marker.data;
                                 });
                                 let supplier = new Supplier();
                                 supplier.currency = this.getdata.currency;
                                 supplier.name = this.getdata.name;
                                 supplier.stockQty = this.getdata.stockQty;
                                 supplier.price = this.getdata.price;
                                 supplier.validFrom = this.getdata.validFrom;
                                 supplier.validTo = this.getdata.validTo;
                                 this.fatdata.suppliers = new Array<Supplier>();
                                 this.fatdata.suppliers.push(supplier);

                                 seg[0].fats.push(this.fatdata);
                                 this.isEditable(true, marker);

                              }
                           }
                        }
                     },
                     (err) => {
                        this.masterEntities = new Array<Chamber>();
                     });
               }
               if (entityType == "FDT") {
                  this.fatdata = new FAT();
                  this.masterEntities = null;
                  this.getdata = null;
                  let masterSvc = this.fdtService.getfdts();
                  masterSvc.subscribe(
                     resp => {
                        this.masterEntities = null;
                        if (resp.data != null && resp.data.length > 0) {
                           this.masterEntities = resp.data;
                           for (var i = 0; i <= resp.data.length - 1; i++) {
                              for (var j = 0; j <= resp.data[i].suppliers.length - 1; j++) {
                                 if (resp.data[i].suppliers[j].default != undefined && resp.data[i].suppliers[j].default == "true") {
                                    this.getdata = resp.data[i].suppliers[j];
                                    break;
                                 } else {
                                    continue;
                                 }
                              }

                           }
                           if (seg) {
                              this.CurrentselectedEntity = null;

                              if (seg[0].fdts == null) {
                                 seg[0].fdts = new Array<FDT>();
                                 this.fdt.entityType = "FDT";
                                 this.fdt.id = Helper.generateObjectId();
                                 this.fdt.code = "Fdt_1";
                                 this.fdt.name = "Fdt_1";;

                                 this.fdt.geometry = new Point([latLng.lng(), latLng.lat()]);

                                 var marker = mapEntitiesHelper.drawPoint(this.fdt, { url: "images/map-entities/FDT.png", anchor: new google.maps.Point(10, 10) }, true, true);
                                 this.CurrentselectedEntity = marker.data;
                                 GMapsHelper.addListener(marker, 'click', (event) => {

                                    this.selectedEntity = marker.data;
                                 });
                                 let supplier = new Supplier();
                                 supplier.currency = this.getdata.currency;
                                 supplier.name = this.getdata.name;
                                 supplier.stockQty = this.getdata.stockQty;
                                 supplier.price = this.getdata.price;
                                 supplier.validFrom = this.getdata.validFrom;
                                 supplier.validTo = this.getdata.validTo;
                                 this.fdt.suppliers = new Array<Supplier>();
                                 this.fdt.suppliers.push(supplier);

                                 seg[0].fdts.push(this.fdt);
                                 this.isEditable(true, marker);
                              }
                              else {
                                 this.CurrentselectedEntity = null;

                                 this.fdt = _.cloneDeep(seg[0].fdts[0]);
                                 if (this.fdt == undefined) {
                                    this.fdt = new FDT();
                                 }
                                 if (this.FdtIncrementalID == 0) {
                                    for (var i = seg[0].fdts.length - 1; i >= 0; i--) {
                                       if (seg[0].fdts[i].code != undefined || seg[0].fdts[i].code != null) {
                                          var ID2 = seg[0].fdts[i].code;
                                          var ID3 = ID2.toString();
                                          var ID4 = ID3.split('_');
                                          this.FdtIncrementalID = parseInt(ID4[1]) + 1;
                                          break;
                                       } else {
                                          continue;
                                       }

                                    }
                                 } else {
                                    this.FdtIncrementalID = this.FdtIncrementalID + 1;
                                 }
                                 this.fdt.id = Helper.generateObjectId();
                                 this.fdt.code = 'Fdt_' + this.FdtIncrementalID;
                                 this.fdt.name = 'Fdt_' + this.FdtIncrementalID;
                                 this.fdt.geometry = new Point([latLng.lng(), latLng.lat()]);

                                 var marker = mapEntitiesHelper.drawPoint(this.fdt, { url: "images/map-entities/FDT.png", anchor: new google.maps.Point(10, 10) }, true, true);

                                 this.CurrentselectedEntity = marker.data;
                                 GMapsHelper.addListener(marker, 'click', (event) => {

                                    this.selectedEntity = marker.data;
                                 });
                                 let supplier = new Supplier();
                                 supplier.currency = this.getdata.currency;
                                 supplier.name = this.getdata.name;
                                 supplier.stockQty = this.getdata.stockQty;
                                 supplier.price = this.getdata.price;
                                 supplier.validFrom = this.getdata.validFrom;
                                 supplier.validTo = this.getdata.validTo;
                                 this.fdt.suppliers = new Array<Supplier>();
                                 this.fdt.suppliers.push(supplier);

                                 seg[0].fdts.push(this.fdt);
                                 this.isEditable(true, marker);

                                 //this.isEditable(true, marker);
                              }
                           }
                        }
                     },
                     (err) => {
                        this.masterEntities = new Array<Chamber>();
                     });
               }


            }
         });
      }

   }

   onHover(event) {
      var location = GeoHelper.convertToPosition(event);
      var bounds = new google.maps.LatLngBounds();
      if (this.marker != null) {
         this.marker.setMap(null);
      }
      this.marker = new google.maps.Marker({
         position: location,//this.selectedEntity.geometry.coordinates,//"106.73491570241063, -6.14075054288391",
         cursor: 'pointer',
         icon: 'images/dwnArrow.png',
         map: this.map
      });
      this.marker.setAnimation(google.maps.Animation.BOUNCE);
      bounds.extend(location);
      this.map.fitBounds(bounds);
   }
   onspliterHover(event) {
      let data: any;
      let laln: any;
      let id: any;

      //for (let i = 0; i < this.design.bluePrint.children.length; i++) {
      //    for (let j = 0; j < this.design.bluePrint.children[i].segments.length; j++) {
      //        if (this.design.bluePrint.children[i].segments[j].splitters != undefined) {
      //            data = $.grep(this.design.bluePrint.children[i].segments[j].splitters, function (n) {
      //                if (n.code == event) {
      //                    laln = n.geometry.coordinates;
      //                    return laln;
      //                }
      //            })
      //        }
      //    }
      //}
      for (let i = 0; i < this.design.bluePrint.children.length; i++) {
         for (let j = 0; j < this.design.bluePrint.children[i].children.length; j++) {
            data = $.grep(this.design.bluePrint.children[i].children[j].segments[0].splitters, function (n) {
               return n.geometry.coordinates;
            });
         }
      }

      for (let i = 0; i < data.length; i++) {
         var location = GeoHelper.convertToPosition(data[i].geometry.coordinates);
         //Check if the Location is in Bounds of the Map
         //this.map.getBounds().contains(location);
         var bounds = new google.maps.LatLngBounds();
         if (this.marker != null) {
            this.marker.setMap(null);
         }
         this.marker = new google.maps.Marker({
            position: location,//this.selectedEntity.geometry.coordinates,//"106.73491570241063, -6.14075054288391",
            cursor: 'pointer',
            icon: 'images/dwnArrow.png',
            map: this.map
         });
         this.marker.setAnimation(google.maps.Animation.BOUNCE);
         this.marker.Animation = "Bounce";
         bounds.extend(location);
         this.map.fitBounds(bounds);
      }


      //for (let i = 0; i < this.design.bluePrint.children.length; i++) {
      //    for (let i = 0; i < this.design.bluePrint.children[i].children.length; i++) {
      //        data = $.grep(this.design.bluePrint.children[i].children, function (n) {
      //            if (n.levelId == id) {
      //                return n;
      //            }
      //        })
      //    }
      //}

   }
   onLeave() {
      //this.marker.setAnimation(null);
      this.map.setMap(null);
      this.marker.setMap(null);
      // this.map(null);
   }

   isEditable(value, marker) {
      if (value) {

         GMapsHelper.addListener(marker, "rightclick", (event) => {

            if (marker.draggable)
               marker.setDraggable(false);
            else
               marker.setDraggable(true);

         });

         GMapsHelper.addListener(marker, 'dragend', (event) => {
            var latLng = event.latLng;
            marker.data.geometry.coordinates = [latLng.lng(), latLng.lat()];

            //let index = this.changedSegments.findIndex(x => (x.levelId == marker.data.levelId && x.segmentId == marker.data.segmentId));

            //if (index == -1)
            //   this.changedSegments.push({ levelId: marker.data.levelId, segmentId: marker.data.segmentId });

         });
      }
   }
   ngOnChanges(changes: SimpleChanges) {

      this.selectedEntity = null;

      if (this.design.bluePrint && this.design.bluePrint.children && this.design.bluePrint.children.length > 0) {

         this.entitiesHelper = new EntitiesHelper(this.design.bookingIds, this.design.generatedCodes);

         this.generateMapEntities(this.design.bluePrint);

         this.isEntitiesGenerated = true;

         this.map.setCenter({ lat: this.design.bluePrint.coordinates[1], lng: this.design.bluePrint.coordinates[0] });
      }
      else {
         this.isEntitiesGenerated = false;
      }

      this.des = this.design.bluePrint;
   }

   isAllSelected() {
      const numSelected = this.selectedLayers ? this.selectedLayers.length : 0;
      const numRows = this.layers.length;
      return numSelected === numRows;
   }

   toggleSelection(layer: any) {

      var index = -1;

      if (this.selectedLayers)
         index = this.selectedLayers.findIndex(x => x == layer.id);
      else
         this.selectedLayers = [];

      if (index == -1)
         this.selectedLayers.push(layer.id);
      else
         this.selectedLayers.splice(index, 1);
   }

   masterToggle() {

      if (this.isAllSelected()) {
         this.selectedLayers = [];
      }
      else {
         this.selectedLayers = [];
         this.layers.forEach(x => this.selectedLayers.push(x.id));
      }
   }

   PlotEntity(value) {
      this.DeleteFlag = null;
      this.DeleteFlag = value;
      let ent = this.selectedEntity;
      let seg = this.design.bluePrint.children[0].segments;
      let mapEntitiesHelper = new MapEntitiesHelper(this.map);
      if (seg) {
         if (value == 'Splitter') {
            this.getdata = null;
            let masterSvc = this.splitterService.getSplitters();
            masterSvc.subscribe(
               resp => {
                  this.masterEntities = null;
                  if (resp.data != null && resp.data.length > 0) {
                     this.masterEntities = resp.data;
                     for (var i = 0; i <= resp.data.length - 1; i++) {
                        for (var j = 0; j <= resp.data[i].suppliers.length - 1; j++) {
                           if (resp.data[i].suppliers[j].default != undefined && resp.data[i].suppliers[j].default == "true") {
                              this.getdata = resp.data[i].suppliers[j];
                              break;
                           } else {
                              continue;
                           }
                        }

                     }


                     if (seg) {
                        if (seg[0].splitters == null) {
                           seg[0].splitters = new Array<Splitter>();

                           let splitters = new Splitter();
                           splitters.entityType = "Splitter";
                           splitters.id = Helper.generateObjectId();
                           splitters.code = "Splitter_1";
                           splitters.name = "Splitter_1";

                           splitters.geometry = new Point([ent.geometry.coordinates[0], ent.geometry.coordinates[1]]);

                           var marker = mapEntitiesHelper.drawPoint(splitters, { url: "images/map-entities/spliceclosure.png", anchor: new google.maps.Point(10, 10) }, true, true);

                           let supplier = new Supplier();
                           supplier.currency = this.getdata.currency;
                           supplier.name = this.getdata.name;
                           supplier.stockQty = this.getdata.stockQty;
                           supplier.price = this.getdata.price;
                           supplier.validFrom = this.getdata.validFrom;
                           supplier.validTo = this.getdata.validTo;



                           splitters.suppliers = new Array<Supplier>();
                           splitters.suppliers.push(supplier);

                           seg[0].splitters.push(splitters);

                           GMapsHelper.addListener(marker, 'click', (event) => {

                              this.selectedEntity = marker.data;
                           });
                           this.isEditable(true, marker);
                        }
                        else {

                           let splitters = _.cloneDeep(seg[0].splitters[0]);
                           if (splitters == undefined) {
                              splitters = new Splitter();
                           }
                           var k = false;
                           if (this.SplitterIncrementalID == 0) {
                              for (var i = seg[0].splitters.length - 1; i >= 0; i--) {
                                 //seg[0].splitters[20].code
                                 if (seg[0].splitters[i].code != undefined || seg[0].splitters[i].code != null) {
                                    var ID2 = seg[0].splitters[i].code;
                                    var ID3 = ID2.toString();
                                    var ID4 = ID3.split('_');
                                    this.SplitterIncrementalID = parseInt(ID4[1]) + 1;
                                    k = true;
                                    break;
                                 } else {
                                    continue;
                                 }

                              }
                           } else {
                              this.SplitterIncrementalID = this.SplitterIncrementalID + 1;
                           }

                           splitters.id = Helper.generateObjectId();
                           splitters.code = 'Splitter_' + this.SplitterIncrementalID;
                           splitters.name = 'Splitters_' + this.SplitterIncrementalID;
                           //newPole.name = newPole.code;
                           splitters.geometry = new Point([ent.geometry.coordinates[0], ent.geometry.coordinates[1]]);

                           var marker = mapEntitiesHelper.drawPoint(splitters, { url: "images/map-entities/splitter.png", anchor: new google.maps.Point(10, 10) }, true, true);
                           let supplier = new Supplier();
                           supplier.currency = this.getdata.currency;
                           supplier.name = this.getdata.name;
                           supplier.stockQty = this.getdata.stockQty;
                           supplier.price = this.getdata.price;
                           supplier.validFrom = this.getdata.validFrom;
                           supplier.validTo = this.getdata.validTo;

                           splitters.suppliers = new Array<Supplier>();
                           splitters.suppliers.push(supplier);
                           seg[0].splitters.push(splitters);
                           GMapsHelper.addListener(marker, 'click', (event) => {

                              this.selectedEntity = marker.data;
                           });
                           this.isEditable(true, marker);
                        }
                     }
                  }
               },
               (err) => {
                  this.masterEntities = new Array<Chamber>();
               });
         }
         if (value == 'Splice Closure') {
            this.getdata = null;
            let masterSvc = this.spliceClosureService.getSpliceClosures();
            masterSvc.subscribe(
               resp => {
                  this.masterEntities = null;
                  if (resp.data != null && resp.data.length > 0) {
                     this.masterEntities = resp.data;
                     for (var i = 0; i <= resp.data.length - 1; i++) {
                        for (var j = 0; j <= resp.data[i].suppliers.length - 1; j++) {
                           if (resp.data[i].suppliers[j].default != undefined && resp.data[i].suppliers[j].default == "true") {
                              this.getdata = resp.data[i].suppliers[j];
                              break;
                           } else {
                              continue;
                           }
                        }

                     }

                     if (seg) {
                        this.onEntityTypeChange("SpliceClosure");
                        if (seg[0].spliceClosures == null) {
                           seg[0].spliceClosures = new Array<SpliceClosure>();
                           let spliceclosures = new SpliceClosure();
                           spliceclosures.entityType = "SpliceClosure";
                           spliceclosures.id = Helper.generateObjectId();
                           spliceclosures.name = "SpliceClosure_1"
                           spliceclosures.code = "SpliceClosure_1";
                           spliceclosures.parentId = ent.id;
                           spliceclosures.parentEntityType = ent.entityType;
                           spliceclosures.geometry = new Point([ent.geometry.coordinates[0], ent.geometry.coordinates[1]]);
                           var marker = mapEntitiesHelper.drawPoint(spliceclosures, { url: "images/map-entities/spliceclosure.png", anchor: new google.maps.Point(10, 10) }, true, true);
                           let supplier = new Supplier();
                           supplier.currency = this.getdata.currency;
                           supplier.name = this.getdata.name;
                           supplier.stockQty = this.getdata.stockQty;
                           supplier.price = this.getdata.price;
                           supplier.validFrom = this.getdata.validFrom;
                           supplier.validTo = this.getdata.validTo;
                           spliceclosures.suppliers = new Array<Supplier>();
                           spliceclosures.suppliers.push(supplier);

                           seg[0].spliceClosures.push(spliceclosures);

                           GMapsHelper.addListener(marker, 'click', (event) => {

                              this.selectedEntity = marker.data;
                           });
                           this.isEditable(true, marker);
                        }
                        else {

                           let spliceClosure = _.cloneDeep(seg[0].spliceClosures[0]);
                           if (spliceClosure == undefined) {
                              spliceClosure = new SpliceClosure();
                           }
                           var k = false;
                           if (this.SpliceClosureIncrementalID == 0) {
                              for (var i = seg[0].spliceClosures.length - 1; i >= 0; i--) {
                                 //seg[0].splitters[20].code
                                 if (seg[0].spliceClosures[i].code != undefined || seg[0].spliceClosures[i].code != null) {
                                    var ID2 = seg[0].spliceClosures[i].code;
                                    var ID3 = ID2.toString();
                                    var ID4 = ID3.split('_');
                                    this.SpliceClosureIncrementalID = parseInt(ID4[1]) + 1;
                                    k = true;
                                    break;
                                 } else {
                                    continue;
                                 }

                              }
                           } else {
                              this.SpliceClosureIncrementalID = this.SpliceClosureIncrementalID + 1;
                           }
                           spliceClosure.id = Helper.generateObjectId();
                           spliceClosure.code = 'SpliceClosure_' + this.SpliceClosureIncrementalID;
                           spliceClosure.name = 'SpliceClosure_' + this.SpliceClosureIncrementalID;

                           spliceClosure.geometry = new Point([ent.geometry.coordinates[0], ent.geometry.coordinates[1]]);

                           var marker = mapEntitiesHelper.drawPoint(spliceClosure, { url: "images/map-entities/spliceclosure.png", anchor: new google.maps.Point(10, 10) }, true, true);
                           let supplier = new Supplier();
                           supplier.currency = this.getdata.currency;
                           supplier.name = this.getdata.name;
                           supplier.stockQty = this.getdata.stockQty;
                           supplier.price = this.getdata.price;
                           supplier.validFrom = this.getdata.validFrom;
                           supplier.validTo = this.getdata.validTo;
                           spliceClosure.suppliers = new Array<Supplier>();
                           spliceClosure.suppliers.push(supplier);
                           seg[0].spliceClosures.push(spliceClosure);
                           GMapsHelper.addListener(marker, 'click', (event) => {

                              this.selectedEntity = marker.data;
                           });
                           this.isEditable(true, marker);
                        }

                     }
                  }
               },
               (err) => {
                  this.masterEntities = new Array<SpliceClosure>();
               });
         }
         if (value == 'odf') {
            this.masterEntities = null;
            this.getdata = null;
            let masterSvc = this.odfService.getODFs();
            masterSvc.subscribe(
               resp => {
                  this.masterEntities = null;
                  if (resp.data != null && resp.data.length > 0) {
                     this.masterEntities = resp.data;
                     for (var i = 0; i <= resp.data.length - 1; i++) {
                        for (var j = 0; j <= resp.data[i].suppliers.length - 1; j++) {
                           if (resp.data[i].suppliers[j].default != undefined && resp.data[i].suppliers[j].default == "true") {
                              this.getdata = resp.data[i].suppliers[j];
                              break;
                           } else {
                              continue;
                           }
                        }

                     }


                     if (seg) {
                        if (seg[0].odfs == null) {
                           seg[0].odfs = new Array<ODF>();

                           let odf = new ODF();
                           odf.entityType = "ODF";
                           odf.id = Helper.generateObjectId();
                           var Uid = odf.id.toString();
                           odf.code = 'ODF_1';
                           odf.name = odf.code;
                           odf.parentId = ent.id;
                           odf.parentEntityType = ent.entityType;
                           odf.geometry = new Point([ent.geometry.coordinates[0], ent.geometry.coordinates[1]]);

                           var marker = mapEntitiesHelper.drawPoint(odf, { url: "images/map-entities/odf.png", anchor: new google.maps.Point(10, 10) }, true, true);



                           let supplier = new Supplier();
                           supplier.currency = this.getdata.currency;
                           supplier.name = this.getdata.name;
                           supplier.stockQty = this.getdata.stockQty;
                           supplier.price = this.getdata.price;
                           supplier.validFrom = this.getdata.validFrom;
                           supplier.validTo = this.getdata.validTo;

                           odf.suppliers = new Array<Supplier>();
                           odf.suppliers.push(supplier);

                           seg[0].odfs.push(odf);

                           GMapsHelper.addListener(marker, 'click', (event) => {

                              this.selectedEntity = marker.data;
                           });
                           this.isEditable(true, marker);
                        }
                        else {

                           let odfss = _.cloneDeep(seg[0].odfs[0]);
                           if (odfss == undefined) {
                              odfss = new ODF();
                           }

                           var k = false;
                           if (this.OdfIncrementalID == 0) {
                              for (var i = seg[0].odfs.length - 1; i >= 0; i--) {
                                 //seg[0].splitters[20].code
                                 if (seg[0].odfs[i].code != undefined || seg[0].odfs[i].code != null) {
                                    var ID2 = seg[0].odfs[i].code;
                                    var ID3 = ID2.toString();
                                    var ID4 = ID3.split('_');
                                    this.OdfIncrementalID = parseInt(ID4[1]) + 1;
                                    k = true;
                                    break;
                                 } else {
                                    continue;
                                 }

                              }
                           } else {
                              this.OdfIncrementalID = this.OdfIncrementalID + 1;
                           }
                           odfss.id = Helper.generateObjectId();
                           odfss.code = 'Odf_' + this.OdfIncrementalID;
                           odfss.name = 'Odf_' + this.OdfIncrementalID;
                           odfss.geometry = new Point([ent.geometry.coordinates[0], ent.geometry.coordinates[1]]);

                           var marker = mapEntitiesHelper.drawPoint(odfss, { url: "images/map-entities/odf.png", anchor: new google.maps.Point(10, 10) }, true, true);
                           let supplier = new Supplier();
                           supplier.currency = this.getdata.currency;
                           supplier.name = this.getdata.name;
                           supplier.stockQty = this.getdata.stockQty;
                           supplier.price = this.getdata.price;
                           supplier.validFrom = this.getdata.validFrom;
                           supplier.validTo = this.getdata.validTo;

                           odfss.suppliers = new Array<Supplier>();
                           odfss.suppliers.push(supplier);
                           seg[0].odfs.push(odfss);
                           GMapsHelper.addListener(marker, 'click', (event) => {

                              this.selectedEntity = marker.data;
                           });
                           this.isEditable(true, marker);
                        }

                     }
                  }
               },
               (err) => {
                  this.masterEntities = new Array<ODF>();
               });
         }
      }
   }
   refreshLayers() {

      if (this.design.bluePrint) {

         if (this.isEntitiesGenerated == false) {
            this.generateMapEntities(this.design.bluePrint);
            this.isEntitiesGenerated = true;
            this.map.setCenter({ lat: this.design.bluePrint.coordinates[1], lng: this.design.bluePrint.coordinates[0] });
         }
      }

      this.toggleEntities(this.design.bluePrint);
   }

   refreshBlueprint() {

      $("#ajax-loading").show();

      this.entitiesHelper = new EntitiesHelper(this.design.bookingIds, this.design.generatedCodes);

      this.changedSegments.forEach(x => {

         this.refreshSegment(this.design.bluePrint, x.levelId, x.segmentId);

      });


      this.bomHelper.generateBOQ(this.design);

      $("#ajax-loading").hide();
   }

   refreshSegment(geoNode: GeoNode, levelId, segmentId) {

      if (geoNode.segments) {

         let segment = geoNode.segments.find(x => x.id == segmentId);

         if (segment) {

            if (segment.chambers && segment.chambers.length > 0) {

               segment.coordinates = segment.cable.geometry.coordinates;

               this.mapEntitiesHelper.removeMapObjects(segment.chambers);

               segment.chambers = this.entitiesHelper.createChambers(segment.chambers[0], 100, segment, 10, 10);

               this.plotPointEntities(segment.chambers, "Chamber", levelId, segmentId, true, true);
            }

            if (segment.poles && segment.poles.length > 0) {

               segment.coordinates = segment.cable.geometry.coordinates;

               this.mapEntitiesHelper.removeMapObjects(segment.poles);

               segment.poles = this.entitiesHelper.createPoles(segment.poles[0], 100, segment, 10, 10);
               this.plotPointEntities(segment.poles, "Pole", levelId, segmentId, true, true);
            }

            return false;
         }
      }

      if (geoNode.children && geoNode.children.length > 0)
         geoNode.children.forEach(g => {
            this.refreshSegment(g, g.id, segmentId);
         });
   }

   toggleEntities(group: GeoNode) {

      if (group.children) {
         group.children.forEach(x => {

            if (x.levelName == "homepasses") {
               //this.toggleEntity(x, this.selectedLayers.includes("Homepass"));
               this.setEntitiesVisible(x, this.selectedLayers.includes("Homepass"));
            }

            //if (x.level == "Feeder") {
            //    this.toggleEntity(x, this.selectedLayers.includes("Splitter"));
            //}
         });
      }

      if (group.segments)
         group.segments.forEach(x => {

            this.setEntitiesVisible(x.cable, this.selectedLayers.includes("Cable"));
            this.setEntitiesVisible(x.ducts, this.selectedLayers.includes("Duct"));
            this.setEntitiesVisible(x.microduct, this.selectedLayers.includes("MicroDuct"));

            this.setEntitiesVisible(x.chambers, this.selectedLayers.includes("Chamber"));

            this.setEntitiesVisible(x.odfs, this.selectedLayers.includes("ODF"));

            this.setEntitiesVisible(x.poles, this.selectedLayers.includes("Pole"));

            this.setEntitiesVisible(x.splitters, this.selectedLayers.includes("Splitter"));

            this.setEntitiesVisible(x.spliceClosures, this.selectedLayers.includes("SpliceClosure"));
            this.setEntitiesVisible(x.pops, this.selectedLayers.includes("PoP"));

         });

      if (group.children && group.children.length > 0)
         group.children.forEach(g => {
            this.toggleEntities(g);
         });

   }

   setEntitiesVisible(entities, isVisible) {

      if (entities) {
         if (entities.length > 0) {
            entities.forEach(x => {
               if (x && x['mapObject']) {
                  x['mapObject'].setVisible(isVisible);
               }
            });
         }
         else {
            if (entities['mapObject']) {
               entities['mapObject'].setVisible(isVisible);
            }
         }
      }
   }

   generateMapEntities(group: GeoNode) {

      let levelId = group.id;

      if (group.children)
         group.children.forEach(x => {

            if (x.levelName == "homepasses") {
               //x['entityType'] = "Homepass";
               //let entityIcon = this.entityIcons.find(i => i.entityType == 'Homepass');
               //this.drawPoint(x, entityIcon.icon, false);

               this.plotPointEntities(x, "Homepass", levelId, x.id, true, true);
            }
            //else {
            //    x['entityType'] = "Splitter";
            //    let entityIcon = this.entityIcons.find(i => i.entityType == 'Splitter');
            //    this.drawPoint(x, entityIcon.icon, true);
            //}
         });

      if (group.segments)
         group.segments.forEach(x => {

            this.plotLineEntities(x.cable, "Cable", levelId, x.id, true, true);

            this.plotLineEntities(x.ducts, "Duct", levelId, x.id, true, true);

            this.plotLineEntities(x.microduct, "MicroDuct", levelId, x.id, true, true);

            this.plotPointEntities(x.chambers, "Chamber", levelId, x.id, true, true);

            this.plotPointEntities(x.odfs, "ODF", levelId, x.id, true, true);

            this.plotPointEntities(x.poles, "Pole", levelId, x.id, true, true);

            this.plotPointEntities(x.splitters, "Splitter", levelId, x.id, true, true);

            this.plotPointEntities(x.spliceClosures, "SpliceClosure", levelId, x.id, true, true);

            this.plotPointEntities(x.pops, "PoP", levelId, x.id, true, true);

            this.plotPointEntities(x.fats, "FAT", levelId, x.id, true, true);
            this.plotPointEntities(x.fdts, "FDT", levelId, x.id, true, true);

         });

      if (group.children && group.children.length > 0)
         group.children.forEach(g => {
            this.generateMapEntities(g);
         });

   }

   ExportTOPdf() {
      var data = window.document.getElementById('designMap');
      html2canvas(data, { allowTaint: true, useCORS: true }).then(canvas => {
         const contentDataURL = canvas.toDataURL('image/jpeg')
         let pdf = new jspdf('landscape'); // A4 size page of PDF  
         pdf.addImage(contentDataURL, 'JPEG', 10, 10, 280, 150, null, 'FAST');
         pdf.save('MYPdf.pdf'); // Generated PDF
      });
   }

   plotPointEntities(entities: any, entityType: string, levelId: string, segmentId: string, isEditable: boolean, attachMapObject: boolean) {

      let entityIcon = this.entityIcons.find(i => i.entityType == entityType);

      if (entities) {

         if (entities.length > 0) {
            entities.forEach(x => {
               this.plotPointEntity(x, entityIcon.icon, levelId, segmentId, isEditable, attachMapObject);
            });
         }
         else {
            this.plotPointEntity(entities, entityIcon.icon, levelId, segmentId, isEditable, attachMapObject);
         }
      }
   }

   plotPointEntity(entity: any, entityIcon: any, levelId: string, segmentId: string, isEditable: boolean, attachMapObject: boolean) {

      if (entity) {

         entity["levelId"] = levelId;
         entity["segmentId"] = segmentId;

         let marker = this.mapEntitiesHelper.drawPoint(entity, entityIcon, isEditable, attachMapObject);

         GMapsHelper.addListener(marker, 'click', (event) => {
            if (marker.data.levelName == "homepasses") {
               let homepass = this.design.homepasses.find(x => x.id == marker.data.id);
               if (homepass) {
                  this.selectedEntity = homepass;
                  this.selectedEntity["entityType"] = "Homepass";
               }
            }
            else
               this.selectedEntity = marker.data;
            if (this.selectedEntity.entityType == "Splitter") {
               this.entityType = this.selectedEntity.code;
               for (let i = 0; i < this.design.bluePrint.children.length; i++) {
                  for (let j = 0; j < this.design.bluePrint.children[i].segments.length; j++) {
                     for (let k = 0; k < this.design.bluePrint.children[i].segments[j].splitters.length; j++) {
                        if (this.design.bluePrint.children[i].segments[j].splitters[k].code == this.entityType) {
                           this.filterResult = this.design.bluePrint.children[i].children;
                        }
                     }
                  }
               }
            }

            //if (this.selectedEntity.entityType == "Splitter") {
            //    this.entityType = this.selectedEntity.code;
            //    for (let i = 0; i < this.design.bluePrint.children.length; i++) {
            //        if (this.design.bluePrint.children[i].id == this.selectedEntity.levelId) {
            //            this.filterResult = this.design.bluePrint.children[i].children;
            //        }
            //    }
            //}
         });

         if (isEditable) {

            GMapsHelper.addListener(marker, "rightclick", (event) => {

               if (marker.draggable)
                  marker.setDraggable(false);
               else
                  marker.setDraggable(true);

            });

            GMapsHelper.addListener(marker, 'dragend', (event) => {
               var latLng = event.latLng;
               marker.data.geometry.coordinates = [latLng.lng(), latLng.lat()];

               //let index = this.changedSegments.findIndex(x => (x.levelId == marker.data.levelId && x.segmentId == marker.data.segmentId));

               //if (index == -1)
               //   this.changedSegments.push({ levelId: marker.data.levelId, segmentId: marker.data.segmentId });

            });
         }
      }
   }

   plotLineEntities(entities: any, entityType: string, levelId: string, segmentId: string, isEditable: boolean, attachMapObject: boolean) {

      if (entities) {
         if (entities.length > 0) {
            entities.forEach(x => {
               this.plotLineEntity(x, levelId, segmentId, isEditable, attachMapObject);
            });
         }
         else {
            this.plotLineEntity(entities, levelId, segmentId, isEditable, attachMapObject);
         }
      }
   }

   plotLineEntity(entity: any, levelId: string, segmentId: string, isEditable: boolean, attachMapObject: boolean) {

      if (entity) {

         entity["levelId"] = levelId;
         entity["segmentId"] = segmentId;

         let polyLine = this.mapEntitiesHelper.drawLine(entity, "#000", 2, isEditable, attachMapObject);

         GMapsHelper.addListener(polyLine, 'click', (event) => {
            this.selectedEntity = polyLine.data;
         });

         if (isEditable) {

            GMapsHelper.addListener(polyLine, "rightclick", (event) => {

               if (polyLine.editable)
                  polyLine.setEditable(false);
               else
                  polyLine.setEditable(true);
            });

            GMapsHelper.addListener(polyLine.getPath(), 'set_at', () => {

               var coords = polyLine.getPath().getArray();

               let newCoords = new Array<number[]>();

               coords.forEach(x => {
                  newCoords.push([x.lng(), x.lat()]);
               });


               polyLine.data.geometry.coordinates = GeoHelper.cleanLineCoordinates(newCoords);

               polyLine.data.measuredLength = GeoHelper.getLength(polyLine.data.geometry.coordinates);

               let index = this.changedSegments.findIndex(x => (x.levelId == polyLine.data.levelId && x.segmentId == polyLine.data.segmentId));

               if (index == -1)
                  this.changedSegments.push({ levelId: polyLine.data.levelId, segmentId: polyLine.data.segmentId });

            });
         }
      }
   }

   deleteEntity() {
      let seg = this.design.bluePrint.children[0].segments;
      let segments = this.design.bluePrint.children;
      if (this.selectedEntity.entityType == 'Chamber') {
         for (var i = seg[0].splitters.length - 1; i >= 0; i--) {
            if (seg[0].splitters[i].parentId == this.selectedEntity.id) {
               this.mapEntitiesHelper.removeMapObjects(seg[0].splitters[i]);
            }
         }
         for (var i = seg[0].spliceClosures.length - 1; i >= 0; i--) {
            if (seg[0].spliceClosures[i].parentId == this.selectedEntity.id) {
               this.mapEntitiesHelper.removeMapObjects(seg[0].spliceClosures[i]);
            }
         }
      }
      if (this.selectedEntity.entityType == 'PoP') {
         for (var i = seg[0].pops.length - 1; i >= 0; i--) {
            if (seg[0].pops[i].parentId == this.selectedEntity.id) {
               this.mapEntitiesHelper.removeMapObjects(seg[0].pops[i]);
            }
         }
      }
      if (this.selectedEntity.entityType == 'Cable') {
         for (var i = 0; i <= segments.length - 1; i++) {
            //let S = this.design.bluePrint.children[i].segments.length;
            for (var j = 0; j <= segments[i].segments.length-1; j++) {
               if (this.design.bluePrint.children[i].segments[j].cable != undefined) {
                  if (this.design.bluePrint.children[i].segments[j].cable.code == this.selectedEntity.code) {
                     //this.design.bluePrint.children[i].segments.findIndex(j);
                     if (this.design.bluePrint.children[i].segments[j].poles != undefined) {
                        var Poles = this.design.bluePrint.children[i].segments[j].poles.length;
                        if (Poles > 0) {
                           for (var k = 0; k <= Poles - 1; k++) {
                              this.mapEntitiesHelper.removeMapObjects(this.design.bluePrint.children[i].segments[j].poles[k]);
                           }
                        }
                     }
                     if (this.design.bluePrint.children[i].segments[j].chambers != undefined) {
                        var Chambers = this.design.bluePrint.children[i].segments[j].chambers.length;
                        if (Chambers > 0) {
                           for (var k = 0; k <= Chambers - 1; k++) {
                              this.mapEntitiesHelper.removeMapObjects(this.design.bluePrint.children[i].segments[j].chambers[k]);
                           }
                        }
                     }
                     if (this.design.bluePrint.children[i].segments[j].homepasses != undefined) {
                        var HomePasses = this.design.bluePrint.children[i].segments[j].homepasses.length;
                        if (HomePasses > 0) {
                           for (var k = 0; k <= HomePasses - 1; k++) {
                              this.mapEntitiesHelper.removeMapObjects(this.design.bluePrint.children[i].segments[j].homepasses[k]);
                           }
                        }
                     }
                     if (this.design.bluePrint.children[i].segments[j].odfs != undefined) {
                        var ODFS = this.design.bluePrint.children[i].segments[j].odfs.length;
                        if (ODFS > 0) {
                           for (var k = 0; k <= ODFS - 1; k++) {
                              this.mapEntitiesHelper.removeMapObjects(this.design.bluePrint.children[i].segments[j].odfs[k]);
                           }
                        }
                     }
                     if (this.design.bluePrint.children[i].segments[j].pops != undefined) {
                        var POPS = this.design.bluePrint.children[i].segments[j].pops.length;
                        if (POPS > 0) {
                           for (var k = 0; k <= POPS - 1; k++) {
                              this.mapEntitiesHelper.removeMapObjects(this.design.bluePrint.children[i].segments[j].pops[k]);
                           }
                        }
                     }
                     if (this.design.bluePrint.children[i].segments[j].spliceClosures != undefined) {
                        var SpliceClosures = this.design.bluePrint.children[i].segments[j].spliceClosures.length;
                        if (SpliceClosures > 0) {
                           for (var k = 0; k <= SpliceClosures - 1; k++) {
                              this.mapEntitiesHelper.removeMapObjects(this.design.bluePrint.children[i].segments[j].spliceClosures[k]);
                           }
                        }
                     }
                     if (this.design.bluePrint.children[i].segments[j].splitters != undefined) {
                        var Splitters = this.design.bluePrint.children[i].segments[j].splitters.length;
                        if (Splitters > 0) {
                           for (var k = 0; k <= Splitters - 1; k++) {
                              this.mapEntitiesHelper.removeMapObjects(this.design.bluePrint.children[i].segments[j].splitters[k]);
                           }
                        }
                     }
                     //this.design.bluePrint.children.splice(i, 1);
                     this.design.bluePrint.children[i].segments.splice(j, 1);
                     this.mapEntitiesHelper.removeMapObjects(this.selectedEntity);
                     return false;
                  }
               }

            }
         }
      }
      
      this.mapEntitiesHelper.removeMapObjects(this.selectedEntity);
      if (this.selectedEntity.entityType == "MicroDuct" || this.selectedEntity.entityType == "Duct") {        
         GeoNodeHelper.deleteLineSegmentEntity(this.design.bluePrint, this.selectedEntity.id, this.selectedEntity.entityType);
      } else {
         GeoNodeHelper.deleteSegmentEntity(this.design.bluePrint, this.selectedEntity.id, this.selectedEntity.entityType);
      }
      
      this.selectedEntity = null;

      this.refreshBlueprint();
   }

   stringify(object: any) {
      return JSON.stringify(object);
   }
   onEntityTypeChange(entityType: string) {

      if (this.entitySettings.entityName == 'Homepass') {
         this.entitySettings.dataSource = 'automatic';
      }
      else {
         this.entitySettings.chambers = null;
         this.entitySettings.odfs = null;
         this.entitySettings.poles = null;
         this.entitySettings.spliceClosures = null;
         this.entitySettings.splitters = null;

         this.initializeEntities();

         this.loadMasterEntities(entityType);
      }

   }
   initializeEntities() {

      switch (this.entitySettings.entityName) {
         case "Chamber":

            if (this.entitySettings.chambers == null)
               this.entitySettings.chambers = new Array<Chamber>();

            this.entities = this.entitySettings.chambers;
            break;
         case "ODF":

            if (this.entitySettings.odfs == null)
               this.entitySettings.odfs = new Array<ODF>();

            this.entities = this.entitySettings.odfs;
            break;
         case "Pole":

            if (this.entitySettings.poles == null)
               this.entitySettings.poles = new Array<Pole>();

            this.entities = this.entitySettings.poles;
            break;
         case "SpliceClosure":

            if (this.entitySettings.spliceClosures == null)
               this.entitySettings.spliceClosures = new Array<SpliceClosure>();

            this.entities = this.entitySettings.spliceClosures;
            break;
         case "Splitter":

            if (this.entitySettings.splitters == null)
               this.entitySettings.splitters = new Array<Splitter>();

            this.entities = this.entitySettings.splitters;
            break;
         case "Pop":

            if (this.entitySettings.pops == null)
               this.entitySettings.pops = new Array<PoP>();

            this.entities = this.entitySettings.pops;
            break;
      }
   }
   loadMasterEntities(entityType: string) {

      let masterSvc = null;

      switch (entityType) {
         case "Chamber":
            masterSvc = this.chamberService.getChambers();
            break;
         case "ODF":
            masterSvc = this.odfService.getODFs();
            break;
         case "Pole":
            masterSvc = this.poleService.getPoles();
            break;
         case "SpliceClosure":
            masterSvc = this.spliceClosureService.getSpliceClosures();
            break;
         case "Splitter":
            masterSvc = this.splitterService.getSplitters();
            break;
         case "Pop":
            masterSvc = this.splitterService.getSplitters();
            break;
         default:
            masterSvc = this.splitterService.getSplitters();
            break;
      }
      this.Flag = entityType;
      masterSvc.subscribe(
         resp => {
            this.masterEntities = null;
            if (resp.data != null && resp.data.length > 0) {
               this.masterEntities = resp.data;
            }
         },
         (err) => {
            this.masterEntities = new Array<Chamber>();
         });
   }
   PlotPostEntities() {
      let ent = this.selectedEntity;
      let SelectedValue = null;
      SelectedValue = $('#designEntity').val();
      if (SelectedValue != 0) {
         let getdata = $.grep(this.masterEntities, function (l) {
            return l.id == SelectedValue;
         })
         let ent = this.selectedEntity;
         let seg = this.design.bluePrint.children[0].segments;
         let mapEntitiesHelper = new MapEntitiesHelper(this.map);
         if (seg) {
            if (this.Flag == 'Splitter') {
               if (seg[0].splitters == null) {
                  seg[0].splitters = new Array<Splitter>();

                  let splitters = new Splitter();
                  splitters.entityType = "Splitter";
                  splitters.id = Helper.generateObjectId();
                  splitters.code = this.entitiesHelper.generatedCodes('Splitter');
                  splitters.name = splitters.code;
                  splitters.parentId = ent.id;
                  splitters.parentEntityType = ent.entityType;

                  splitters.geometry = new Point([ent.geometry.coordinates[0], ent.geometry.coordinates[1]]);

                  var marker = mapEntitiesHelper.drawPoint(splitters, { url: "images/map-entities/spliceclosure.png", anchor: new google.maps.Point(10, 10) }, true, true);

                  splitters.suppliers = new Array<Supplier>();
                  splitters.suppliers.push(getdata.suppliers);

                  seg[0].splitters.push(splitters);

                  GMapsHelper.addListener(marker, 'click', (event) => {

                     this.selectedEntity = marker.data;
                  });
                  this.isEditable(true, marker);
               }
               else {

                  let splitters = _.cloneDeep(seg[0].splitters[0]);

                  var k = false;
                  if (this.SplitterIncrementalID == 0) {
                     for (var i = seg[0].splitters.length - 1; i >= 0; i--) {
                        //seg[0].splitters[20].code
                        if (seg[0].splitters[i].code != undefined || seg[0].splitters[i].code != null) {
                           var ID2 = seg[0].splitters[i].code;
                           var ID3 = ID2.toString();
                           var ID4 = ID3.split('_');
                           this.SplitterIncrementalID = parseInt(ID4[1]) + 1;
                           k = true;
                           break;
                        } else {
                           continue;
                        }

                     }
                  } else {
                     this.SplitterIncrementalID = this.SplitterIncrementalID + 1;
                  }

                  splitters.id = Helper.generateObjectId();
                  splitters.code = 'Splitter_' + this.SplitterIncrementalID;
                  splitters.name = 'Splitters_' + this.SplitterIncrementalID;

                  splitters.parentId = ent.id;
                  splitters.parentEntityType = ent.entityType;
                  //newPole.name = newPole.code;
                  splitters.geometry = new Point([ent.geometry.coordinates[0], ent.geometry.coordinates[1]]);

                  var marker = mapEntitiesHelper.drawPoint(splitters, { url: "images/map-entities/splitter.png", anchor: new google.maps.Point(10, 10) }, true, true);

                  seg[0].splitters.push(splitters);
                  splitters.suppliers = new Array<Supplier>();
                  splitters.suppliers.push(getdata.suppliers);

                  seg[0].splitters.push(splitters);
                  GMapsHelper.addListener(marker, 'click', (event) => {

                     this.selectedEntity = marker.data;
                  });
                  this.isEditable(true, marker);
               }
            }
            if (this.Flag == 'SpliceClosure') {
               if (seg) {
                  if (seg[0].spliceClosures == null) {
                     seg[0].spliceClosures = new Array<SpliceClosure>();

                     let spliceclosures = new SpliceClosure();
                     spliceclosures.entityType = "SpliceClosure";
                     spliceclosures.id = Helper.generateObjectId();
                     var Uid = spliceclosures.id.toString();
                     spliceclosures.code = this.entitiesHelper.generatedCodes('SpliceClosure');
                     spliceclosures.name = spliceclosures.code;
                     spliceclosures.parentId = ent.id;
                     spliceclosures.parentEntityType = ent.entityType;
                     spliceclosures.geometry = new Point([ent.geometry.coordinates[0], ent.geometry.coordinates[1]]);

                     var marker = mapEntitiesHelper.drawPoint(spliceclosures, { url: "images/map-entities/spliceclosure.png", anchor: new google.maps.Point(10, 10) }, true, true);

                     spliceclosures.suppliers = new Array<Supplier>();
                     spliceclosures.suppliers.push(getdata.suppliers);

                     seg[0].spliceClosures.push(spliceclosures);

                     GMapsHelper.addListener(marker, 'click', (event) => {

                        this.selectedEntity = marker.data;
                     });
                     this.isEditable(true, marker);
                  }
                  else {

                     let spliceClosure = _.cloneDeep(seg[0].spliceClosures[0]);
                     var k = false;
                     if (this.SpliceClosureIncrementalID == 0) {
                        for (var i = seg[0].spliceClosures.length - 1; i >= 0; i--) {
                           if (seg[0].spliceClosures[i].code != undefined || seg[0].spliceClosures[i].code != null) {
                              var ID2 = seg[0].spliceClosures[i].code;
                              var ID3 = ID2.toString();
                              var ID4 = ID3.split('_');
                              this.SpliceClosureIncrementalID = parseInt(ID4[1]) + 1;
                              k = true;
                              break;
                           } else {
                              continue;
                           }

                        }
                     }
                     else {
                        this.SpliceClosureIncrementalID = this.SpliceClosureIncrementalID + 1;
                     }


                     spliceClosure.id = Helper.generateObjectId();
                     spliceClosure.code = 'SpliceClosure_' + this.SpliceClosureIncrementalID;
                     spliceClosure.name = 'SpliceClosure_' + this.SpliceClosureIncrementalID;
                     spliceClosure.parentId = ent.id;
                     spliceClosure.parentEntityType = ent.entityType;
                     spliceClosure.geometry = new Point([ent.geometry.coordinates[0], ent.geometry.coordinates[1]]);

                     var marker = mapEntitiesHelper.drawPoint(spliceClosure, { url: "images/map-entities/spliceclosure.png", anchor: new google.maps.Point(10, 10) }, true, true);
                     spliceClosure.suppliers = new Array<Supplier>();
                     spliceClosure.suppliers.push(getdata.suppliers);

                     //seg[0].spliceClosures.push(spliceClosure);
                     seg[0].spliceClosures.push(spliceClosure);


                     GMapsHelper.addListener(marker, 'click', (event) => {

                        this.selectedEntity = marker.data;
                     });
                     this.isEditable(true, marker);
                  }

               }
            }
            if (this.Flag == 'odf') {
               if (seg) {
                  if (seg[0].odfs == null) {
                     seg[0].odfs = new Array<ODF>();

                     let odf = new ODF();
                     odf.entityType = "ODF";
                     odf.id = Helper.generateObjectId();
                     var Uid = odf.id.toString();
                     odf.code = this.entitiesHelper.generatedCodes('Odf');
                     odf.name = odf.code;
                     odf.parentId = ent.id;
                     odf.parentEntityType = ent.entityType;
                     odf.geometry = new Point([ent.geometry.coordinates[0], ent.geometry.coordinates[1]]);

                     var marker = mapEntitiesHelper.drawPoint(odf, { url: "images/map-entities/odf.png", anchor: new google.maps.Point(10, 10) }, true, true);
                     odf.suppliers = new Array<Supplier>();
                     odf.suppliers.push(getdata.suppliers);

                     seg[0].odfs.push(odf);

                     GMapsHelper.addListener(marker, 'click', (event) => {

                        this.selectedEntity = marker.data;
                     });
                     this.isEditable(true, marker);
                  }
                  else {

                     let odfss = _.cloneDeep(seg[0].odfs[0]);
                     var odfssLength = seg[0].odfs.length + 1;
                     var k = false;
                     if (this.OdfIncrementalID == 0) {
                        for (var i = seg[0].odfs.length - 1; i >= 0; i--) {
                           //seg[0].splitters[20].code
                           if (seg[0].odfs[i].code != undefined || seg[0].odfs[i].code != null) {
                              var ID2 = seg[0].odfs[i].code;
                              var ID3 = ID2.toString();
                              var ID4 = ID3.split('_');
                              this.OdfIncrementalID = parseInt(ID4[1]) + 1;
                              break;
                           } else {
                              continue;
                           }

                        }
                     }
                     else {
                        this.OdfIncrementalID = this.OdfIncrementalID + 1;
                     }



                     odfss.id = Helper.generateObjectId();
                     odfss.code = 'Odf_' + this.OdfIncrementalID;
                     odfss.name = 'Odf_' + this.OdfIncrementalID;
                     odfss.geometry = new Point([ent.geometry.coordinates[0], ent.geometry.coordinates[1]]);
                     odfss.parentId = ent.id;
                     odfss.parentEntityType = ent.entityType;
                     var marker = mapEntitiesHelper.drawPoint(odfss, { url: "images/map-entities/odf.png", anchor: new google.maps.Point(10, 10) }, true, true);
                     odfss.suppliers = new Array<Supplier>();
                     odfss.suppliers.push(getdata.suppliers);
                     seg[0].odfs.push(odfss);
                     GMapsHelper.addListener(marker, 'click', (event) => {

                        this.selectedEntity = marker.data;
                     });
                     this.isEditable(true, marker);
                  }

               }
            }
            if (this.Flag == 'Chamber') {

               let supplier = new Supplier();
               supplier.currency = getdata[0].currency;
               supplier.name = getdata[0].name;
               supplier.stockQty = getdata[0].stockQty;
               supplier.price = getdata[0].price;
               supplier.validFrom = getdata[0].validFrom;
               supplier.validTo = getdata[0].validTo;

               this.chamber.suppliers = new Array<Supplier>();
               //seg[0].chambers = new Array<Chamber>();
               //this.chamber.suppliers = new Array<Supplier>();
               this.chamber.suppliers.push(supplier);

               seg[0].chambers.push(this.chamber);


            }
            if (this.Flag == 'Pole') {
               let supplier = new Supplier();
               supplier.currency = getdata[0].currency;
               supplier.name = getdata[0].name;
               supplier.stockQty = getdata[0].stockQty;
               supplier.price = getdata[0].price;
               supplier.validFrom = getdata[0].validFrom;
               supplier.validTo = getdata[0].validTo;

               this.poles.suppliers = new Array<Supplier>();
               this.poles.suppliers.push(supplier);
               seg[0].poles.push(this.poles);
            }
            $("#exampleModalCenter").modal("hide");
         }
      }
      else {
         this.helper.showAlertMessage("Please select template", "error");
      }
   }
   ClearEntities() {
      if (this.DeleteFlag == null) {
         this.mapEntitiesHelper.removeMapObjects(this.CurrentselectedEntity);
      }

   }

}
