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
import { Point } from '../../common/geo/geometry';
import * as _ from "lodash";
import { SpliceClosure } from '../../entities/models/spliceClosure';
import { Pole } from '../../entities/models/pole';
import { Chamber } from '../../entities/models/chamber';

declare var $: any;

@Injectable()
export class FTTxHelper {

    private design: Design;
    private entitiesHelper: EntitiesHelper;

    constructor(
        private httpClient: HttpClient,
        private appConfig: AppConfig,
        private homepassService: HomepassService,
        private helper: Helper) { }

    async generateFTTxDesign(design: Design) {

        this.design = design;
        this.design.bluePrint = null;
        this.entitiesHelper = new EntitiesHelper(design.bookingIds, design.generatedCodes);

        let status = false;

        try {

            this.helper.log(this.design, "Information", "Generating FTTX design...");

            let homepasses = await this.getHomepasses(this.design.clusterId);

            if (homepasses == null || homepasses.length == 0)
                throw new Error('No homepasses to process...');

            let geoNodes = new Array<GeoNode>();
            let homepassNodes = new Array<GeoNode>();
            let level = this.design.networkSettings.length + 1;

            this.design.homepasses = homepasses;

            homepasses.forEach(x => {
                geoNodes.push({ id: x.id, level: level, levelName: "homepasses", coordinates: x.geometry.coordinates, connections: x.connections });
            });

            for (let index = this.design.networkSettings.length - 1; index >= 0; index--) {

                let splitters = this.getSplitters(index);

                if (splitters == null || splitters.length == 0) {
                    this.helper.log(this.design, "Error", "Splitters not defined at any of the levels...");
                    throw new Error('No splitters available to process...');
                }

                //let outputPorts = this.getTotalSplitterPorts(splitters);
                //let connections = this.getConnectionsCount(geoNodes);
                //let splitterCount = Math.ceil((connections / outputPorts) * (cableSettings.connectionPercent) / 100);

                //geoNodes = GeoHelper.clustersKmeans(geoNodes, splitterCount, this.design.networkSettings[index].name);


                geoNodes = await this.createClusters(geoNodes, splitters, index);

                let cableSettings = this.design.networkSettings[index].cabling.cableSettings;
                let preferedCable = this.getPreferedCable(cableSettings, geoNodes.length);

                if (preferedCable == null) {
                    this.helper.log(this.design, "Error", "Insufficient Cable Configuration");
                    throw new Error('Insufficient cable configuration');
                }

                geoNodes = await this.generateSegments(geoNodes);

                geoNodes.forEach(x => {
                    if (x.segments != null) {
                        this.generateSegmentEntities(preferedCable, x, index);

                        if (this.design.networkSettings[index].destinationNode.entitySettings.dataSource == 'automatic')
                            this.placeSplitter(x.segments, x.coordinates, splitters);
                    }

                });

            }

            let popCentroid = GeoHelper.center(geoNodes);

            var designTree = new GeoNode();
            designTree.id = Helper.generateObjectId();
            //designTree.levelName = "pop";
            designTree.coordinates = popCentroid;
            //designTree.connections = 1;
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

    async getHomepasses(clusterId): Promise<Homepass[]> {

        this.helper.log(this.design, "Information", "Getting home passes for cluster - " + clusterId);

        let homepasses = new Array<Homepass>();

        if (this.design.designType == 'FTTx') {

            const params = new HttpParams()
                .set('clusterId', clusterId);

            var resp = await this.httpClient.get<ServiceResponse>(this.homepassService.getHomepassesInClusterApi, { params }).toPromise();

            if (resp.status.toLowerCase() == "error") {
                this.helper.log(this.design.log, "Error", "Error fetching home passes - " + resp.message);
            }
            else {
                if (resp.data != null && resp.data.length > 0) {
                    homepasses = resp.data;
                }

                this.helper.log(this.design, "Information", "Getting home passes completed");
            }
        }

        return homepasses;

    }

    getSplitters(level: number): Splitter[] {

        let splitters = [];

        for (var i = level; i >= 0; i--) {

            if (this.design.networkSettings[i].destinationNode.entitySettings.entityName == "Splitter") {

                let sptrs = this.design.networkSettings[i].destinationNode.entitySettings.splitters;

                if (sptrs[0].splitterRatio) {
                    splitters = sptrs
                    break;
                }
            }

            if (this.design.networkSettings[i].startNode.entitySettings.entityName == "Splitter") {
                let sptrs = this.design.networkSettings[i].startNode.entitySettings.splitters;

                if (sptrs[0].splitterRatio) {
                    splitters = sptrs
                    break;
                }
            }

        }

        return splitters;
    }

    async createClusters(geoNodes: GeoNode[], splitters: Splitter[], level: number) {

        let tempGeoNodes: GeoNode[];

        this.helper.log(this.design, "Information", "Generating clusters...");
        try {
            var resp = await this.httpClient.post<ServiceResponse>(this.appConfig.urls.Routeware.SortPoints, { Region: this.appConfig.settings.Region, Nodes: geoNodes }).toPromise();
        } catch (e) {
            alert(e);
        }


        if (resp.status.toLowerCase() == "error") {
            this.helper.log(this.design.log, "Error", "Error sorting nodes - " + resp.message);
            throw Error("Error sorting nodes");
        }
        else {
            if (resp.data != null && resp.data.length > 0) {

                let sortedData = new Array<GeoNode>();

                resp.data.forEach(x => {
                    let i = geoNodes.find(n => x.id == n.id);

                    if (i)
                        sortedData.push(i);
                });

                if (this.design.networkSettings[level].destinationNode.entitySettings.dataSource == 'automatic') {
                    //tempGeoNodes = this.createAutomaticCluster(sortedData, splitters, level);
                    tempGeoNodes = this.createAutomaticCluster(geoNodes, splitters, level);
                }
                else {
                    //tempGeoNodes = this.createExistingCluster(sortedData, splitters, level);
                    tempGeoNodes = this.createExistingCluster(geoNodes, splitters, level);
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

        let cableSettings = this.design.networkSettings[level].cabling.cableSettings;


        //let outputPorts = this.getTotalSplitterPorts(splitters);
        let outputPorts = parseInt(splitters[0].splitterRatio.split(":")[1]);



        let outputPortsTemp = ((outputPorts * cableSettings.connectionPercent) / 100).toFixed();


        let connections = 0;

        let geoNode = new GeoNode();
        geoNode.id = Helper.generateObjectId();
        geoNode.levelName = this.design.networkSettings[level].name;
        geoNode.level = level;
        geoNode.coordinates = null;
        geoNode.connections = 1;
        geoNode.children = new Array<GeoNode>();

        sortedNodes.forEach(x => {

            if ((parseInt(outputPortsTemp) - connections) <= 0) {

                geoNode.coordinates = GeoHelper.center(geoNode.children);
                //geoNode.children.push({

                //   id: geoNode.id,
                //   connections: 0,
                //   children: null,
                //   coordinates: geoNode.coordinates,
                //   level: geoNode.level,
                //   segments: null
                //});

                tempClusters.push(geoNode);

                geoNode = new GeoNode();
                connections = 0;

                geoNode.id = Helper.generateObjectId();
                geoNode.levelName = this.design.networkSettings[level].name;
                geoNode.level = level;
                geoNode.coordinates = null;
                geoNode.connections = 1;

                if (geoNode.children == null)
                    geoNode.children = new Array<GeoNode>();

            }

            geoNode.children.push(x);
            connections += x.connections;
            //geoNode.connections = connections;

        });

        if (geoNode.children.length > 0) {
            geoNode.coordinates = GeoHelper.center(geoNode.children);
            //geoNode.children.push({
            //   id: geoNode.id,
            //   connections: 0,
            //   children: null,
            //   coordinates: geoNode.coordinates,
            //   level: geoNode.level,
            //   segments: null
            //});
            tempClusters.push(geoNode);
        }

        return tempClusters;
    }

    createExistingCluster(sortedNodes: GeoNode[], splitters: Splitter[], level: number) {

        var tempClusters = new Array<GeoNode>();

        splitters.forEach(x => {
            let geoNode = new GeoNode();
            geoNode.id = Helper.generateObjectId();
            geoNode.levelName = this.design.networkSettings[level].name;
            geoNode.level = level;
            geoNode.coordinates = x.geometry.coordinates;
            geoNode.connections = 1;
            geoNode["availableConnections"] = 8;
            geoNode.children = new Array<GeoNode>();

            tempClusters.push(geoNode);
        });

        sortedNodes.forEach(x => {

            let nearestSplitter = this.getNearestSplitter(x.coordinates, tempClusters, x.connections);

            if (nearestSplitter && nearestSplitter["availableConnections"] >= x.connections) {
                if (nearestSplitter.children == null)
                    nearestSplitter.children = new Array<GeoNode>();

                nearestSplitter.children.push(x);
                //nearestSplitter.connections += x.connections;
                nearestSplitter["availableConnections"] -= x.connections;
            }
        });

        let validClusters = new Array<GeoNode>();

        tempClusters.forEach(x => {
            if (x.children.length > 0)
                validClusters.push(x);
        });

        return validClusters;
    }

    //getTotalSplitterPorts(splitters: Splitter[]): number {

    //    let outputPorts = 0;

    //    splitters.forEach(x => {
    //        outputPorts += parseInt(x.splitterRatio.split(":")[1])
    //    });

    //    return outputPorts;
    //}

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

    generateSegmentEntities(preferedCable: Cable, geoNode: GeoNode, level: number) {

        let sourceEntity = this.design.networkSettings[level].startNode.entitySettings.entityName;

        let cableType = this.design.networkSettings[level].cabling.cableSettings.cableType;
        let prefChamber = this.design.networkSettings[level].cabling.cableSettings.chamber;
        let prefPole = this.design.networkSettings[level].cabling.cableSettings.pole;
        let prefSpliceClosure = this.design.networkSettings[level].cabling.spliceClosureSettings.spliceClosures[0];
        let chamberInterval = this.design.networkSettings[level].cabling.cableSettings.chamberInterval;
        let loopLength = this.design.networkSettings[level].cabling.cableSettings.cableLoop;
        let loopDistance = this.design.networkSettings[level].cabling.cableSettings.loopInterval;
        let loopEnd = this.design.networkSettings[level].cabling.cableSettings.loopAtClosure;
        let drumLength = this.design.networkSettings[level].cabling.spliceClosureSettings.drumLength;

        geoNode.segments = this.splitSegments(geoNode.segments, drumLength, loopDistance, loopLength, loopEnd);

        let segments = geoNode.segments;

        if (segments && segments.length > 0) {
            segments.forEach(segment => {


                segment.id = Helper.generateObjectId();

                //1. generate Cables
                segment.cable = this.entitiesHelper.createCable(preferedCable, segment.coordinates);
                segment.cable.calculatedLength = (((segment.cable.measuredLength / loopDistance)) * loopLength) + segment.cable.measuredLength + loopEnd;

                //2. Generate Poles/Chambers
                if (cableType.toLowerCase() == "underground") {
                    segment.chambers = this.entitiesHelper.createChambers(prefChamber, chamberInterval, segment, loopLength, loopEnd);
                }
                else {
                    segment.poles = this.entitiesHelper.createPoles(prefPole, chamberInterval, segment, loopLength, loopEnd);
                }

                //3. Place SpliceClosure at end of each segment
                let cableEndPoint = segment.coordinates[segment.coordinates.length - 1];
                let spliceClosure = this.entitiesHelper.createSpliceClosure(prefSpliceClosure, cableEndPoint);

                if (segment.spliceClosures == null)
                    segment.spliceClosures = new Array<SpliceClosure>();

                segment.spliceClosures.push(spliceClosure);
            });

            //If not splitter, place entities near Homepasses
            if (sourceEntity != "Splitter") {

                geoNode.children.forEach(item => {

                    let nearestSegment = this.getNearestSegment(segments, item.coordinates);
                    let nearestPoint = GeoHelper.nearestPointOnLine(item.coordinates, nearestSegment.coordinates);

                    switch (sourceEntity) {
                        case "Chamber":
                            if (nearestSegment.chambers == null)
                                nearestSegment.chambers = new Array<Chamber>();

                            let chamber = this.entitiesHelper.createChamber(prefChamber, nearestPoint, loopLength);
                            nearestSegment.chambers.push(chamber);
                            break;
                        case "Pole":
                            if (nearestSegment.poles == null)
                                nearestSegment.poles = new Array<Pole>();

                            let pole = this.entitiesHelper.createPole(prefPole, nearestPoint, loopLength);
                            nearestSegment.poles.push(pole);
                            break;
                        case "SpliceClosure":
                            if (nearestSegment.spliceClosures == null)
                                nearestSegment.spliceClosures = new Array<SpliceClosure>();

                            let spliceClosure = this.entitiesHelper.createSpliceClosure(prefSpliceClosure, nearestPoint);
                            nearestSegment.spliceClosures.push(spliceClosure);
                            break;

                        default:
                    }

                });
            }
        }
    }

    splitSegments(segments: Segment[], drumLength: number, loopDistance: number, loopLength: number, loopEnd: number): Segment[] {

        let tempSegments = new Array<Segment>();

        let eSegmentLength = ((loopDistance * (drumLength + loopLength - loopEnd)) / (loopLength + loopDistance)) / 1000;


        segments.forEach(segment => {

            //let intervalPoints = GeoHelper.getPointsAtDistance(segment.coordinates, (chamberInterval / 1000));
            let segmentLength = GeoHelper.getLength(segment.coordinates);


            if (segmentLength <= eSegmentLength)
                tempSegments.push(segment);
            else {
                let points = GeoHelper.lineChunk(segment.coordinates, eSegmentLength);

                points.forEach(x => {
                    let newSegment = new Segment();
                    newSegment.id = Helper.generateObjectId();
                    newSegment.coordinates = x;
                    tempSegments.push(newSegment);
                });
            }

        });

        return tempSegments;
    }

    placeSplitter(segments: Segment[], point: number[], splitters: Splitter[]) {

        if (segments && segments.length > 0) {

            let nearestSegment = this.getNearestSegment(segments, point);
            //let nearestPoint = GeoHelper.nearestPointOnLine(point, nearestSegment.coordinates);
            let nearestPoint = null;

            if (nearestSegment.chambers && nearestSegment.chambers.length > 0) {
                nearestPoint = this.getNearestPoleOrChamberLocation(nearestSegment.chambers, point);
            }
            else {
                nearestPoint = this.getNearestPoleOrChamberLocation(nearestSegment.poles, point);
            }

            if (nearestSegment.splitters == null)
                nearestSegment.splitters = new Array<Splitter>();

            let splitter = this.entitiesHelper.createSplitter(splitters[0], nearestPoint);

            nearestSegment.splitters.push(splitter);
        }

    }

    getNearestSegment(segments: Segment[], point: number[]): Segment {

        let distance;
        let nearestSegment: Segment;

        segments.forEach(x => {

            let d = GeoHelper.pointToLineDistance(point, x.coordinates);

            if (distance == null) {
                distance = d;
                nearestSegment = x;
            }
            else {

                if (d < distance) {
                    distance = d;
                    nearestSegment = x;
                }
            }
        });

        return nearestSegment
    }

    getNearestSplitter(point: number[], splitters: GeoNode[], connections: number): GeoNode {

        let filteredSplitters = new Array<GeoNode>();

        splitters.forEach(x => {
            if (x["availableConnections"] >= connections)
                filteredSplitters.push(x);
        });

        //let filteredSplitters = splitters.filter(x => {
        //    x["availableConnections"] >= connections;
        //});


        let nearestSplitter = GeoHelper.nearestPoint(point, filteredSplitters);

        return nearestSplitter;
    }

    getNearestPoleOrChamberLocation(entity, point) {

        let coords = [];

        entity.forEach(x => {
            coords.push(x.geometry.coordinates);
        });

        let nearestPoint = GeoHelper.nearestPoint2(point, coords);

        return nearestPoint;
    }

}
