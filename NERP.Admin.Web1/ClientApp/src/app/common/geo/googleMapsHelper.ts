import { DrawingMode } from './drawingMode';
import { GeoHelper } from './geoHelper';
import { Position } from './geometry';

declare var google: any;

export class GMapsHelper {


    static initializeMap(mapElementId, mapCenter, zoom, maxZoom) {

        if (mapCenter === null || mapCenter === "")
            mapCenter = GeoHelper.getBrowserLocation({ lat: 18.5245649, lng: 73.7228783 });

        var mapOptions = {
            zoom: zoom,
            maxZoom: maxZoom,
            center: mapCenter,
            fullscreenControl: false,
            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.LEFT_BOTTOM
            },
            controlSize: 30,
            mapTypeControl: false,
            scaleControl: true,
            streetViewControl: false,
            rotateControl: true,
            //mapTypeControlOptions: {
            //    style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            //    position: google.maps.ControlPosition.LEFT_BOTTOM
            //},
            styles: [
                {
                    "featureType": "water",
                    "stylers": [
                        { "saturation": 43 },
                        { "lightness": -11 },
                        { "hue": "#0088ff" }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [
                        { "hue": "#ff0000" },
                        { "saturation": -100 },
                        { "lightness": 99 }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        { "color": "#808080" },
                        { "lightness": 54 }
                    ]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.fill",
                    "stylers": [
                        { "color": "#ece2d9" }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [
                        { "color": "#ccdca1" }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        { "color": "#767676" }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        { "color": "#ffffff" }
                    ]
                },
                {
                    "featureType": "poi",
                    "stylers": [
                        { "visibility": "off" }
                    ]
                },
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry.fill",
                    "stylers": [
                        { "visibility": "on" },
                        { "color": "#b8cb93" }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "stylers": [
                        { "visibility": "on" }
                    ]
                },
                {
                    "featureType": "poi.sports_complex",
                    "stylers": [
                        { "visibility": "on" }
                    ]
                },
                {
                    "featureType": "poi.medical",
                    "stylers": [
                        { "visibility": "on" }
                    ]
                },
                {
                    "featureType": "poi.business",
                    "stylers": [
                        { "visibility": "simplified" }
                    ]
                }]
        };

        // Get all html elements for map
        var mapElement = document.getElementById(mapElementId);

        // Create the Google Map using elements
        return new google.maps.Map(mapElement, mapOptions);
    }

    static drawingManagerTool(map, strDrawingMode, drawingControlModes, drawingOption) {

        var drawingManager = new google.maps.drawing.DrawingManager();

        var drawingMode = GMapsHelper.getDrawingMode(strDrawingMode);

        drawingManager.setOptions({
            drawingMode: drawingMode,
            drawingControl: true,
            drawingControlOptions: {
                position: google.maps.ControlPosition.TOP_LEFT,
                drawingModes: drawingControlModes
            },
            options: drawingOption
        });

        drawingManager.setMap(map);

        return drawingManager;
    }

    static addListener(entity, clickType, callback) {
        google.maps.event.addListener(entity, clickType, function (event) {
            if (typeof callback === "function")
                callback(event);
        });
    }

    static getDrawingMode(drawingMode: DrawingMode) {

        switch (drawingMode) {
            case DrawingMode.POLYGON:
                return google.maps.drawing.OverlayType.POLYGON;
            case DrawingMode.CIRCLE:
                return google.maps.drawing.OverlayType.CIRCLE;
            case DrawingMode.POLYLINE:
                return google.maps.drawing.OverlayType.POLYLINE;
            case DrawingMode.RECTANGLE:
                return google.maps.drawing.OverlayType.RECTANGLE;
            case DrawingMode.MARKER:
                return google.maps.drawing.OverlayType.MARKER;
            default:
        }
    }

    static createPolygon(coordinates: Array<Array<Position>>, polyOptions: any) {

        let tempCoordinates = GMapsHelper.getLatLngsFromPolygon(coordinates);

        return new google.maps.Polygon({
            paths: tempCoordinates,
            strokeWeight: polyOptions.strokeWeight,
            fillOpacity: polyOptions.fillOpacity,
            editable: polyOptions.editable,
            draggable: polyOptions.draggable
        });
    }

    static getLatLngsFromPolygon(coordinates: Array<Array<Position>>) {

        var tempCoordinates = [];

        coordinates[0].forEach(x => { tempCoordinates.push({ lng: x[0], lat: x[1] }) });

        tempCoordinates.splice(tempCoordinates.length - 1, 1);

        return tempCoordinates;
    }

    static setBounds(latlngs: any, map: any) {

        var bounds = new google.maps.LatLngBounds();
        for (var i = 0; i < latlngs.length; i++) {
            bounds.extend(latlngs[i]);
        }

        map.fitBounds(bounds);
    }

    static getLatLng(latlng: number[]) {
        return new google.maps.LatLng(latlng[0], latlng[1]);
    }

    static boundsToPolygon(bounds: any): Array<Array<Position>> {

        let northEastLatLngs = [];
        let southWestLatLngs = [];
        let northWestLatLngs = [];
        let southEastLatLngs = [];

        northEastLatLngs[0] = bounds.getNorthEast().lng();
        northEastLatLngs[1] = bounds.getNorthEast().lat();

        northWestLatLngs[0] = bounds.getSouthWest().lng();
        northWestLatLngs[1] = bounds.getNorthEast().lat();

        southWestLatLngs[0] = bounds.getSouthWest().lng();
        southWestLatLngs[1] = bounds.getSouthWest().lat();

        southEastLatLngs[0] = bounds.getNorthEast().lng();
        southEastLatLngs[1] = bounds.getSouthWest().lat();

        var tempCoordinates = [];
        tempCoordinates.push(northEastLatLngs);
        tempCoordinates.push(northWestLatLngs);
        tempCoordinates.push(southWestLatLngs);
        tempCoordinates.push(southEastLatLngs);
        tempCoordinates.push(northEastLatLngs);

        return [tempCoordinates];

    }

    static pathArrayToPolygon(pathArray: any): Array<Array<Position>>  {

        var tempCoordinates = [];

        pathArray.forEach(x => { tempCoordinates.push([x.lng(), x.lat()]); });

        tempCoordinates.push([pathArray[0].lng(), pathArray[0].lat()]);

        return [tempCoordinates];
    }

    static getPointsAtDistance(points: Position[], distance: number) {

        let path = [];

        points.forEach(x => { path.push({ lng: x[0], lat: x[1] }) });

        return new google.maps.Polyline({
            path: path
        }).GetPointsAtDistance(distance);
    }
}
