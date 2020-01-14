import { LatLng } from './latLng';
import { Position, Polygon } from './geometry';
import * as turf from '@turf/turf';
import { GeoNode } from './geoNode';
import { Helper } from '../helper';

export class GeoHelper {
    ///**
    // * Get the distance between two coordinates.
    // * @param start Starting coordinates.
    // * @param end Ending coordinates.
    // * @param unit Unit of distance returned, defaults to Km.
    // * @returns The distance between two coordinates.
    // */
    //static distance(start: LatLng, end: LatLng, unit: string = 'km'): number {

    //    const startValid: Error = this.validateCoordinates(start);

    //    if (startValid instanceof Error) { throw new Error('Start coordinates: ' + startValid.message); }
    //    const endValid: Error = this.validateCoordinates(end);
    //    if (endValid instanceof Error) { throw new Error('End coordinates: ' + endValid.message); }

    //    const radius: number = (unit.toLowerCase() === 'miles') ? 3963 : 6371;
    //    const dLat: number = this.toRad(end.lat - start.lat);
    //    const dLon: number = this.toRad(end.lng - start.lng);
    //    const lat1: number = this.toRad(start.lat);
    //    const lat2: number = this.toRad(end.lat);
    //    const a: number = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    //        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    //    const c: number = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    //    return (radius * c);
    //}

    //static toRad(degrees: number): number {
    //    return (degrees * Math.PI / 180);
    //}

    static validateCoordinates(coordinates: LatLng): Error {
        const error: string[] = [];
        if (coordinates.lat > 90) { error.push('Your latitude is greater than 90°'); }
        if (coordinates.lat < -90) { error.push('Your latitude is less than -90°'); }
        if (coordinates.lng > 180) { error.push('Your longitude is greater than 180°'); }
        if (coordinates.lng < -180) { error.push('Your longitude is less than -180°'); }
        if (error.length !== 0) { return new Error(error.join(' ')); }
    }

    static convertToPosition(lngLat: number[]): LatLng {

        if (lngLat == null) return null;

        return { lng: lngLat[0], lat: lngLat[1] };
    }

    static getBrowserLocation(defaultLatLng: LatLng) {

        var options = { enableHighAccuracy: true, maximumAge: 75000 };

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                return { lat: position.coords.latitude, lng: position.coords.longitude };
            });
        } else {
            return defaultLatLng;
        }

        return defaultLatLng;
    }

    //getClusterCentroid(cluster: Cluster): Position {

    //    if (0 === cluster.points.length) {
    //        return cluster.centroid;
    //    }

    //    const centroid = cluster.points[0].concat();

    //    for (let i = 1; i < cluster.points.length; i++) {
    //        for (let d = 0; d < centroid.length; d++) {
    //            centroid[d] += cluster.points[i][d];
    //        }
    //    }
    //    for (let d = 0; d < centroid.length; d++) {
    //        centroid[d] /= cluster.points.length;
    //    }

    //    return centroid;
    //}

    //static getCentroid(points: Position[]): Position {

    //    const centroid = points[0].concat();

    //    for (let i = 1; i < points.length; i++) {
    //        for (let d = 0; d < centroid.length; d++) {
    //            centroid[d] += points[i][d];
    //        }
    //    }
    //    for (let d = 0; d < centroid.length; d++) {
    //        centroid[d] /= points.length;
    //    }

    //    return centroid;
    //}

   /**
   * Get the distance between two coordinates in Kilometers.
   * @param start Starting coordinates.
   * @param end Ending coordinates.
   * @returns The distance between two coordinates.
   */
    static distance(start: Position, end: Position) {

        let from = turf.point(start);
        let to = turf.point(end);

        return turf.distance(from, to, { units: "kilometers" });

    }

    static getLength(points: Position[]) {

        var line = turf.lineString(points);

        var length = turf.length(line, { units: 'kilometers' });

        return length;

    }

    static polygonCenter(polygon: Polygon): Position {

        var turfPolygon = turf.polygon(polygon.coordinates);

        var centroid = turf.centroid(turfPolygon);

        return centroid.geometry.coordinates;

    }

    static center(geoNodes: GeoNode[]): Position {

        var featureCollection = GeoHelper.getFeatureCollection(geoNodes);

        var center = turf.center(featureCollection);

        return center.geometry.coordinates;

    }

    static clustersKmeans(geoNodes: GeoNode[], numberOfClusters, level: number, levelName: string): GeoNode[] {

        var featureCollection = GeoHelper.getFeatureCollection(geoNodes);

        var clustered = turf.clustersKmeans(featureCollection, { numberOfClusters: numberOfClusters });

        var tempClusters = new Array<GeoNode>();

        turf.clusterEach(clustered, 'cluster', (cluster, clusterValue, currentIndex) => {

            let points = [];
            let center = null;
            let connections = 0;

            cluster.features.forEach(x => {
                center = x.properties.centroid;
                connections += x.properties.connections;

                points.push({ id: x.properties.id, level: x.properties.level, coordinates: x.geometry.coordinates, connections: x.properties.connections, children: x.properties.children });
            });

            tempClusters.push({ id: Helper.generateObjectId(), level:level, levelName: levelName, coordinates: center, connections: connections, children: points });
        })

        return tempClusters;
    }

    static getPointAtDistance(points: Position[], distance): Position {

        var line = turf.lineString(points);

        var along = turf.along(line, distance, { units: "kilometers" });

        return along.geometry.coordinates;

    }

    static getPointsAtDistance(points: Position[], distance): Position[] {

        let intervalPoints = new Array<Position>();

        var line = turf.lineString(points);

        var chunk = turf.lineChunk(line, distance, { units: "kilometers" });

        //Add first point
        intervalPoints.push(chunk.features[0].geometry.coordinates[0]);

        //Add last points
        chunk.features.forEach(x => {
            let lIndex = x.geometry.coordinates.length -1;
            intervalPoints.push(x.geometry.coordinates[lIndex])
        });

        return intervalPoints;
    }

    static cleanLineCoordinates(points: Position[]): Position[] {

        var line = turf.lineString(points);

        return turf.cleanCoords(line).geometry.coordinates;
    }

    static cleanMultiPointCoordinates(points: Position[]): Position[] {

        var multiPoint = turf.multiPoint(points);

        return turf.cleanCoords(multiPoint).geometry.coordinates;
    }

    static pointToLineDistance(point: Position, line: Position[]): number {

        var distance = turf.pointToLineDistance(point, line, { units: 'kilometers' });

        return distance;
    }

    static nearestPointOnLine(point: Position, line: Position[]): Position {

        var lineStr = turf.lineString(line);

        var nearestPoint = turf.nearestPointOnLine(lineStr, point, { units: 'kilometers' });

        return nearestPoint.geometry.coordinates;
    }

    static nearestPoint(point: Position, geoNodes: GeoNode[]): GeoNode {

        var featureCollection = GeoHelper.getFeatureCollection(geoNodes);
 
        var nearestPoint = turf.nearestPoint(point, featureCollection);

        return geoNodes.find(x => x.id == nearestPoint.properties.id);
    }

    private static getFeatureCollection(geoNodes: GeoNode[]) {

        var features = new Array<turf.Feature>();

        geoNodes.forEach(x => { features.push(turf.point(x.coordinates, { 'id': x.id, 'level': x.level, 'connections': x.connections, 'children': x.children })) });

        return turf.featureCollection(features);

    }

}
