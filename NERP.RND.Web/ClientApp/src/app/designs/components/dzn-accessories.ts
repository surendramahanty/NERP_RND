import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Design, AccessorySettings } from '../models/design';
import { AccessoryService } from '../../accessories/services/accessory.service';
import { ConditionOperator, Operator, SortOrder } from '../../common/models/paginationRequest';
import { Accessory } from '../../accessories/models/accessory';

@Component({
    selector: 'dzn-accessories',
    templateUrl: './dzn-accessories.html'
})
export class DesignAccessories implements OnChanges {

    @Input() accessorySettings: AccessorySettings = new AccessorySettings();
    @Input() parentEntityType: string;
    @Input() allDesigns: Design[] = new Array<Design>();

    accessoriesMaster: Accessory[] = new Array<Accessory>();
    statusMessage: string;
    selectedAccessory: Accessory;
    //designAccessories: any;

    constructor(private accessoryService: AccessoryService) { }

    ngOnChanges(changes: SimpleChanges) {

        if (this.parentEntityType)
            this.getMasterAccessories(this.parentEntityType);
    }

    getMasterAccessories(parentEntityType: string) {

        //this.accessorySettings.existingAccessories = null;

        var paginationRequest = {
            page: null,
            pageSize: null,
            filter: {
                conditionOperator: ConditionOperator.AND,
                filters: [{
                    propertyName: "ParentEntityType",
                    operator: Operator.equals,
                    value: parentEntityType.toLowerCase(),
                    caseSensitive: false
                }]
            },
            order: {
                orderByProperty: "UpdatedDate",
                sortOrder: SortOrder.descending
            }
        };

        this.accessoryService.getAccessories(paginationRequest).subscribe(
            resp => {
                this.accessoriesMaster = null;
                if (resp.status.toLowerCase() == "error") {
                    this.statusMessage = resp.message;
                }
                else {
                    if (resp.data != null && resp.data.length > 0) {
                        this.accessoriesMaster = resp.data;

                    }
                    else {
                        this.statusMessage = "There are no registered accessories.";
                    }
                }
            },
            (err) => {
                this.accessoriesMaster = null;
                this.statusMessage = "Error fetching accessories.";
            });
    }

    //fileChangeEvent(event: any) {
    //    var files = event.target.files;

    //    //this.populateDummyData();
    //}

    addAccessory() {
        if (this.accessorySettings.accessories == null)
            this.accessorySettings.accessories = new Array<Accessory>();

        var index = this.accessorySettings.accessories.findIndex(x => x.id == this.selectedAccessory.id);

        if (index == -1)
            this.accessorySettings.accessories.push(this.selectedAccessory);
    }

    //getName(id: string) {

    //    let accessory = this.accessoriesMaster.find(x => x.id == id);

    //    if (accessory)
    //        return accessory.name;
    //    else
    //        return '';
    //}

    removeAccessory(index: number) {
        this.accessorySettings.accessories.splice(index, 1);
    }

    //onDesignChange(id: any) {

    //    var selDesign = this.allDesigns.find(x => x.id == id);

    //    this.accessorySettings.existingAccessories = [];
    //    this.designAccessories = [];

    //    selDesign.networkSettings.forEach(x => {
    //        this.designAccessories.push(x.startNode.accessorySettings.accessories);
    //        this.designAccessories.push(x.destinationNode.accessorySettings.accessories);
    //        this.designAccessories.push(x.cabling.accessorySettings.accessories);
    //    });
        
    //}

    //onAccessoryChange(event: any) {
    //    this.accessorySettings.existingAccessories = [];
    //    this.accessorySettings.existingAccessories.push(event);
    //}
}
