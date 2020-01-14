import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { forkJoin } from 'rxjs';

import { LayerService } from '../services/layer.service';
import { ModuleService } from '../../modules/services/module.service';
import { Helper } from '../../common/helper';
import { Layer } from '../models/layer';
import { Module } from '../../modules/models/module';
import { TreeNode } from 'primeng/components/common/treenode';

@Component({
    templateUrl: './layer-details.html',
    providers: [LayerService, ModuleService],
})
export class LayerDetails implements OnInit {

    layerId: string = "";
    layer: Layer = new Layer();
    modules: Module[] = new Array<Module>();
    treeModules: any;
    selectedModules: any;
    title: string = "New Layer";

    constructor(
        private location: Location,
        private route: ActivatedRoute,
        private layerService: LayerService,
        private moduleService: ModuleService,
        private helper: Helper) { }

    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.layerId = params['id'];

                if (this.layerId == null)
                    this.title = "New Layer";
                else
                    this.title = "Edit Layer";

                this.getFormData(this.layerId);
            });
    }

    getFormData(layerId: string) {

        let layersSvc = this.layerService.getLayer(layerId);
        let modulesSvc = this.moduleService.getModules(null);

        forkJoin([modulesSvc, layersSvc]).subscribe(results => {

            if (results[0] && results[0].data) {
                this.modules = results[0].data;

                let treeNodes = [];

                this.modules.forEach(m => {
                    let parentId = m.parentId == null ? "0" : m.parentId;
                    treeNodes.push({ name: m.name, id: m.id, parentId: parentId });
                    m.permissions.forEach(f => {
                        treeNodes.push({ id: f.code, name: f.name, parentId: m.id, isPermission: true });
                    });
                });

                this.treeModules = this.helper.generateTreeTable(treeNodes, "0", true);
            }

            if (layerId && results[1]) {
                if (results[1].status.toLowerCase() == "error") {
                    this.helper.showAlertMessage(results[1].message, "error");
                }
                else {
                    if (results[1].data != null) {
                        this.layer = results[1].data;
                        this.selectedModules = [];

                        this.layer.modulePermissions.forEach(x => {

                            //this.checkNode(this.treeModules, x.permissionCodes);

                            x.permissionCodes.forEach(code => {

                                var node = null;

                                for (var i = 0; i < this.treeModules.length; i++) {
                                    node = this.helper.findNode(code, this.treeModules[i]);

                                    if (node) break;
                                }

                                if (node) {
                                    this.selectedModules.push(node);
                                }
                            });

                        });
                    }
                    else
                        this.helper.showAlertMessage(results[1].message, "error");
                }
            }
            else
                this.layer = new Layer();
        });
    }

    //checkNode(nodes: any, str: string[]) {
    //    for (let i = 0; i < nodes.length; i++) {
    //        //if (!nodes[i].leaf && nodes[i].children[0].leaf) {
    //            for (let j = 0; j < nodes[i].children.length; j++) {
    //                if (str.includes(nodes[i].children[j].id)) {
    //                    if (!this.selectedModules.includes(nodes[i].children[j])) {
    //                        this.selectedModules.push(nodes[i].children[j]);
    //                    }
    //                }
    //            }
    //        //}
    //        //if (nodes[i].leaf) {
    //        //    return;
    //        //}
    //        this.checkNode(nodes[i].children, str);
    //        let count = nodes[i].children.length;
    //        let c = 0;
    //        for (let j = 0; j < nodes[i].children.length; j++) {
    //            if (this.selectedModules.includes(nodes[i].children[j])) {
    //                c++;
    //            }
    //            if (nodes[i].children[j].partialSelected) nodes[i].partialSelected = true;
    //        }
    //        if (c == 0) { }
    //        else if (c == count) {
    //            nodes[i].partialSelected = false;
    //            if (!this.selectedModules.includes(nodes[i])) {
    //                this.selectedModules.push(nodes[i]);
    //            }
    //        }
    //        else {
    //            nodes[i].partialSelected = true;
    //        }
    //    }
    //}

    save() {

        let errorMessages = this.validateLayer(this.layer);

        this.layer.modulePermissions = [];

        var features = this.selectedModules.filter(x => x.isPermission == true);

        features.forEach(f => {
            var index = this.layer.modulePermissions.findIndex(x => x.moduleId == f.parentId);

            if (index < 0) {


                this.layer.modulePermissions.push({
                    moduleId: f.parentId,
                    permissionCodes: [f.id]
                });
            }
            else {
                this.layer.modulePermissions[index].permissionCodes.push(f.id);
            }
        });

        if (errorMessages.length == 0) {

            this.layerService.saveLayer(this.layer).subscribe(
                resp => {
                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.helper.showAlertMessage("Layer information saved", "success");
                            this.goBack();
                        }
                        else
                            this.helper.showAlertMessage("Unable to save layer information.", "error");
                    }
                },
                (err) => {
                    this.helper.showAlertMessage("Unable to save layer information.", "error");
                });
        }
        else {
            let errorMessage = this.helper.getErrorMessagesText(errorMessages);
            this.helper.showAlertMessage(errorMessage, "error");
        }
    }

    validateLayer(layer: Layer): string[] {
        let errorMessages = [];

        if (layer.name == null || layer.name.trim() == '')
            errorMessages.push("Layer name cannot be empty");

        return errorMessages;
    }

    goBack(): void {
        this.location.back();
    }
}
