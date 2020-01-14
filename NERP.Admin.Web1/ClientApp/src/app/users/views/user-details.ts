import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { forkJoin } from 'rxjs';

import { User } from '../models/user';
import { Role } from '../../roles/models/role';
import { Group } from '../../groups/models/group';
import { UserService } from '../services/user.service';
import { RoleService } from '../../roles/services/role.service';
import { GroupService } from '../../groups/services/group.service';
import { Helper } from '../../common/helper';

// declare var $: any;
// declare var jBox: any;

@Component({
    templateUrl: './user-details.html',
    providers: [UserService, GroupService],
})
export class UserDetails implements OnInit {

    userId: string;
    user: User = new User();
    roles: Role[] = new Array<Role>();
    groups: Group[] = new Array<Group>();
    currentUserPassword: string;
    changePassword: boolean = false;

    title: string = "New User";

    constructor(
        private location: Location,
        private route: ActivatedRoute,
        private userService: UserService,
        private roleService: RoleService,
        private groupService: GroupService,
        private helper: Helper) { }

    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.userId = params['id'];

                if (this.userId != null)
                    this.title = "Edit User";
                else {
                    this.title = "New User";
                    this.changePassword = true;
                }

                this.getFormData(this.userId);

            });
    }

    getFormData(userId: string) {

        let usersSvc = this.userService.getUser(userId);
        let rolesSvc = this.roleService.getRoles(null);
        let groupsSvc = this.groupService.getGroups(null);

        forkJoin([rolesSvc, groupsSvc, usersSvc]).subscribe(results => {

            if (results[0] && results[0].data) {
                this.roles = results[0].data;
            }

            if (results[1] && results[1].data) {
                this.groups = results[1].data;
            }

            if (userId && results[2]) {
                if (results[2].data && results[2].status.toLowerCase() == "ok") {
                    this.user = results[2].data;
                    this.currentUserPassword = this.user.password;
                }
                else
                    this.helper.showAlertMessage(results[2].message, "error");
            }
            else
                this.user = new User();
        });
    }

    setNewPassword(event) {
        this.changePassword = event.checked;

        if (event.checked)
            this.user.password = "";
        else
            this.user.password = this.currentUserPassword;
    }

    isAllSelected() {
        const numSelected = this.user.groups ? this.user.groups.length : 0;
        const numRows = this.groups.length;
        return numSelected === numRows;
    }

    toggleSelection(group: Group) {

        var index = -1;

        if (this.user.groups)
            index = this.user.groups.findIndex(x => x == group.id);
        else
            this.user.groups = [];

        if (index == -1)
            this.user.groups.push(group.id);
        else
            this.user.groups.splice(index, 1);
    }

    masterToggle() {

        if (this.isAllSelected()) {
            this.user.groups = [];
        }
        else {
            this.user.groups = [];
            this.groups.forEach(x => this.user.groups.push(x.id));
        }
    }

    async saveUser() {

        if (!this.changePassword)
            this.user.password = this.currentUserPassword;

        var errorMessages = await this.validateUser(this.user);

        if (errorMessages.length == 0) {

            this.userService.saveUser(this.user).subscribe(
                resp => {

                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.helper.showAlertMessage("User information saved", "success");
                            this.goBack();
                        }
                        else
                            this.helper.showAlertMessage("Unable to save user information.", "error");
                    }
                },
                (err) => {
                    //let msg = `Unable to save user information : ${err.message}`;
                    this.helper.showAlertMessage("Unable to save user information.", "error");
                });
        }
        else {
            this.helper.showAlertMessage(this.helper.getErrorMessagesText(errorMessages), "error");
        }
    }

    async validateUser(user: User): Promise<string[]> {
        var errorMessages = [];

        if (user.firstName == null)
            errorMessages.push("User name cannot be empty.");

        if (user.loginId == null || user.loginId.trim() == "")
          errorMessages.push("Login Id cannot be empty string");
        else {
           let resp = await this.userService.checkLoginIdExists(user.loginId);

           if (resp.data != null && resp.data != user.id)
              errorMessages.push("Login Id already exists.");
        }

        //if (user.password == null || user.password.trim() == "")
        //   errorMessages.push("Password cannot be empty string");

        return errorMessages;
    }

    goBack(): void {
        this.location.back();
    }
}
