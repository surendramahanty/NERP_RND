import { Component, OnInit } from '@angular/core';

import { Accessory } from '../models/accessory';
import { AccessoryService } from '../services/accessory.service';

import { Helper } from '../../common/helper';
import { SearchField } from '../../common/models/searchField';
import { SearchFilter, SortOrder, ConditionOperator, Filter } from '../../common/models/paginationRequest';

declare var $: any;
declare var jBox: any;

@Component({
    templateUrl: './accessory-list.html',
    providers: [AccessoryService]
})
export class AccessoryList implements OnInit {

    accessories = new Array<Accessory>();
    statusMessage: string = "";
    pageSize = 10;
    currentPage = 1;
    totalPages = 1;
    searchFields: SearchField[];
    searchFilter: SearchFilter;
    //selectedField: SearchField;
    //filterPills: Filter[];
    //searchText: string;
    sortColumn: string;
    sortOrder: SortOrder = SortOrder.descending;
    previousElement: HTMLElement;
    //conditionOption: boolean = true;

    constructor(
        private accessoryService: AccessoryService,
        private helper: Helper) {

        this.searchFields = new Array<SearchField>();
        this.searchFields.push({ field: 'Name', label: 'Name', dataType: "text", value: "" });
        this.searchFields.push({ field: 'parentEntityType', label: 'Parent Type', dataType: "text", value: "" });
        this.searchFields.push({ field: 'UpdatedBy', label: 'Updated By', dataType: "text", value: "" });
        this.searchFields.push({ field: 'UpdatedDate', label: 'Updated On', dataType: "date", value: "" });

    }

    ngOnInit() {
        this.statusMessage = "Loading Accessories...";
        this.pageSize = 10;
        this.currentPage = 1;
        this.sortColumn = null;
        this.sortOrder = SortOrder.noSort;
        this.getFormData();
    }

    getFormData() {

        $("#ajax-loading").show();

        this.totalPages = 1;

        let paginationRequest = {
            page: this.currentPage,
            pageSize: this.pageSize,
            filter: this.searchFilter,
            order: {
                orderByProperty: this.sortColumn,
                sortOrder: this.sortOrder
            }
        };

        this.accessoryService.getAccessories(paginationRequest).subscribe(
            resp => {
                this.accessories = null;

                if (resp.status.toLowerCase() == "error") {
                    this.statusMessage = resp.message;
                    this.helper.showAlertMessage(this.statusMessage, "error");
                }
                else {
                    if (resp.data != null && resp.data.length > 0) {
                        this.accessories = resp.data;
                        this.totalPages = Math.ceil(resp.recordCount / this.pageSize);
                    }
                    else {
                        this.statusMessage = "There are no registered accessories.";
                    }
                }

                $("#ajax-loading").hide();
            },
            (err) => {
                $("#ajax-loading").hide();
                this.accessories = null;
                let msg = `Unable to fetch accessories : ${err.message}`;
                this.helper.showAlertMessage(msg, "error");
                this.statusMessage = "Error fetching accessories.";
            });
    }

    search(searchFilter) {

        this.searchFilter = searchFilter;
        this.getFormData();
    }

    onPageSizeChange(pageSize) {
        this.pageSize = pageSize;
        this.getFormData();
    }

    onPageChange(currentPage) {
        this.currentPage = currentPage;
        this.getFormData();
    }

    onColumnClick(e: HTMLElement) {

        if (this.previousElement && e.getAttribute('data-column') != this.previousElement.getAttribute('data-column')) {
            this.previousElement.classList.remove('table-sorter-desc');
            this.previousElement.classList.remove('table-sorter-asc');
        }

        this.previousElement = e;

        this.sortColumn = e.getAttribute('data-column');

        if (e.classList.contains("table-sorter-asc")) {
            e.classList.remove('table-sorter-asc');
            e.classList.add('table-sorter-desc');
            this.sortOrder = SortOrder.descending;
        }
        else if (e.classList.contains("table-sorter-desc")) {
            e.classList.remove('table-sorter-desc');
            this.sortColumn = null;
            this.sortOrder = SortOrder.noSort;
        }
        else {
            e.classList.add('table-sorter-asc');
            this.sortOrder = SortOrder.ascending;
        }

        this.getFormData();
    }

    delete(accessory: Accessory) {
        new jBox("Confirm", {
            minWidth: 500,
            minHeight: 70,
            title: "<b>Delete Accessory</b>",
            overlay: false,
            content: "Do you want to delete accessory - " + accessory.name,
            draggable: "title",
            confirmButton: "Yes",
            cancelButton: "No",
            confirm: () => {
                this.accessoryService.deleteAccessory(accessory.id).subscribe(
                    resp => {
                        if (resp.status.toLowerCase() == "error") {
                            this.helper.showAlertMessage(resp.message, "error");
                        }
                        else {
                            if (resp.data != null) {
                                this.helper.showAlertMessage("Accessory deleted.", "success");
                                this.getFormData();
                            }
                            else {
                                this.helper.showAlertMessage("Error deleting accessory", "error");
                            }
                        }
                    },
                    (err) => {
                        this.helper.showAlertMessage("Error deleting accessory", "error");
                    });
            }
        }).open();
    }

    //getPermission(featureCode: string, accessType: string): boolean {
    //   return this.accountService.getPermission(featureCode, accessType);
    //}
}
