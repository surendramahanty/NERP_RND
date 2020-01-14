import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

import { Helper } from '../../common/helper';
import { SortOrder, SearchFilter, ConditionOperator, Filter, Operator } from '../../common/models/paginationRequest';
import { SearchField } from '../../common/models/SearchField';
import { CableService } from '../services/cable.service';
import { ChamberService } from '../services/chamber.service';
import { ODFService } from '../services/odf.service';
import { DuctService } from '../services/duct.service';
import { PoleService } from '../services/pole.service';
import { SpliceClosureService } from '../services/spliceClosure.service';
import { SplitterService } from '../services/splitter.service';
import { BaseNetworkEntity } from '../models/baseNetworkEntity';
import { HomepassService } from '../services/homepass.service';
import { FatService } from '../services/fat.service';
import { FdtService } from '../services/fdt.service';

declare var $: any;
declare var jBox: any;

@Component({
    templateUrl: './entity-list.html',
})
export class EntityList implements OnInit {

    statusMessage: string = "";
    pageSize = 10;
    currentPage = 1;
    totalPages = 1;
    searchFields: SearchField[];
    searchFilter: SearchFilter;
    selectedField: SearchField;
    searchText: string;
    sortColumn: string;
    sortOrder: SortOrder = SortOrder.descending;
    previousElement: HTMLElement;
    selectedEntityType: string = "Cable";
    entities: BaseNetworkEntity[];


    constructor(
        private cableService: CableService,
        private chamberService: ChamberService,
        private ductService: DuctService,
        private odfService: ODFService,
        private poleService: PoleService,
        private spliceClosureService: SpliceClosureService,
        private splitterService: SplitterService,
       private homepassService: HomepassService,
       private fatService: FatService,
       private fdtService: FdtService,
        private helper: Helper) {

        this.searchFields = new Array<SearchField>();
        this.searchFields.push({ field: 'Name', label: 'Name', dataType: "text", value: "" });
        this.searchFields.push({ field: 'UpdatedBy', label: 'Updated By', dataType: "text", value: "" });
        this.searchFields.push({ field: 'UpdatedDate', label: 'Updated On', dataType: "date", value: "" });

        this.selectedField = this.searchFields[0];
    }

    ngOnInit() {

        this.statusMessage = "Loading Entities...";
        this.pageSize = 10;
        this.currentPage = 1;
        this.sortColumn = null;
        this.sortOrder = SortOrder.noSort;
        this.searchText = "";
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

        let entitySvc = null;

        switch (this.selectedEntityType) {
            case "Cable":
                entitySvc = this.cableService.getCables(paginationRequest);
                break;
            case "Chamber":
                entitySvc = this.chamberService.getChambers(paginationRequest);
                break;
            case "Duct":
                entitySvc = this.ductService.getDucts(paginationRequest);
                break;
            case "ODF":
                entitySvc = this.odfService.getODFs(paginationRequest);
                break;
            case "Pole":
                entitySvc = this.poleService.getPoles(paginationRequest);
                break;
            case "SpliceClosure":
                entitySvc = this.spliceClosureService.getSpliceClosures(paginationRequest);
                break;
            case "Splitter":
                entitySvc = this.splitterService.getSplitters(paginationRequest);
                break;
            case "Homepass":
                entitySvc = this.homepassService.getHomepasses(paginationRequest);
              break;
           case "Fat":
              entitySvc = this.fatService.getFATs(paginationRequest);
              break;
           case "Fdt":
              entitySvc = this.fdtService.getFDTs(paginationRequest);
              break;
            default:
                entitySvc = this.cableService.getCables(paginationRequest);
        }

        entitySvc.subscribe(
            resp => {
                this.entities = null;
                if (resp.status.toLowerCase() == "error") {
                    this.statusMessage = resp.message;
                    this.helper.showAlertMessage(this.statusMessage, "error");
                }
                else {
                    if (resp.data != null && resp.data.length > 0) {
                        this.entities = resp.data;
                        this.totalPages = Math.ceil(resp.recordCount / this.pageSize);
                    }
                    else {
                        this.statusMessage = "There are no registered entities.";
                    }
                }

                $("#ajax-loading").hide();
            },
            (err) => {
                $("#ajax-loading").hide();
                this.entities = null;
                let msg = `Unable to fetch entities : ${err.message}`;
                this.helper.showAlertMessage(msg, "error");
                this.statusMessage = "Error fetching entities.";
            });

        //let usersSvc = this.userService.getUsers(paginationRequest);
        //let rolesSvc = this.roleService.getRoles(null);

        //forkJoin([rolesSvc, usersSvc]).subscribe(results => {

        //    this.users = null;

        //    if (results[0] && results[0].data) {
        //        this.roles = results[0].data;
        //    }

        //    if (results[1].status.toLowerCase() == "error") {
        //        this.statusMessage = results[1].message;
        //        this.helper.showAlertMessage(this.statusMessage, "error");
        //    }
        //    else {
        //        if (results[1].data != null && results[1].data.length > 0) {
        //            this.users = results[1].data;
        //            this.totalPages = Math.ceil(results[1].recordCount / this.pageSize);
        //        }
        //        else {
        //            this.statusMessage = "There are no registered users.";
        //        }
        //    }

        //    $("#ajax-loading").hide();
        //},
        //    error => {
        //        this.users = null;
        //        $("#ajax-loading").hide();
        //    });
    }

    onEntityTypeChange(entityType: string) {
        this.selectedEntityType = entityType;

        this.currentPage = 1;
        this.sortColumn = null;
        this.sortOrder = SortOrder.noSort;
        this.searchText = "";

        this.getFormData();
    }

    setSearchField(searchField: any) {
        this.selectedField = searchField;
        this.searchText = '';
    }

    search() {

        this.searchFilter = this.helper.search(this.selectedField, this.searchText, ConditionOperator.AND)
        this.searchFields.forEach(x => x.value = '');

        this.getFormData();
    }

    advancedSearch() {

        this.searchFilter = this.helper.advancedSearch(this.searchFields, ConditionOperator.AND)
        this.searchText = "";

        this.getFormData();
    }

    clearSearch() {
        this.searchFilter = this.helper.search(this.selectedField, this.searchText, ConditionOperator.AND)
        this.searchFields.forEach(x => x.value = '');
    }

    setPage(page: number) {

        if (page < 1 || page > this.totalPages) {
            return;
        }

        this.currentPage = page;

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

    delete(entity: any) {
        new jBox("Confirm", {
            minWidth: 500,
            minHeight: 70,
            title: "<b>Delete Entity</b>",
            overlay: false,
            content: `Do you want to delete ${this.selectedEntityType} - ${entity.name}`,
            draggable: "title",
            confirmButton: "Yes",
            cancelButton: "No",
            confirm: () => {

                let entitySvc = null;

                switch (this.selectedEntityType) {
                    case "Cable":
                        entitySvc = this.cableService.deleteCable(entity.id);
                        break;
                    case "Chamber":
                        entitySvc = this.chamberService.deleteChamber(entity.id);
                        break;
                    case "Duct":
                        entitySvc = this.ductService.deleteDuct(entity.id);
                        break;
                    case "ODF":
                        entitySvc = this.odfService.deleteODF(entity.id);
                        break;
                    case "Pole":
                        entitySvc = this.poleService.deletePole(entity.id);
                        break;
                    case "SpliceClosure":
                        entitySvc = this.spliceClosureService.deleteSpliceClosure(entity.id);
                        break;
                    case "Splitter":
                        entitySvc = this.splitterService.deleteSplitter(entity.id);
                        break;
                    case "Homepass":
                        entitySvc = this.homepassService.deleteHomepass(entity.id);
                        break;
                    default:
                        entitySvc = this.cableService.deleteCable(entity.id);
                }

                entitySvc.subscribe(
                    resp => {
                        if (resp.status.toLowerCase() == "error") {
                            this.helper.showAlertMessage(resp.message, "error");
                        }
                        else {
                            if (resp.data != null) {
                                this.helper.showAlertMessage(`${this.selectedEntityType} deleted`, "success");
                                this.getFormData();
                            }
                            else {
                                this.helper.showAlertMessage(`Error deleting ${this.selectedEntityType}`, "error");
                            }
                        }
                    },
                    (err) => {
                        this.helper.showAlertMessage(`Error deleting ${this.selectedEntityType}`, "error");
                    });
            }
        }).open();
    }

    //getPermission(featureCode: string, accessType: string): boolean {
    //   return this.accountService.getPermission(featureCode, accessType);
    //}

}
