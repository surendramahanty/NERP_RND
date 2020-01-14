var GMHelper = {

    

    createOverlay: function (map) {

        var overlay = new google.maps.OverlayView();
        overlay.draw = function () { };
        overlay.setMap(map);

        return overlay;
    },

    createElevator: function () {
        return new google.maps.ElevationService;
    },

    createGeoCoder: function () {
        return new google.maps.Geocoder;
    },

    clearClickListener: function (entity, clickType) {
        google.maps.event.clearListeners(entity, clickType);
    },

    addListener: function (entity, clickType, callback) {
        google.maps.event.addListener(entity, clickType, function (event) {
            if (typeof callback === "function")
                callback(event);
        });
    },

    createMarker: function (location, iconImage, draggable, id, map) {

        var marker = new google.maps.Marker({
            position: location,
            icon: iconImage,
            draggable: draggable,
            cursor: 'pointer',
            id: id,
            optimized: true,
            map: map
        });

        return marker;
    },

    clearMarkers: function (markers) {
        $.each(markers, function (i, marker) {
            marker.setMap(null);
        });
    },

    getLatLongFromDragPoint: function (overlay, dragPoint) {
        return overlay.getProjection().fromContainerPixelToLatLng(dragPoint);
    },

    getLocationElevation: function (location, elevator, successCallback, failureCallback) {

        elevator.getElevationForLocations({
            'locations': [location]
        }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    if (typeof successCallback === "function")
                        successCallback(results[0].elevation);
                } else {
                    if (typeof failureCallback === "function")
                        failureCallback('No results found');
                }
            } else {
                if (typeof failureCallback === "function")
                    failureCallback(status);
            }
        });
    },

    markerDragStartLocation: function (entity, callback) {
        entity.setCursor("move");
        google.maps.event.addListener(entity, "dragstart", function (event) {

            if (typeof callback === "function")
                callback(event);
        });
    },

    markerDragEndLocation: function (entity, callback) {
        entity.setCursor("move");
        google.maps.event.addListener(entity, "dragend", function (event) {

            if (typeof callback === "function")
                callback(event);
        });
    },

    drawPolyLine: function (path, color) {

        var line = new google.maps.Polyline({
            path: path,
            strokeColor: color,
            strokeOpacity: 0.7,
            strokeWeight: 3
        });

        return line;
    },

    drawPolygon: function (color) {
        polygon = new google.maps.Polygon({
            strokeColor: color,
            strokeOpacity: 1.0,
            strokeWeight: 3,
            editable: true,
        });

        return polygon;
    },

    drawCircle: function (coordinate, radius, color) {
        var circle = new google.maps.Circle({
            strokeColor: color,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: color,
            fillOpacity: 0.35,
            center: coordinate,
            radius: radius
        });

        return circle;
    },

    drawCircleAroundPoint: function (coordinate, radius, color, _map) {
        var circle = new google.maps.Circle({
            strokeColor: color,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: color,
            fillOpacity: 0.35,
            center: coordinate,
            map: _map,
            radius: radius
        });

        return circle;
    },

    //clearPolyline: function (polyline) {
    //    polyline.setMap(null);
    //},

    editPolyline: function (Polyline, callback) {
        google.maps.event.addListener(Polyline, "dragend", function () {
            if (typeof callback === "function")
                callback(this);
        });

        google.maps.event.addListener(Polyline.getPath(), "insert_at", function () {
            if (typeof callback === "function")
                callback(this);
        });

        google.maps.event.addListener(Polyline.getPath(), "remove_at", function () {
            if (typeof callback === "function")
                callback(this);
        });

        google.maps.event.addListener(Polyline.getPath(), "set_at", function () {
            if (typeof callback === "function")
                callback(this);
        });
    },

    plotMarkerOnPolyline: function (polyline, interval) {
        var markers = ComputeMarkerPlace.SetMarkerAtEqualInterval(polyline.getPath().j, interval, _map);

        return markers;
    },

    checkLatlngonPolyline: function (polyline, latlng) {
        return google.maps.geometry.poly.isLocationOnEdge(latlng, polyline, 10e-4);
    },

    getPolylineLength: function (polyline) {
        return google.maps.geometry.spherical.computeLength(polyline.getPath());
    },

    //clearPolygon: function (polygon) {
    //    polygon.setMap(null);
    //},

    clearMapObjects: function (object) {
        object.setMap(null);
    },

    setMapType: function (map, mapType) {

        switch (mapType.toLowerCase()) {
            case 'roadmap':
                map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
                break;
            case 'satellitemap':
                map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
                break;
            case 'hybridmap':
                map.setMapTypeId(google.maps.MapTypeId.HYBRID);
                break;
            case 'terrainmap':
                map.setMapTypeId(google.maps.MapTypeId.TERRAIN);
                break;
            case 'grayscalemap':

                var grayscaleMapType = new google.maps.StyledMapType(
                    [
                        {
                            //featureType: 'all',
                            //elementType: 'all',
                            stylers: [{ saturation: -100 }]
                        }
                    ],
                    { name: 'Grayscale Map' }
                );

                map.mapTypes.set('grayscaleMap', grayscaleMapType);
                map.setMapTypeId('grayscaleMap');

                break;
            case 'whitemap':

                var whiteMapType = new google.maps.StyledMapType(
                    [
                        {
                            stylers: [{ color: '#ffffff' }]
                        }
                    ],
                    { name: 'White Map' }
                );

                map.mapTypes.set('whiteMap', whiteMapType);
                map.setMapTypeId('whiteMap');
                break;

            case 'retromap':

                var retroMapType = new google.maps.StyledMapType(
                    [
                        { elementType: 'geometry', stylers: [{ color: '#ebe3cd' }] },
                        { elementType: 'labels.text.fill', stylers: [{ color: '#523735' }] },
                        { elementType: 'labels.text.stroke', stylers: [{ color: '#f5f1e6' }] },
                        {
                            featureType: 'administrative',
                            elementType: 'geometry.stroke',
                            stylers: [{ color: '#c9b2a6' }]
                        },
                        {
                            featureType: 'administrative.land_parcel',
                            elementType: 'geometry.stroke',
                            stylers: [{ color: '#dcd2be' }]
                        },
                        {
                            featureType: 'administrative.land_parcel',
                            elementType: 'labels.text.fill',
                            stylers: [{ color: '#ae9e90' }]
                        },
                        {
                            featureType: 'landscape.natural',
                            elementType: 'geometry',
                            stylers: [{ color: '#dfd2ae' }]
                        },
                        {
                            featureType: 'poi',
                            elementType: 'geometry',
                            stylers: [{ color: '#dfd2ae' }]
                        },
                        {
                            featureType: 'poi',
                            elementType: 'labels.text.fill',
                            stylers: [{ color: '#93817c' }]
                        },
                        {
                            featureType: 'poi.park',
                            elementType: 'geometry.fill',
                            stylers: [{ color: '#a5b076' }]
                        },
                        {
                            featureType: 'poi.park',
                            elementType: 'labels.text.fill',
                            stylers: [{ color: '#447530' }]
                        },
                        {
                            featureType: 'road',
                            elementType: 'geometry',
                            stylers: [{ color: '#f5f1e6' }]
                        },
                        {
                            featureType: 'road.arterial',
                            elementType: 'geometry',
                            stylers: [{ color: '#fdfcf8' }]
                        },
                        {
                            featureType: 'road.highway',
                            elementType: 'geometry',
                            stylers: [{ color: '#f8c967' }]
                        },
                        {
                            featureType: 'road.highway',
                            elementType: 'geometry.stroke',
                            stylers: [{ color: '#e9bc62' }]
                        },
                        {
                            featureType: 'road.highway.controlled_access',
                            elementType: 'geometry',
                            stylers: [{ color: '#e98d58' }]
                        },
                        {
                            featureType: 'road.highway.controlled_access',
                            elementType: 'geometry.stroke',
                            stylers: [{ color: '#db8555' }]
                        },
                        {
                            featureType: 'road.local',
                            elementType: 'labels.text.fill',
                            stylers: [{ color: '#806b63' }]
                        },
                        {
                            featureType: 'transit.line',
                            elementType: 'geometry',
                            stylers: [{ color: '#dfd2ae' }]
                        },
                        {
                            featureType: 'transit.line',
                            elementType: 'labels.text.fill',
                            stylers: [{ color: '#8f7d77' }]
                        },
                        {
                            featureType: 'transit.line',
                            elementType: 'labels.text.stroke',
                            stylers: [{ color: '#ebe3cd' }]
                        },
                        {
                            featureType: 'transit.station',
                            elementType: 'geometry',
                            stylers: [{ color: '#dfd2ae' }]
                        },
                        {
                            featureType: 'water',
                            elementType: 'geometry.fill',
                            stylers: [{ color: '#b9d3c2' }]
                        },
                        {
                            featureType: 'water',
                            elementType: 'labels.text.fill',
                            stylers: [{ color: '#92998d' }]
                        }
                    ],
                    { name: 'Retro Map' }
                );

                map.mapTypes.set('retroMap', retroMapType);
                map.setMapTypeId('retroMap');
                break;
            default:
                map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
        }

    },


    getAddressFromLatLng: function (latLng, geocoder, successCallback, failureCallback) {

        geocoder.geocode({ 'location': latLng }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    if (typeof successCallback === "function")
                        successCallback(results[0].formatted_address);
                } else {
                    if (typeof failureCallback === "function")
                        failureCallback('No results found');
                }
            } else {
                if (typeof failureCallback === "function")
                    failureCallback('No results found');
            }
        });
    },

    setEntityBound: function (latlngs, type) {

        var bounds = new google.maps.LatLngBounds();

        switch (type.toLowerCase()) {
            case 'point':
                bounds.extend(new google.maps.LatLng(latlngs[0][1], latlngs[0][0]));
                break;
            case 'line':
                for (let i = 0; i < latlngs.length; i++) {
                    bounds.extend(new google.maps.LatLng(latlngs[i][1], latlngs[i][0]));
                }
                break;
            case 'polygon':
                for (let i = 0; i < latlngs.length; i++) {
                    bounds.extend(new google.maps.LatLng(latlngs[i][1], latlngs[i][0]));
                }
                break;
        }
        bounds.getCenter();
        _map.fitBounds(bounds);
    },

    getPolyLineLngLats: function (polyline) {
        var lngLatArray = [];
        $.each(polyline.getPath().getArray(), function (i, latLng) {
            lngLatArray.push([latLng.lng(), latLng.lat()]);
        });
        return lngLatArray;
    },

    getPolygonBounds: function (entity) {
        var bounds = new google.maps.LatLngBounds();
        entity.getPath().forEach(function (element, index) { bounds.extend(element) });
        return bounds;
    },

    calculateDistance: function (lat1, lon1, lat2, lon2, unit) {
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * lat2 / 180;
        var radlon1 = Math.PI * lon1 / 180;
        var radlon2 = Math.PI * lon2 / 180;
        var theta = lon1 - lon2;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);

        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;

        if (unit === "K") { dist = dist * 1.609344; }
        if (unit === "N") { dist = dist * 0.8684; }

        return dist;
    },

    distance: function (lat1, lon1, lat2, lon2) {
        //        var R = 6371; // Radius of the earth in km
        //var dLat = (lat2 - lat1) * Math.PI / 180;  // deg2rad below
        //var dLon = (lon2 - lon1) * Math.PI / 180;
        //var a =
        //    0.5 - Math.cos(dLat) / 2 +
        //    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        //    (1 - Math.cos(dLon)) / 2;

        //return R * 2 * Math.asin(Math.sqrt(a));
        var dDistance = -1.7976931348623157E+308;
        var dLat1InRad = lat1 * (Math.PI / 180.0);
        var dLong1InRad = lon1 * (Math.PI / 180.0);
        var dLat2InRad = lat2 * (Math.PI / 180.0);
        var dLong2InRad = lon2 * (Math.PI / 180.0);

        var dLongitude = dLong2InRad - dLong1InRad;
        var dLatitude = dLat2InRad - dLat1InRad;

        // Intermediate result a.
        var a = Math.pow(Math.sin(dLatitude / 2.0), 2.0) +
            Math.cos(dLat1InRad) * Math.cos(dLat2InRad) *
            Math.pow(Math.sin(dLongitude / 2.0), 2.0);

        // Intermediate result c (great circle distance in Radians).
        var c = 2.0 * Math.asin(Math.sqrt(a));

        // Distance.
        // const Double kEarthRadiusMiles = 3956.0;
        // var kEarthRadiusKms = 6376.5; // converting to KM
        var kEarthRadiusKms = 6371e3;
        dDistance = kEarthRadiusKms * c;

        return dDistance;
    },

    //drawingManagerTool: function (mode, drawingOption) {

    //    var drawingManager = new google.maps.drawing.DrawingManager();

    //   drawingManager.setMap(null);

    //    drawingManager.setOptions({
    //        drawingMode: mode, //
    //        drawingControl: true,
    //        drawingControlOptions: {
    //            position: google.maps.ControlPosition.TOP_CENTER,
    //            drawingModes: [mode]
    //        },
    //        options: drawingOption,
    //    });

    //    return drawingManager;
    //},

    //drawingManagerTool: function (map, strDrawingMode, drawingControlModes, drawingOption) {

    //    var drawingManager = new google.maps.drawing.DrawingManager();

    //    var drawingMode = getDrawingMode(strDrawingMode);

    //    drawingManager.setOptions({
    //        drawingMode: drawingMode,
    //        drawingControl: true,
    //        drawingControlOptions: {
    //            position: google.maps.ControlPosition.TOP_LEFT,
    //            drawingModes: drawingControlModes
    //        },
    //        options: drawingOption
    //    });

    //    drawingManager.setMap(map);

    //    return drawingManager;
    //},

    DrawRectwithRadius: function (_map, lat, lng, width, height, color) {
        var center = new google.maps.LatLng(lat, lng);
        var NORTH = 0;
        var WEST = -90;
        var SOUTH = 180;
        var EAST = 90;
        var north = google.maps.geometry.spherical.computeOffset(center, height / 2, NORTH);
        var south = google.maps.geometry.spherical.computeOffset(center, height / 2, SOUTH);

        var northEast = google.maps.geometry.spherical.computeOffset(north, width / 2, EAST);
        var northWest = google.maps.geometry.spherical.computeOffset(north, width / 2, WEST);

        var southEast = google.maps.geometry.spherical.computeOffset(south, width / 2, EAST);
        var southWest = google.maps.geometry.spherical.computeOffset(south, width / 2, WEST);

        var corners = [northEast, northWest, southWest, southEast];

        var rect = new google.maps.Polygon({
            // paths: corners,
            strokeColor: color,
            strokeOpacity: 0.9,
            strokeWeight: 1,
            fillColor: color,
            fillOpacity: 0.3,

        });

        var path = rect.getPath();

        for (var i = 0; i < corners.length; i++) {
            path.push(new google.maps.LatLng(corners[i].lat(), corners[i].lng()));
        }

        return rect;
    },

    DrawPolylinewithLineSymbol: function (path, id) {
        var lineSymbol = {
            path: 'M 0,-1 0,1',
            strokeOpacity: 1,
            scale: 4
        };
        var microDuctLine = new google.maps.Polyline({
            strokeColor: '#FFA500',
            path: path,
            strokeOpacity: 0,
            id: id,
            editable: true,
            icons: [{
                icon: lineSymbol,
                offset: '0',
                repeat: '20px'
            }]
        });
        return microDuctLine;
    }
};
