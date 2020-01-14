import { Component, OnInit } from '@angular/core';
import { Layer } from '../models/layer';
import { LayerService } from '../services/layer.service';
import { Helper } from '../../common/helper';
import { SortOrder, Filter, SearchFilter, ConditionOperator, Operator } from '../../common/models/paginationRequest';
import { SearchField } from '../../common/models/SearchField';

declare var $: any;
declare var jBox: any;

@Component({
    templateUrl: './layer-list.html',
    providers: [LayerService]
})
export class LayerList implements OnInit {

    layers = new Array<Layer>();
    statusMessage: string = "";
    pageSize = 10;
    currentPage = 1;
    totalPages = 1;
    searchFields: SearchField[];
    searchFilter: SearchFilter;
    sortColumn: string;
    sortOrder: SortOrder = SortOrder.descending;
    previousElement: HTMLElement;

    constructor(
        private layerService: LayerService,
        private helper: Helper) {

        this.searchFields = new Array<SearchField>();
        this.searchFields.push({ field: 'Name', label: 'Name', dataType: "text", value:"" });
        this.searchFields.push({ field: 'Description', label: 'Description', dataType: "text", value:"" });
        this.searchFields.push({ field: 'UpdatedBy', label: 'Updated By', dataType: "text", value:"" });
        this.searchFields.push({ field: 'UpdatedDate', label: 'Updated On', dataType: "date", value:"" });
    }

    ngOnInit() {

        this.statusMessage = "Loading Layers...";
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

        this.layerService.getLayers(paginationRequest).subscribe(
            resp => {
                this.layers = null;
                if (resp.status.toLowerCase() == "error") {
                    this.statusMessage = resp.message;
                    this.helper.showAlertMessage(this.statusMessage, "error");
                }
                else {
                    if (resp.data != null && resp.data.length > 0) {
                        this.layers = resp.data;
                        this.totalPages = Math.ceil(resp.recordCount / this.pageSize);
                    }
                    else {
                        this.statusMessage = "There are no registered layers.";
                    }
                }

                $("#ajax-loading").hide();
            },
            (err) => {
                $("#ajax-loading").hide();
                this.layers = null;
                let msg = `Unable to fetch layers : ${err.message}`;
                this.helper.showAlertMessage(msg, "error");
                this.statusMessage = "Error fetching layers.";
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

    delete(layer: Layer) {
        new jBox("Confirm", {
            minWidth: 500,
            minHeight: 70,
            title: "<b>Delete Layer</b>",
            overlay: false,
            content: "Do you want to delete layer - " + layer.name,
            draggable: "title",
            confirmButton: "Yes",
            cancelButton: "No",
            confirm: () => {
                this.layerService.deleteLayer(layer.id).subscribe(
                    resp => {
                        if (resp.status.toLowerCase() == "error") {
                            this.helper.showAlertMessage(resp.message, "error");
                        }
                        else {
                            if (resp.data != null) {
                                this.helper.showAlertMessage("Layer deleted.", "success");
                                this.getFormData();
                            }
                            else {
                                this.helper.showAlertMessage("Error deleting layer", "error");
                            }
                        }
                    },
                    (err) => {
                        this.helper.showAlertMessage("Error deleting layer", "error");
                    });
            }
        }).open();
    }

    //getPermission(featureCode: string, accessType: string): boolean {
    //   return this.accountService.getPermission(featureCode, accessType);
    //}
}
