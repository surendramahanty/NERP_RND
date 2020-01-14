import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { CivilworkSettings } from '../models/design';
import { CivilworkService } from '../../civilworks/services/civilwork.service';
import { Civilwork } from '../../civilworks/models/civilwork';
import { ConditionOperator, Operator, SortOrder } from '../../common/models/paginationRequest';

@Component({
    selector: 'dzn-civilworks',
    templateUrl: './dzn-civilworks.html'
})
export class DesignCivilwork implements OnChanges {

    @Input() public civilworkSettings: CivilworkSettings = new CivilworkSettings();
    @Input() parentEntityType: string;

    civilworksMaster: Civilwork[] = new Array<Civilwork>();
    statusMessage: string;
    selectedCivilwork: Civilwork;

    constructor(private civilworkService: CivilworkService ) { }

    ngOnChanges(changes: SimpleChanges) {

        if (this.parentEntityType)
            this.getExistingCivilworks(this.parentEntityType);
    }

    getExistingCivilworks(parentEntityType: string) {

        //this.civilworkSettings.civilworks = null;

        var paginationRequest = {
            page: null,
            pageSize: null,
            filter: {
                conditionOperator: ConditionOperator.AND,
                filters: [{
                    propertyName: "ParentEntityType",
                    operator: Operator.equals,
                    value: parentEntityType.toLowerCase(),
                    caseSensitive: false
                }]
            },
            order: {
                orderByProperty: "UpdatedDate",
                sortOrder: SortOrder.descending
            }
        };

        this.civilworkService.getCivilworks(paginationRequest).subscribe(
            resp => {
                this.civilworksMaster = null;
                if (resp.status.toLowerCase() == "error") {
                    this.statusMessage = resp.message;
                }
                else {
                    if (resp.data != null && resp.data.length > 0) {
                        this.civilworksMaster = resp.data;

                    }
                    else {
                        this.statusMessage = "There are no registered civilworks.";
                    }
                }
            },
            (err) => {
                this.civilworksMaster = null;
                this.statusMessage = "Error fetching civilworks.";
            });

    }

    addCivilwork() {
        if (this.selectedCivilwork) {
            if (this.civilworkSettings.civilworks == null)
                this.civilworkSettings.civilworks = new Array<Civilwork>();

            var index = this.civilworkSettings.civilworks.findIndex(x => x.id == this.selectedCivilwork.id);

            if (index == -1) {
                this.civilworkSettings.civilworks.push(this.selectedCivilwork);
                this.selectedCivilwork = null;
            }
        }
    }

    removeCivilwork(index: number) {
        this.civilworkSettings.civilworks.splice(index, 1);
    }
}
