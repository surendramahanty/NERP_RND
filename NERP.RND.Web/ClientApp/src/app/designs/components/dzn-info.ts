import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../users/services/user.service';
import { Design } from '../models/design';
import { User } from '../../users/models/user';

@Component({
    selector: 'dzn-info',
    templateUrl: './dzn-info.html'
})
export class DesignInfo implements OnInit, OnChanges {

    @Input() public design: Design = new Design();
    @Input() public designs: Design[] = new Array<Design>();
    @Output() onVersionChange: EventEmitter<any> = new EventEmitter();

    users: User[] = new Array<User>();
    selectedVersion: number;

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.getFormData();
    }

    ngOnChanges(changes: SimpleChanges) {
        this.selectedVersion = this.design.version;
    }

    getFormData() {

       //this.design.designType = "FTTx";

        this.userService.getUsers().subscribe(
            resp => {
                this.users = null;

                if (resp.status.toLowerCase() != "error" && resp.data != null && resp.data.length > 0) {
                    this.users = resp.data;
                }
            });
    }

    versionChange(event: any) {
        this.onVersionChange.emit(event);
    }

    clearNetworkSettings() {
        this.design.networkSettings = [];
    }
}
