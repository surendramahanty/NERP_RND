import { Injectable } from '@angular/core';
import { Design, CableSettings } from '../models/design';
import { HomepassService } from '../../homepasses/services/homepass.service';
import { Helper } from '../../common/helper';
import { GeoNode, Segment } from '../../common/geo/geoNode';
import { Homepass } from '../../homepasses/models/homepass';
import { HttpParams, HttpClient } from '@angular/common/http';
import { ServiceResponse } from '../../common/models/serviceResponse';
import { Splitter } from '../../entities/models/splitter';
import { GeoHelper } from '../../common/geo/geoHelper';
import { AppConfig } from '../../app.config';
import { Cable } from '../../entities/models/cable';
import { EntitiesHelper } from './entities.helper';

declare var $: any;

@Injectable()
export class BackboneHelper {

   private design: Design;
   private entitiesHelper: EntitiesHelper;

   constructor(
      private httpClient: HttpClient,
      private appConfig: AppConfig,
      private homepassService: HomepassService,
      private helper: Helper) { }

   async generateBackboneDesign(design: Design) {

      this.design = design;
      this.entitiesHelper = new EntitiesHelper(design.bookingIds, design.generatedCodes);

      let status = false;

      try {

         this.helper.log(this.design, "Information", "Generating Backbone design...");

         if (this.design.networkSettings[0] == null)
            throw new Error('No FDTs available to process...');

         let fdps = this.design.networkSettings[0].fdpNode.fdpSettings.fdps;

         let geoNodes = new Array<GeoNode>();
         let level = this.design.networkSettings.length + 1;

         fdps.forEach(x => {
            geoNodes.push({ id: x.id, level: level, levelName: "fdps", coordinates: x.geometry.coordinates, connections: 1 });
         });

         for (let index = this.design.networkSettings.length - 1; index >= 0; index--) {

            let splitters = this.getSplitters(index);

            if (splitters == null || splitters.length == 0) {
               this.helper.log(this.design, "Error", "Splitters not defined at any of the levels...");
               throw new Error('No splitters available to process...');
            }

            //geoNodes = GeoHelper.clustersKmeans(geoNodes, splitterCount, this.design.networkSettings[index].name);

            geoNodes = await this.createClusters(geoNodes, splitters, index);

            let cableSettings = this.design.networkSettings[index].cabling.cableSettings;

            let preferedCable = this.getPreferedCable(cableSettings, geoNodes.length);

            if (preferedCable == null) {
               this.helper.log(this.design, "Error", "Insufficient Cable Configuration");
               throw new Error('Insufficient cable configuration');
            }

            //let levelIndex = index;

            geoNodes = await this.generateSegments(geoNodes);

            geoNodes.forEach(x => {
               this.generateSegmentEntities(preferedCable, x.segments, index);
            });

         }

         let popCentroid = GeoHelper.center(geoNodes);

         var designTree = new GeoNode();
         designTree.id = Helper.generateObjectId();
         designTree.levelName = "pop";
         designTree.coordinates = popCentroid;
         designTree.connections = 1;
         designTree.children = geoNodes;

         this.design.bluePrint = designTree;

         status = true;

      } catch (e) {
         status = false;
         this.helper.log(this.design, "Error", e);
      }

      $("#ajax-loading").hide();
      return status;
   }

   getSplitters(level: number): Splitter[] {

      let splitters = [];

      for (var i = level; i >= 0; i--) {

         if (this.design.networkSettings[i].destinationNode.entitySettings.entityName == "Splitter") {
            splitters = this.design.networkSettings[i].destinationNode.entitySettings.splitters;
            break;
         }
      }

      return splitters;
   }

   async createClusters(geoNodes: GeoNode[], splitters: Splitter[], level: number) {

      let tempGeoNodes: GeoNode[];

      this.helper.log(this.design, "Information", "Generating clusters...");

      var resp = await this.httpClient.post<ServiceResponse>(this.appConfig.urls.Routeware.SortPoints, { Region: this.appConfig.settings.Region, Nodes: geoNodes }).toPromise();

      if (resp.status.toLowerCase() == "error") {
         this.helper.log(this.design.log, "Error", "Error sorting nodes - " + resp.message);
         throw Error("Error sorting nodes");
      }
      else {
         if (resp.data != null && resp.data.length > 0) {

            if (this.design.networkSettings[level].destinationNode.entitySettings.dataSource == 'automatic') {
               tempGeoNodes = this.createAutomaticCluster(resp.data, splitters, level);
            }
            else {
               tempGeoNodes = this.createCluster(resp.data, splitters, level);
            }
         }
         else {
            this.helper.log(this.design.log, "Error", "Nodes not available - " + resp.message);
            throw Error("Nodes not available");
         }
      }

      this.helper.log(this.design, "Information", "Sorting homepasses completed");

      return tempGeoNodes;
   }

   createAutomaticCluster(sortedNodes: GeoNode[], splitters: Splitter[], level: number) {

      var tempClusters = new Array<GeoNode>();

      let outputPorts = this.getTotalSplitterPorts(splitters);
      let connections = 0;

      let geoNode = new GeoNode();
      geoNode.id = Helper.generateObjectId();
      geoNode.levelName = this.design.networkSettings[level].name;
      geoNode.level = level;
      geoNode.coordinates = null;
      geoNode.connections = 0;
      geoNode.children = new Array<GeoNode>();

      sortedNodes.forEach(x => {

         if ((outputPorts - connections) <= 0) {

            geoNode.coordinates = GeoHelper.center(geoNode.children);
            geoNode.children.push({
               id: geoNode.id,
               connections: 0,
               children: null,
               coordinates: geoNode.coordinates,
               level: geoNode.level,
               segments: null
            });

            tempClusters.push(geoNode);

            geoNode = new GeoNode();
            connections = 0;

            geoNode.id = Helper.generateObjectId();
            geoNode.levelName = this.design.networkSettings[level].name;
            geoNode.level = level;
            geoNode.coordinates = null;

            if (geoNode.children == null)
               geoNode.children = new Array<GeoNode>();

         }

         geoNode.children.push(x);
         connections += x.connections;
         geoNode.connections = connections;

      });

      if (geoNode.children.length > 0) {
         geoNode.coordinates = GeoHelper.center(geoNode.children);
         geoNode.children.push({
            id: geoNode.id,
            connections: 0,
            children: null,
            coordinates: geoNode.coordinates,
            level: geoNode.level,
            segments: null
         });
         tempClusters.push(geoNode);
      }

      return tempClusters;
   }

   createCluster(sortedNodes: GeoNode[], splitters: Splitter[], level: number) {

      var tempClusters = new Array<GeoNode>();

      return tempClusters;
   }

   getTotalSplitterPorts(splitters: Splitter[]): number {

      let outputPorts = 0;

      splitters.forEach(x => {
         outputPorts += parseInt(x.splitterRatio.split(":")[1])
      });

      return outputPorts;
   }

   getPreferedCable(cableSettings: CableSettings, splitterCount: number): Cable {

      let cable = null;

      if (cableSettings.cables && cableSettings.cables.length > 0) {
         for (var i = 0; i < cableSettings.cables.length; i++) {
            let availableConn = cableSettings.cables[i].corePerTube * cableSettings.cables[i].noOfTubes;

            if (splitterCount < availableConn) {
               cable = cableSettings.cables[i];
               break;
            }
         }
      }

      return cable;
   }

   async generateSegments(geoNodes: GeoNode[]) {

      let tempNodes = new Array<GeoNode>();

      this.helper.log(this.design, "Information", "Generating segment information...");

      var resp = await this.httpClient.post<ServiceResponse>(this.appConfig.urls.Routeware.GenerateMSTRecursive, { Region: this.appConfig.settings.Region, Nodes: geoNodes }).toPromise();

      if (resp.status.toLowerCase() == "error") {
         this.helper.log(this.design.log, "Error", "Error generating segments - " + resp.message);
         throw new Error('Error generating segments..');
      }
      else {
         if (resp.data != null && resp.data.length > 0) {
            tempNodes = resp.data;
         }
      }

      this.helper.log(this.design, "Information", "Generating segment information completed");

      return tempNodes;
   }

   generateSegmentEntities(preferedCable: Cable, segments: Segment[], level: number) {

      if (segments && segments.length > 0) {
         segments.forEach(segment => {

            let cableType = this.design.networkSettings[level].cabling.cableSettings.cableType;
            let prefChamber = this.design.networkSettings[level].cabling.cableSettings.chamber;
            let prefPole = this.design.networkSettings[level].cabling.cableSettings.pole;
            let chamberInterval = this.design.networkSettings[level].cabling.cableSettings.chamberInterval;

            let loopLength = this.design.networkSettings[level].cabling.cableSettings.cableLoop;
            let loopEnd = this.design.networkSettings[level].cabling.cableSettings.loopAtClosure;

            segment.id = Helper.generateObjectId();

            //1. generate Cables
            segment.cable = this.entitiesHelper.createCable(preferedCable, segment.coordinates);

            //2. Generate Poles/Chambers
            if (cableType.toLowerCase() == "underground") {
               segment.chambers = this.entitiesHelper.createChambers(prefChamber, chamberInterval, segment, loopLength, loopEnd);
            }
            else {
               segment.poles = this.entitiesHelper.createPoles(prefPole, chamberInterval, segment, loopLength, loopEnd);
            }

         });
      }
   }
}
