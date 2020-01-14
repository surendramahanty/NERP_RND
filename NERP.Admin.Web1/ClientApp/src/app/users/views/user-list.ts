import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

import { UserSummary } from '../models/UserSummary';
import { Role } from '../../roles/models/role';
import { UserService } from '../services/user.service';
import { RoleService } from '../../roles/services/role.service';
import { Helper } from '../../common/helper';
import { SortOrder, SearchFilter, ConditionOperator, Filter, Operator } from '../../common/models/paginationRequest';
import { User } from '../models/user';
import { SearchField } from '../../common/models/SearchField';

declare var $: any;
declare var jBox: any;

@Component({
    templateUrl: './user-list.html',
    providers: [UserService]
})
export class UserList implements OnInit {

    users = new Array<UserSummary>();
    roles: Role[] = new Array<Role>();
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
        private userService: UserService,
        private roleService: RoleService,
        private helper: Helper) {

        this.statusMessage = "Loading Users...";
        this.pageSize = 10;
        this.currentPage = 1;
        this.sortColumn = null;
        this.sortOrder = SortOrder.noSort;

        this.searchFields = new Array<SearchField>();
        this.searchFields.push({ field: 'LoginId', label: 'Login Id', dataType: "text", value:"" });
        this.searchFields.push({ field: 'FirstName', label: 'First Name', dataType: "text", value:"" });
        this.searchFields.push({ field: 'LastName', label: 'Last Name', dataType: "text", value:"" });
        this.searchFields.push({ field: 'EmailId', label: 'Email Id', dataType: "text", value:"" });
        this.searchFields.push({ field: 'Status', label: 'Status', dataType: "text", value:"" });
    }

    ngOnInit() {
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

        let usersSvc = this.userService.getUsers(paginationRequest);
        let rolesSvc = this.roleService.getRoles(null);

        forkJoin([rolesSvc, usersSvc]).subscribe(results => {

            this.users = null;

            if (results[0] && results[0].data) {
                this.roles = results[0].data;
            }

            if (results[1].status.toLowerCase() == "error") {
                this.statusMessage = results[1].message;
                this.helper.showAlertMessage(this.statusMessage, "error");
            }
            else {
                if (results[1].data != null && results[1].data.length > 0) {
                    this.users = results[1].data;
                    this.totalPages = Math.ceil(results[1].recordCount / this.pageSize);
                }
                else {
                    this.statusMessage = "There are no registered users.";
                }
            }

            $("#ajax-loading").hide();
        },
         error => {
               this.users = null;
               $("#ajax-loading").hide();
         });
    }

    getRoleDescription(roleId: string) {

        if (this.roles)
            var roleDesc = this.roles.find(item => item.id == roleId);

        if (roleDesc)
            return roleDesc.name;
        else
            return "";
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

    delete(user: User) {
        new jBox("Confirm", {
            minWidth: 500,
            minHeight: 70,
            title: "<b>Delete User</b>",
            overlay: false,
            content: "Do you want to delete user - " + user.firstName + " " + user.lastName,
            draggable: "title",
            confirmButton: "Yes",
            cancelButton: "No",
            confirm: () => {
                this.userService.deleteUser(user.id).subscribe(
                    resp => {
                        if (resp.status.toLowerCase() == "error") {
                            this.helper.showAlertMessage(resp.message, "error");
                        }
                        else {
                            if (resp.data != null) {
                                this.helper.showAlertMessage("User deleted.", "success");
                                this.getFormData();
                            }
                            else {
                                this.helper.showAlertMessage("Error deleting user", "error");
                            }
                        }
                    },
                    (err) => {
                        this.helper.showAlertMessage("Error deleting user", "error");
                    });
            }
        }).open();
    }

    //getPermission(featureCode: string, accessType: string): boolean {
    //   return this.accountService.getPermission(featureCode, accessType);
    //}

}
