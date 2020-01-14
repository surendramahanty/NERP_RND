import { Component, Input, OnInit } from '@angular/core';

import { Design } from '../models/design';
import { Cluster } from '../../clusters/models/cluster';
import { SearchField } from '../../common/models/SearchField';
import { SearchFilter, SortOrder, ConditionOperator } from '../../common/models/paginationRequest';
import { ClusterService } from '../../clusters/services/cluster.service';
import { Helper } from '../../common/helper';

declare var $: any;

@Component({
    selector: 'dzn-clusters',
    templateUrl: './dzn-clusters.html'
})
export class DesignClusters implements OnInit {

    @Input() public design: Design = new Design();
    clusters = new Array<Cluster>();
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

    constructor(
        private clusterService: ClusterService,
        private helper: Helper) {

        this.searchFields = new Array<SearchField>();
        this.searchFields.push({ field: 'Name', label: 'Name', dataType: "text", value: "" });
        this.searchFields.push({ field: 'UpdatedBy', label: 'Updated By', dataType: "text", value: "" });
        this.searchFields.push({ field: 'UpdatedDate', label: 'Updated On', dataType: "date", value: "" });

        this.selectedField = this.searchFields[0];
    }

    ngOnInit() {
        this.statusMessage = "Loading clusters...";
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

        this.clusterService.getClusters(paginationRequest).subscribe(
            resp => {
                this.clusters = null;

                if (resp.status.toLowerCase() == "error") {
                    this.statusMessage = resp.message;
                    this.helper.showAlertMessage(this.statusMessage, "error");
                }
                else {
                    if (resp.data != null && resp.data.length > 0) {
                        this.clusters = resp.data;
                        this.totalPages = Math.ceil(resp.recordCount / this.pageSize);
                    }
                    else {
                        this.statusMessage = "There are no clusters.";
                    }
                }

                $("#ajax-loading").hide();
            },
            (err) => {
                $("#ajax-loading").hide();
                this.clusters = null;
                let msg = `Unable to fetch clusters : ${err.message}`;
                this.helper.showAlertMessage(msg, "error");
                this.statusMessage = "Error fetching clusters.";
            });
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
}
