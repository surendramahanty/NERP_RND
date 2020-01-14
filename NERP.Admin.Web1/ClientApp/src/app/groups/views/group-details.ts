import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { forkJoin } from 'rxjs';

import { Group } from '../models/group';
import { GroupService } from '../services/group.service';
import { Helper } from '../../common/helper';
import { Module } from '../../modules/models/module';
import { ModuleService } from '../../modules/services/module.service';


@Component({
    templateUrl: './group-details.html',
    providers: [GroupService, ModuleService],
})
export class GroupDetails implements OnInit {

    groupId: string = "";
    group: Group = new Group();
    modules: Module[] = new Array<Module>();
    treeModules: any;
    selectedModules: any;
    title: string = "New Group";

    constructor(
        private location: Location,
        private route: ActivatedRoute,
        private groupService: GroupService,
        private moduleService: ModuleService,
        private helper: Helper) { }


    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.groupId = params['id'];

                if (this.groupId == null)
                    this.title = "New Group";
                else
                    this.title = "Edit Group";

                this.getFormData(this.groupId);
            });
    }

    getFormData(groupId: string) {

        let groupsSvc = this.groupService.getGroup(groupId);
        let modulesSvc = this.moduleService.getModules(null);

        forkJoin([modulesSvc, groupsSvc]).subscribe(results => {

            if (results[0] && results[0].data) {
                this.modules = results[0].data;

                let treeNodes = [];

                this.modules.forEach(m => {
                    let parentId = m.parentId == null ? "0" : m.parentId;
                    treeNodes.push({ name: m.name, id: m.id, parentId: parentId });
                    m.features.forEach(f => {
                        treeNodes.push({ name: f.name, id: f.code, parentId: m.id, isFeature: true });
                    });
                });

                this.treeModules = this.helper.generateTreeTable(treeNodes, "0", true);
            }

            if (groupId && results[1]) {

                if (results[1].status.toLowerCase() == "error") {
                    this.helper.showAlertMessage(results[1].message, "error");
                }
                else {
                    if (results[1].data != null) {
                        this.group = results[1].data;
                        this.selectedModules = [];

                        //this.group.modules.forEach(x => {
                        //    let module = this.treeModules.find(m => m.id == x);
                        //    //module.parent = null;

                        //    //module.partialSelected = false;
                        //    this.selectedModules.push(module);
                        //});

                        this.group.moduleFeatures.forEach(x => {

                            x.featureCodes.forEach(code => {

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
                this.group = new Group();
        });
    }

    async saveGroup() {

        let errorMessages = await this.validateGroup(this.group);

        this.group.moduleFeatures = [];

        var features = this.selectedModules.filter(x => x.isFeature == true);

        features.forEach(f => {
            var index = this.group.moduleFeatures.findIndex(x => x.moduleId == f.parentId);

            if (index < 0) {
                this.group.moduleFeatures.push({
                    moduleId: f.parentId,
                    moduleName: f.parent.name,
                    featureCodes: [f.id]
                });
            }
            else {
                this.group.moduleFeatures[index].featureCodes.push(f.id);
            }
        });

        if (errorMessages.length == 0) {

            this.groupService.saveGroup(this.group).subscribe(
                resp => {
                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.helper.showAlertMessage("Group information saved", "success");
                            this.goBack();
                        }
                        else
                            this.helper.showAlertMessage("Unable to save group information.", "error");
                    }
                },
                (err) => {
                    this.helper.showAlertMessage("Unable to save group information.", "error");
                });
        }
        else {
            let errorMessage = this.helper.getErrorMessagesText(errorMessages);
            this.helper.showAlertMessage(errorMessage, "error");
        }
    }

    async validateGroup(group: Group): Promise<string[]> {
        let errorMessages = [];

       if (group.name == null || group.name.trim() == '')
          errorMessages.push("Group name cannot be empty");
       else {
          let resp = await this.groupService.checkNameExists(group.name);

          if (resp.data != null && resp.data != group.id)
             errorMessages.push("Name already exists.");
       }
        return errorMessages;
    }

    goBack(): void {
        this.location.back();
    }
}
