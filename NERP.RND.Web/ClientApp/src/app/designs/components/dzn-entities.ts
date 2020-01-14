import { Component, Input, OnInit } from '@angular/core';
import { Design, EntitySettings } from '../models/design';
import { SplitterService } from '../../entities/services/splitter.service';
import { Splitter } from '../../entities/models/splitter';
import { SpliceClosure } from '../../entities/models/spliceClosure';
import { SpliceClosureService } from '../../entities/services/spliceClosure.service';
import { Pole } from '../../entities/models/pole';
import { ODF } from '../../entities/models/odf';
import { Chamber } from '../../entities/models/chamber';
import { PoleService } from '../../entities/services/pole.service';
import { ODFService } from '../../entities/services/odf.service';
import { ChamberService } from '../../entities/services/chamber.service';
import { Helper } from '../../common/helper';
import { GeoHelper } from '../../common/geo/geoHelper';
import { Point } from '../../common/geo/geometry';

declare var $: any;
declare var shp: any;
declare var toGeoJSON: any;

@Component({
    selector: 'dzn-entities',
    templateUrl: './dzn-entities.html'
})
export class DesignEntities implements OnInit {

    @Input() entitySettings: EntitySettings = new EntitySettings();
    @Input() allDesigns: Design[] = new Array<Design>();

    selectedEntity: any;
    masterEntities: any;
    entities = [];
    designEntities: any;

    constructor(
        private chamberService: ChamberService,
        private odfService: ODFService,
        private poleService: PoleService,
        private spliceClosureService: SpliceClosureService,
        private splitterService: SplitterService,
        private helper: Helper
    ) { }

    ngOnInit() {
        this.loadMasterEntities(this.entitySettings.entityName);
        this.initializeEntities();
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
        }
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

            default:
                masterSvc = this.splitterService.getSplitters();
                break;
        }

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

    addEntity() {

        if (this.entities == null) this.entities = [];

        if (this.selectedEntity) {
            var index = this.entities.findIndex(x => x.id == this.selectedEntity.id);

            if (index == -1) {
                this.entities.push(this.selectedEntity);
                this.selectedEntity = null;
            }

        }
    }

    removeEntity(index: number) {
        this.entities.splice(index, 1);
    }

    fileChangeEvent(event: any) {

        this.entitySettings.chambers = null;
        this.entitySettings.odfs = null;
        this.entitySettings.poles = null;
        this.entitySettings.spliceClosures = null;
        this.entitySettings.splitters = null;

        this.initializeEntities();

        var file = event.target.files[0];

        var reader = new FileReader();

        var fileExt = file.name.split('.').pop().toLowerCase();

        reader.onload = (e) => {

            try {

                if (fileExt == "kml") {
                    let kml = reader.result as string;
                    let geojson = toGeoJSON.kml((new DOMParser()).parseFromString(kml, 'text/xml'));
                    this.populateEntities(geojson.features);
                }
                else if (fileExt == "zip") {
                    shp(reader.result as ArrayBuffer).then((geojson) => {
                        this.populateEntities(geojson.features);
                    });
                }
                else if (fileExt == "csv") {
                    let csv = reader.result as string;
                    this.populateEntitiesCsv(csv);
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

    populateEntities(features: any) {

        this.entities.length = 0;

        for (var i = 0; i < features.length; i++) {
            let properties = features[i].properties;

            let latLng = GeoHelper.convertToPosition([features[i].geometry.coordinates[0], features[i].geometry.coordinates[1]]);
            const isValid: Error = GeoHelper.validateCoordinates(latLng);

            if ((isValid instanceof Error) == false) {

                let index = this.entities.findIndex(x => x.code == properties.name);

                if (index == -1) {
                    let entity = {
                        name: properties.name,
                       code: properties.name,
                       geometry: new Point([latLng.lng, latLng.lat]),

                    };
                   entity["splitterRatio"] = "1:8";
                    this.entities.push(entity);
                }
            }
        }
    }

    populateEntitiesCsv(csvData: any) {

        this.entities.length = 0;

        var allRows = csvData.split(/\r?\n|\r/);

        for (var i = 1; i < allRows.length; i++) {

            if (allRows[i].trim() == "") continue;

            let properties = allRows[i].split(',');
            let lat = parseFloat(properties[3]);
            let lng = parseFloat(properties[4]);

            let latLng = GeoHelper.convertToPosition([lng, lat]);

            const isValid: Error = GeoHelper.validateCoordinates(latLng);

            if ((isValid instanceof Error) == false) {
                let index = this.entities.findIndex(x => x.code == properties.Test);
                if (index == -1) {
                    let entity = {
                        name: properties[1],
                        code: properties[0],
                        geometry: new Point([lng, lat]),
                    };

                    this.entities.push(entity);
                }
            }
        }
    }

    onDesignChange(designId: string) {

        let design = this.allDesigns.find(x => x.id == designId);

    }

    onDesignEntityChange(designEntity) {

    }
}
