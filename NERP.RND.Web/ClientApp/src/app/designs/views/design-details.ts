import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DesignService } from '../services/design.service';
import { Design } from '../models/design';
import { Helper } from '../../common/helper';
import { DesignHelper } from '../services/design.helper';
import { GeoNode } from '../../common/geo/geoNode';
import { BomHelper } from '../services/bom.helper';

declare var $: any;

@Component({
    templateUrl: './design-details.html',
    providers: [DesignService],
})
export class DesignDetails implements OnInit {

    referenceId: string = "";
    design: Design = new Design();
    designs: Design[] = new Array<Design>();
    allDesigns: Design[] = new Array<Design>();
    title: string = "New Design";

    constructor(
        private location: Location,
        private route: ActivatedRoute,
        private designService: DesignService,
        private designHelper: DesignHelper,
       private helper: Helper,
       private bomHelper: BomHelper) {
    }

    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.referenceId = params['id'];

                if (this.referenceId == null)
                    this.title = "New Design";
                else
                    this.title = "Edit Design";

                this.getFormData(this.referenceId);
            });
    }

    getFormData(referenceId: string) {

        $("#ajax-loading").show();

        this.designService.getDesigns().subscribe(
            resp => {

                if (resp.status.toLowerCase() == "error") {
                    this.helper.showAlertMessage(resp.message, "error");
                }
                else {
                    if (resp.data != null && resp.data.length > 0) {
                        this.allDesigns = resp.data;

                        if (this.allDesigns && this.allDesigns.length > 0)
                            this.designs = this.allDesigns.filter(x => x.referenceId == referenceId);

                        if (this.designs && this.designs.length > 0) {
                            let latestVersion = Math.max.apply(Math, this.designs.map(function (o) { return o.version; }))
                            this.design = this.designs.find(x => x.version == latestVersion);
                        }

                       this.allDesigns = this.allDesigns.filter(x => x.id != this.design.id);

                       if (this.design.bluePrint) {
                          this.bomHelper.generateBOQ(this.design);
                       }

                    }
                }

                $("#ajax-loading").hide();
            },
            (err) => {
                $("#ajax-loading").hide();
                let msg = `Unable to fetch design : ${err.message}`;
                this.helper.showAlertMessage(msg, "error");
            });
    }

    onVersionChange(event: any) {
        this.design = this.designs.find(x => x.version == event);
    }

    async generateDesign() {
        await this.designHelper.generateDesign(this.design);
    }

    save() {

        var errorMessages = this.validateDesign(this.design);

        if (errorMessages.length == 0) {

            this.clearMapObjects(this.design.bluePrint);

            this.designService.saveDesign(this.design).subscribe(
                resp => {
                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.helper.showAlertMessage("Design information saved", "success");
                            this.goBack();
                        }
                        else
                            this.helper.showAlertMessage("Unable to save design information.", "error");
                    }
                },
                (err) => {
                    this.helper.showAlertMessage("Unable to save design information.", "error");
                });
        }
        else {
            var errorMessage = this.helper.getErrorMessagesText(errorMessages);
            this.helper.showAlertMessage(errorMessage, "error");
        }
    }

    clearMapObjects(group: GeoNode) {

        if (group) {

            if (group.children)
                group.children.forEach(x => {
                    this.removeMapObject(x);
                });

            if (group.segments) {
                group.segments.forEach(x => {

                    this.removeMapObject(x.cable);

                    this.removeMapObject(x.chambers);

                    this.removeMapObject(x.ducts);

                    this.removeMapObject(x.odfs);

                    this.removeMapObject(x.poles);

                    this.removeMapObject(x.splitters);

                    this.removeMapObject(x.spliceClosures);
                    this.removeMapObject(x.fdts);
                   this.removeMapObject(x.fats);
                   this.removeMapObject(x.microduct);
                });
            }

            if (group.children && group.children.length > 0)
                group.children.forEach(g => {
                    this.clearMapObjects(g);
                });
        }

    }


    removeMapObject(entities: any) {

        if (entities) {
            if (entities.length > 0) {
                entities.forEach(x => {
                    if (x['mapObject']) {
                        x['mapObject'] = null;
                    }
                });
            }
            else {
                if (entities['mapObject']) {
                    entities['mapObject'] = null;
                }
            }
        }
    }

    saveNewVersion() {
        let latestVersion = Math.max.apply(Math, this.designs.map(function (o) { return o.version; }))

        this.design.id = null;
        this.design.version = latestVersion + 1;

        this.save();

    }

    validateDesign(design: Design): string[] {
        var errorMessages = [];

        if (design.name == null || design.name.trim() == '')
            errorMessages.push("Design name cannot be empty");

        if (design.code == null || design.code.trim() == '')
            errorMessages.push("Design code cannot be empty");

        return errorMessages;
    }

    goBack(): void {
        this.location.back();
    }
}
