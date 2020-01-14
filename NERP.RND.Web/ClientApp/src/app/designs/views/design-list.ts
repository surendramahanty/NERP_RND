import { Component, OnInit } from '@angular/core';
import { Design } from '../models/design';
import { SearchField } from '../../common/models/SearchField';
import { SearchFilter, SortOrder, ConditionOperator, Filter } from '../../common/models/paginationRequest';
import { DesignService } from '../services/design.service';
import { Helper } from '../../common/helper';

declare var $: any;
declare var jBox: any;

@Component({
    templateUrl: './design-list.html'
})
export class DesignList implements OnInit {

    designs = new Array<Design>();
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
        private designService: DesignService,
        private helper: Helper) {

        this.searchFields = new Array<SearchField>();
        this.searchFields.push({ field: 'Name', label: 'Name', dataType: "text", value: "" });
        this.searchFields.push({ field: 'DesignType', label: 'Design Type', dataType: "text", value: "" });
        this.searchFields.push({ field: 'Version', label: 'Version', dataType: "number", value: "" });
        this.searchFields.push({ field: 'UpdatedBy', label: 'Updated By', dataType: "text", value: "" });
        this.searchFields.push({ field: 'UpdatedDate', label: 'Updated On', dataType: "date", value: "" });
    }

    ngOnInit() {
        this.statusMessage = "Loading Designs...";
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

        this.designService.getDesigns(paginationRequest).subscribe(
            resp => {
                this.designs = null;

                if (resp.status.toLowerCase() == "error") {
                    this.statusMessage = resp.message;
                    this.helper.showAlertMessage(this.statusMessage, "error");
                }
                else {
                    if (resp.data != null && resp.data.length > 0) {
                        this.designs = resp.data;
                        this.totalPages = Math.ceil(resp.recordCount / this.pageSize);
                    }
                    else {
                        this.statusMessage = "There are no registered designs.";
                    }
                }

                $("#ajax-loading").hide();
            },
            (err) => {
                $("#ajax-loading").hide();
                this.designs = null;
                let msg = `Unable to fetch designs : ${err.message}`;
                this.helper.showAlertMessage(msg, "error");
                this.statusMessage = "Error fetching designs.";
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

    delete(design: Design) {
        new jBox("Confirm", {
            minWidth: 500,
            minHeight: 70,
            title: "<b>Delete Design</b>",
            overlay: false,
            content: "Do you want to delete design - " + design.name,
            draggable: "title",
            confirmButton: "Yes",
            cancelButton: "No",
            confirm: () => {
                this.designService.deleteDesign(design.id).subscribe(
                    resp => {
                        if (resp.status.toLowerCase() == "error") {
                            this.helper.showAlertMessage(resp.message, "error");
                        }
                        else {
                            if (resp.data != null) {
                                this.helper.showAlertMessage("Design deleted.", "success");
                                this.getFormData();
                            }
                            else {
                                this.helper.showAlertMessage("Error deleting design", "error");
                            }
                        }
                    },
                    (err) => {
                        this.helper.showAlertMessage("Error deleting design", "error");
                    });
            }
        }).open();
   }

   exportKML(design: Design) {

      this.designService.exportDesign(design.id).subscribe(
         resp => {
            this.designs = null;

            if (resp.status.toLowerCase() == "error") {
               this.statusMessage = resp.message;
               this.helper.showAlertMessage(this.statusMessage, "error");
            }
            else {
               if (resp.data != null) {
                  if (resp.data != "") {

                     window.location.href = "/Designs/Download?fileName=" + resp.data;
                  }

               }
               else {
                  this.statusMessage = "There are no registered designs.";
               }

               this.getFormData();
            }

            $("#ajax-loading").hide();
         },
         (err) => {
            $("#ajax-loading").hide();
            this.designs = null;
            let msg = `Unable to export designs : ${err.message}`;
            this.helper.showAlertMessage(msg, "error");
            this.statusMessage = "Error export designs.";
         });
   }

    //getPermission(featureCode: string, accessType: string): boolean {
    //   return this.accountService.getPermission(featureCode, accessType);
    //}
}
