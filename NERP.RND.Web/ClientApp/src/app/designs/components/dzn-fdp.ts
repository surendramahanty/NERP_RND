import { Component, Input, OnInit } from '@angular/core';
import { Design, FDPSettings } from '../models/design';
import { FDP } from '../../entities/models/fdp';
import { Helper } from '../../common/helper';
import { GeoHelper } from '../../common/geo/geoHelper';
import { Point } from '../../common/geo/geometry';

declare var $: any;
declare var shp: any;
declare var toGeoJSON: any;

@Component({
    selector: 'dzn-fdp',
    templateUrl: './dzn-fdp.html'
})
export class DesignFPDs {

    @Input() fdpSettings: FDPSettings = new FDPSettings();
    @Input() allDesigns: Design[] = new Array<Design>();

    selectedFDP: FDP;
    //existingFDPs: FDP[] = new Array<FDP>();

    constructor(private helper: Helper) { }

    add() {

        if (this.fdpSettings.aggregateFdps == null) this.fdpSettings.aggregateFdps = new Array<FDP>();

        if (this.selectedFDP) {
            var index = this.fdpSettings.aggregateFdps.findIndex(x => x.code == this.selectedFDP.code);

            if (index == -1) {
                this.fdpSettings.aggregateFdps.push(this.selectedFDP);
                this.selectedFDP = null;
            }

        }
    }

    remove(index: number) {
        this.fdpSettings.aggregateFdps.splice(index, 1);
    }

    fileChangeEvent(event: any) {

        if (this.fdpSettings.fdps)
            this.fdpSettings.fdps.length = 0;

        if (this.fdpSettings.aggregateFdps)
            this.fdpSettings.aggregateFdps.length = 0;

        var file = event.target.files[0];

        var reader = new FileReader();

        var fileExt = file.name.split('.').pop().toLowerCase();

        reader.onload = (e) => {

            try {

                if (fileExt == "kml") {
                    let kml = reader.result as string;
                    let geojson = toGeoJSON.kml((new DOMParser()).parseFromString(kml, 'text/xml'));
                    this.populateFDPs(geojson.features);
                }
                else if (fileExt == "zip") {
                    shp(reader.result as ArrayBuffer).then((geojson) => {
                        this.populateFDPs(geojson.features);
                    });
                }
                else if (fileExt == "csv") {
                    let csv = reader.result as string;
                    this.populateFDPsCsv(csv);
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

    populateFDPs(features: any) {

        this.fdpSettings.fdps.length = 0;

        for (var i = 0; i < features.length; i++) {
            let properties = features[i].properties;

            let latLng = GeoHelper.convertToPosition([features[i].geometry.coordinates[0], features[i].geometry.coordinates[1]]);
            const isValid: Error = GeoHelper.validateCoordinates(latLng);

            if ((isValid instanceof Error) == false) {

                let index = this.fdpSettings.fdps.findIndex(x => x.code == properties.Test);

                if (index == -1) {
                    let fdp = {
                        name: properties.Test,
                        code: properties.Test,
                        geometry: new Point([latLng.lng, latLng.lat]),
                    };

                    this.fdpSettings.fdps.push(fdp);
                }
            }
        }
    }

    populateFDPsCsv(csvData: any) {

        this.fdpSettings.fdps.length = 0;

        var allRows = csvData.split(/\r?\n|\r/);

        for (var i = 1; i < allRows.length; i++) {

            if (allRows[i].trim() == "") continue;

            let properties = allRows[i].split(',');
            let lat = parseFloat(properties[3]);
            let lng = parseFloat(properties[4]);

            let latLng = GeoHelper.convertToPosition([lng, lat]);

            const isValid: Error = GeoHelper.validateCoordinates(latLng);

            if ((isValid instanceof Error) == false) {
                let index = this.fdpSettings.fdps.findIndex(x => x.code == properties.Test);

                if (index == -1) {
                    let fdp = {
                        name: properties[1],
                        code: properties[0],
                        geometry: new Point([lng, lat]),
                    };

                    this.fdpSettings.fdps.push(fdp);
                }
            }
        }
    }

    onDesignChange(designId: string) {

        let design = this.allDesigns.find(x => x.id == designId);

        if (design.networkSettings && design.networkSettings[0].fdpNode)
            this.fdpSettings.fdps = design.networkSettings[0].fdpNode.fdpSettings.fdps;
    }
}
