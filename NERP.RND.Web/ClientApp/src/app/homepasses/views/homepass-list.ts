import { Component, OnInit } from '@angular/core';
import { HomepassService } from '../services/homepass.service';
import { Homepass } from '../models/homepass';
import { SearchField } from '../../common/models/SearchField';
import { SearchFilter, SortOrder, ConditionOperator, Filter } from '../../common/models/paginationRequest';
import { Helper } from '../../common/helper';
import { AuthService } from '../../common/auth/auth.service';


declare var $: any;
declare var jBox: any;

@Component({
    templateUrl: './homepass-list.html',
    providers: [HomepassService]
})
export class HomepassList implements OnInit {

    homepasses = new Array<Homepass>();
    statusMessage: string = "";
    pageSize = 10;
    currentPage = 1;
    totalPages = 1;
    searchFields: SearchField[];
    searchFilter: SearchFilter;
    sortColumn: string;
    sortOrder: SortOrder = SortOrder.descending;
    previousElement: HTMLElement;
    permissions = { edit: false, delete: false, add: false};

    constructor(
        private homepassService: HomepassService,
        private helper: Helper,
        private authService: AuthService) {

        this.searchFields = new Array<SearchField>();
        this.searchFields.push({ field: 'Name', label: 'Name', dataType: "text", value: "" });
        this.searchFields.push({ field: 'Description', label: 'Description', dataType: "text", value: "" });
        this.searchFields.push({ field: 'Type', label: 'Type', dataType: "text", value: "" });
        this.searchFields.push({ field: 'UpdatedBy', label: 'Updated By', dataType: "text", value: "" });
        this.searchFields.push({ field: 'UpdatedDate', label: 'Updated On', dataType: "date", value: "" });
    }

    ngOnInit() {
        this.statusMessage = "Loading Homepasses...";
        this.pageSize = 10;
        this.currentPage = 1;
        this.sortColumn = null;
        this.sortOrder = SortOrder.noSort;

        this.permissions.add = this.authService.getFunctionalityAccess("RND_ADD_HOMEPASS");
        this.permissions.edit = this.authService.getFunctionalityAccess("RND_EDIT_HOMEPASS");
        this.permissions.delete = this.authService.getFunctionalityAccess("RND_DELETE_HOMEPASS");

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

        this.homepassService.getHomepasses(paginationRequest).subscribe(
            resp => {
                this.homepasses = null;
                if (resp.status.toLowerCase() == "error") {
                    this.statusMessage = resp.message;
                    this.helper.showAlertMessage(this.statusMessage, "error");
                }
                else {
                    if (resp.data != null && resp.data.length > 0) {
                        this.homepasses = resp.data;
                        this.totalPages = Math.ceil(resp.recordCount / this.pageSize);
                    }
                    else {
                        this.statusMessage = "There are no registered homepasses.";
                    }
                }

                $("#ajax-loading").hide();
            },
            (err) => {
                $("#ajax-loading").hide();
                this.homepasses = null;
                let msg = `Unable to fetch homepasses : ${err.message}`;
                this.helper.showAlertMessage(msg, "error");
                this.statusMessage = "Error fetching homepasses.";
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

    delete(homepass: Homepass) {
        new jBox("Confirm", {
            minWidth: 500,
            minHeight: 70,
            title: "<b>Delete Homepass</b>",
            overlay: false,
            content: "Do you want to delete homepass - " + homepass.name,
            draggable: "title",
            confirmButton: "Yes",
            cancelButton: "No",
            confirm: () => {
                this.homepassService.deleteHomepass(homepass.id).subscribe(
                    resp => {
                        if (resp.status.toLowerCase() == "error") {
                            this.helper.showAlertMessage(resp.message, "error");
                        }
                        else {
                            if (resp.data != null) {
                                this.helper.showAlertMessage("Homepass deleted.", "success");
                                this.getFormData();
                            }
                            else {
                                this.helper.showAlertMessage("Error deleting homepass", "error");
                            }
                        }
                    },
                    (err) => {
                        this.helper.showAlertMessage("Error deleting homepass", "error");
                    });
            }
        }).open();
    }

    //getPermission(featureCode: string, accessType: string): boolean {
    //   return this.accountService.getPermission(featureCode, accessType);
    //}
}
