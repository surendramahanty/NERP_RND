import { Component, Input, EventEmitter, Output } from '@angular/core';
import { SearchField } from '../../common/models/SearchField';
import { ConditionOperator, SearchFilter, Filter } from '../../common/models/paginationRequest';
import { Helper } from '../../common/helper';

@Component({
    selector: 'cf-group',
    templateUrl: './cf-group.html'
})
export class CustomFieldsGroup {

    @Input() public customFields: SearchField[] = new Array<SearchField>();
    @Input() public accordionId: string = "accordion";

    customFieldGroups: any;

    constructor(private helper: Helper) { }

    ngOnInit() {
        this.customFieldGroups = this.getCustomFieldGroups();
    }

    getCustomFieldGroups() {

        let customFieldGroups = null;

        if (this.customFields && this.customFields.length > 0) {

            customFieldGroups = [];

            let customFields = this.customFields;

            //let groups = Helper.groupBy(customFields, 'category');

            //for (var i in groups) {
            //    customFieldGroups.push(groups[i]);
            //}

            customFieldGroups = Helper.groupBy(customFields, 'category');
        }

        return customFieldGroups;
    }

}
