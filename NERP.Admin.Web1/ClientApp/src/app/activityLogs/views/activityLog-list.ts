import { Component, OnInit } from '@angular/core';
import { Helper } from '../../common/helper';
import { SearchFilter, SortOrder } from '../../common/models/paginationRequest';
import { SearchField } from '../../common/models/SearchField';
import { ActivityLog } from '../models/activityLog';
import { ActivityLogService } from '../services/activityLog.service';

declare var $: any;

@Component({
    templateUrl: './activityLog-list.html',
    providers: [ActivityLogService]
})

export class ActivityLogList implements OnInit {

    activityLogs = new Array<ActivityLog>();
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
        private activityLogService: ActivityLogService,
        private helper: Helper) {

        this.searchFields = new Array<SearchField>();
        this.searchFields.push({ field: 'ActivityOn', label: 'Activity Date', dataType: "date", value: "" });
        this.searchFields.push({ field: 'LoginId', label: 'Accessed By', dataType: "text", value: "" });
        this.searchFields.push({ field: 'SourceIP', label: 'Source IP', dataType: "text", value: "" });
        this.searchFields.push({ field: 'Application', label: 'Application', dataType: "text", value: "" });
        this.searchFields.push({ field: 'Module', label: 'Module', dataType: "text", value: "" });
        this.searchFields.push({ field: 'Action', label: 'Action', dataType: "text", value: "" });
    }

    ngOnInit() {
        this.statusMessage = "Loading activity logs...";
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

        this.activityLogService.getActivityLogs(paginationRequest).subscribe(
            resp => {
                this.activityLogs = null;
                if (resp.status.toLowerCase() == "error") {
                    this.statusMessage = resp.message;
                    this.helper.showAlertMessage(this.statusMessage, "error");
                }
                else {
                    if (resp.data != null && resp.data.length > 0) {
                        this.activityLogs = resp.data;
                        this.totalPages = Math.ceil(resp.recordCount / this.pageSize);
                    }
                    else {
                        this.statusMessage = "There are no activity logs generated.";
                    }
                }

                $("#ajax-loading").hide();
            },
            (err) => {
                $("#ajax-loading").hide();
                this.activityLogs = null;
                let msg = `Unable to fetch activity logs : ${err.message}`;
                this.helper.showAlertMessage(msg, "error");
                this.statusMessage = "Error fetching activity logs.";
            });

    }

    //setSearchField(searchField: any) {
    //    this.selectedField = searchField;
    //    this.searchText = '';
    //}

    //search() {

    //    this.clearSearch();
    //    this.searchFields.forEach(x => x.value = '');

    //    if (this.searchText.trim() != "") {
    //        if (this.selectedField.dataType == 'date') {
    //            this.searchFilter.filters.push({
    //                propertyName: this.selectedField.field,
    //                operator: Operator.greaterThanOrEqual,
    //                value: new Date(this.searchText).toISOString(),
    //                caseSensitive: false
    //            });
    //            this.searchFilter.filters.push({
    //                propertyName: this.selectedField.field,
    //                operator: Operator.lessThan,
    //                value: this.helper.addDays(new Date(this.searchText), 1).toISOString(),
    //                caseSensitive: false
    //            });
    //        }
    //        else {
    //            this.searchFilter.filters.push({
    //                propertyName: this.selectedField.field,
    //                operator: Operator.contains,
    //                value: this.searchText,
    //                caseSensitive: false
    //            });
    //        }
    //    }

    //    this.getFormData();
    //}

    //advancedSearch() {

    //    this.clearSearch();
    //    this.searchText = "";

    //    for (var i = 0; i < this.searchFields.length; i++) {
    //        if (this.searchFields[i].value) {

    //            if (this.searchFields[i].dataType == 'date') {
    //                this.searchFilter.filters.push({
    //                    propertyName: this.searchFields[i].field,
    //                    operator: Operator.greaterThanOrEqual,
    //                    value: new Date(this.searchFields[i].value).toISOString(),
    //                    caseSensitive: false
    //                });
    //                this.searchFilter.filters.push({
    //                    propertyName: this.searchFields[i].field,
    //                    operator: Operator.lessThan,
    //                    value: this.helper.addDays(new Date(this.searchFields[i].value), 1).toISOString(),
    //                    caseSensitive: false
    //                });
    //            }
    //            else {
    //                this.searchFilter.filters.push({
    //                    propertyName: this.searchFields[i].field,
    //                    operator: Operator.contains,
    //                    value: this.searchFields[i].value,
    //                    caseSensitive: false
    //                });
    //            }
    //            //let operator = this.searchFields[i].dataType == 'date' ? Operator.equals : Operator.contains
    //            //this.searchFilter.filters.push({
    //            //    propertyName: this.searchFields[i].field,
    //            //    operator: operator,
    //            //    value: this.searchFields[i].value,
    //            //    caseSensitive: false
    //            //});
    //        }
    //    }

    //    this.getFormData();
    //}

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
}
