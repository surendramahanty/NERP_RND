import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HomepassService } from '../services/homepass.service';
import { Helper } from '../../common/helper';
import { Homepass } from '../models/homepass';
import { GeoHelper } from '../../common/geo/geoHelper';
import { GMapsHelper } from '../../common/geo/googleMapsHelper';
import { Point, Polygon } from '../../common/geo/geometry';
import { AppConfig } from '../../app.config';

declare var $: any;
declare var shp: any;
declare var toGeoJSON: any;
declare var google: any;

@Component({
    templateUrl: './homepass-details.html',
    providers: [HomepassService],
})
export class HomepassDetails implements OnInit {

    homepassId: string;
    homepass: Homepass;
    homepasses: Homepass[] = new Array<Homepass>();
    tabTitle: string = "Add New";
    title: string = "New Homepass";
    isNew = true;
    map: any;
    polyOptions: any;

    constructor(
        private location: Location,
        private route: ActivatedRoute,
        private appConfig: AppConfig,
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
        this.map = GMapsHelper.initializeMap('homepassMap', location, 18, 21);

        this.route.params.subscribe(
            params => {
                this.homepassId = params['id'];

                if (this.homepassId == null) {
                    this.title = "New Homepass";
                    this.isNew = true;
                }
                else {
                    this.title = "Edit Homepass";
                    this.tabTitle = "Edit Homepass";
                    this.isNew = false;
                }

                this.getFormData(this.homepassId);
            });

        GMapsHelper.addListener(this.map, 'dblclick', (event) => {

            this.homepass = {
                name: "",
                code: "",
                description: "",
                type: "",
                geometry: new Point([event.latLng.lng(), event.latLng.lat()]),
                area: null,
                connections: 1,
            };

            this.homepasses.push(this.homepass);
            this.addHomepassMarker(this.homepass);

        });
    }

    getFormData(homepassId: string) {

        this.homepassService.getHomepass(homepassId).subscribe(
            resp => {

                this.homepass = null;

                if (resp.status.toLowerCase() == "error") {
                    this.helper.showAlertMessage(resp.message, "error");
                }
                else {
                    if (resp.data != null) {
                        this.homepass = resp.data;
                        this.homepasses.push(this.homepass);
                        this.map.setCenter({ lat: this.homepass.geometry.coordinates[1], lng: this.homepass.geometry.coordinates[0] });

                        if (this.homepass.area)
                            this.addHomepassPolygon(this.homepass);
                        else
                            this.addHomepassMarker(this.homepass);
                    }
                }

                $("#ajax-loading").hide();
            },
            (err) => {
                $("#ajax-loading").hide();
                this.homepass = null;
                let msg = `Unable to fetch homepass : ${err.message}`;
                this.helper.showAlertMessage(msg, "error");
            });
    }

    addHomepassMarker(homepass: Homepass) {

        var location = GeoHelper.convertToPosition(homepass.geometry.coordinates);

        var icon = {
            url: "images/map-entities/homepass.png",
            //scaledSize: new google.maps.Size(30, 30), // scaled size
            //origin: new google.maps.Point(0, 0), // origin
            //anchor: new google.maps.Point(0, 0) // anchor
        };

        var marker = new google.maps.Marker({
            position: location,
            icon: icon,
            draggable: false,
            cursor: 'pointer',
            id: homepass.id,
            code: homepass.code,
            data: homepass,
            map: this.map
        });

        marker.setTitle(homepass.name);

        homepass.marker = marker;

        GMapsHelper.addListener(marker, "rightclick", (event) => {
            if (marker.draggable == true) {
                marker.setOptions({ draggable: false });

                marker.data.geometry.coordinates[0] = event.latLng.lng();
                marker.data.geometry.coordinates[1] = event.latLng.lat();
                this.homepass = marker.data;
            }
            else
                marker.setOptions({ draggable: true });
        });

        //GMapsHelper.addListener(marker, 'dragend', (event) => {


        //});

        GMapsHelper.addListener(marker, 'click', (event) => {
            this.homepass = marker.data;
        });
    }

    addHomepassPolygon(homepass: Homepass) {

        var polygon = GMapsHelper.createPolygon(homepass.area.coordinates, this.polyOptions);

        polygon.setMap(this.map);
        polygon.data = homepass;

        //polygon.setTitle(homepass.name);

        homepass.marker = polygon;

        this.addCentroidMarker(polygon.data);

        GMapsHelper.addListener(polygon, "rightclick", (event) => {

            if (polygon.draggable == true) {

                polygon.setOptions({ draggable: false, editable: false });

                if (homepass["centroidMarker"])
                    homepass["centroidMarker"].setMap(null);

                var coords = polygon.getPath().getArray();

                let newCoords = new Array<number[]>();

                coords.forEach(x => {
                    newCoords.push([x.lng(), x.lat()]);
                });

                newCoords.push(newCoords[0]);

                let centroid = new Point(GeoHelper.polygonCenter(new Polygon([newCoords])));

                polygon.data.area.coordinates = [newCoords];

                polygon.data.geometry = centroid;

                this.addCentroidMarker(polygon.data);

                this.homepass = polygon.data;
            }
            else
                polygon.setOptions({ draggable: true, editable: true });
        });

        GMapsHelper.addListener(polygon, 'click', (event) => {
            this.homepass = polygon.data;
        });
    }

    addCentroidMarker(homepass: Homepass) {

        var location = GeoHelper.convertToPosition(homepass.geometry.coordinates);

        var icon = {
            url: "images/map-entities/homepass.png",
        };

        var marker = new google.maps.Marker({
            position: location,
            icon: icon,
            draggable: false,
            cursor: 'pointer',
            map: this.map
        });

        marker.setTitle(homepass.name);

        homepass["centroidMarker"] = marker;
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
                    this.populateHomepasses(geojson.features);
                }
                else if (fileExt == "zip") {
                    shp(reader.result as ArrayBuffer).then((geojson) => {
                        this.populateHomepasses(geojson.features);
                    });
                }
                else if (fileExt == "csv") {
                    let csv = reader.result as string;
                    this.populateHomepassesCsv(csv);
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

    populateHomepasses(features: any) {

        this.homepasses.length = 0;

        let homepasses = new Array<Homepass>();

        for (var i = 0; i < features.length; i++) {
            let properties = features[i].properties;

            //let latLng = GeoHelper.convertToPosition([properties.Longitude, properties.Latitude]);
            //const isValid: Error = GeoHelper.validateCoordinates(latLng);

            //if ((isValid instanceof Error) == false) {

            let centroid = null;
            let polygon = null;

            if (features[i].geometry.type.toLowerCase() == 'polygon') {
                polygon = features[i].geometry;
                centroid = new Point(GeoHelper.polygonCenter(features[i].geometry));
            }
            else {
                centroid = features[i].geometry;
            }

            let homepass = {
               name: properties.Building_T,
               code: properties.Id ? properties.Id : properties.Building_T,
                description: "",
                type: "",
                geometry: centroid,
                area: polygon,
                connections: 1,
            };

            homepasses.push(homepass);

            if (homepass.area)
                this.addHomepassPolygon(homepass);
            else
                this.addHomepassMarker(homepass);
            //}
        }

        this.homepasses = homepasses;
    }

    populateHomepassesCsv(csvData: any) {

        this.homepasses.length = 0;

        let homepasses = new Array<Homepass>();

        var allRows = csvData.split(/\r?\n|\r/);

        for (var i = 1; i < allRows.length; i++) {

            if (allRows[i].trim() == "") continue;

            let properties = allRows[i].split(',');
            let lat = parseFloat(properties[3]);
            let lng = parseFloat(properties[4]);

            let latLng = GeoHelper.convertToPosition([lng, lat]);

            const isValid: Error = GeoHelper.validateCoordinates(latLng);

            if ((isValid instanceof Error) == false) {
                let homepass = {
                    name: properties[1],
                    code: properties[0],
                    description: "",
                    type: "",
                    geometry: new Point([lng, lat]),
                    area: null,
                    connections: properties[5],
                };

                homepasses.push(homepass);

                this.addHomepassMarker(homepass);
            }
        }

        this.homepasses = homepasses;
    }

    removeUploadedHomepass(index: number) {
        var homepass = this.homepasses[index];

        if (homepass.marker)
            homepass.marker.setMap(null);

        if (this.homepasses[index]["centroidMarker"])
            this.homepasses[index]["centroidMarker"].setMap(null);

        this.homepasses.splice(index, 1);

    }

    save() {

        var errorMessages = this.validateHomepass(this.homepasses);

        if (errorMessages.length == 0) {

            this.homepasses.forEach(x => x.marker = null);
            this.homepasses.forEach(x => {
                if (x["centroidMarker"])
                    x["centroidMarker"] = null;
            });

            this.homepassService.saveHomepasses(this.homepasses).subscribe(
                resp => {
                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        this.helper.showAlertMessage("Homepass information saved", "success");
                        this.goBack();
                    }
                },
                (err) => {
                    this.helper.showAlertMessage("Unable to save homepass information.", "error");
                });
        }
        else {
            var errorMessage = this.helper.getErrorMessagesText(errorMessages);
            this.helper.showAlertMessage(errorMessage, "error");
        }
    }

    validateHomepass(homepasses: Homepass[]): string[] {
        var errorMessages = [];

        this.homepasses.forEach(homepass => {

            if (homepass.name == null || homepass.name.trim() == '')
                errorMessages.push("Homepass Name cannot be empty");

            if (homepass.code == null || homepass.code.trim() == '')
                errorMessages.push("Homepass Code cannot be empty");
        });

        return errorMessages;
    }

    deleteHomepass() {
        var index = this.homepasses.findIndex(x => x.geometry.coordinates[0] == this.homepass.geometry.coordinates[0] && x.geometry.coordinates[1] == this.homepass.geometry.coordinates[1]);

        if (this.homepasses[index].marker)
            this.homepasses[index].marker.setMap(null);

        if (this.homepasses[index]["centroidMarker"])
            this.homepasses[index]["centroidMarker"].setMap(null);

        this.homepasses.splice(index, 1);

        if (this.isNew == false) {
            this.homepassService.deleteHomepass(this.homepass.id).subscribe(
                resp => {
                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        this.helper.showAlertMessage("Homepass successfully deleted", "success");
                        this.goBack();
                    }
                },
                (err) => {
                    this.helper.showAlertMessage("Unable to delete homepass information.", "error");
                });
        }
        else {
            this.homepass = null;
        }
    }

    stringify(obj: any): string {
        return JSON.stringify(obj);
    }

    goBack(): void {
        this.location.back();
    }
}
