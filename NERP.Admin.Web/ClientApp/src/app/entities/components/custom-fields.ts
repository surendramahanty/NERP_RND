import { Component, Input } from '@angular/core';
import { CustomField, ControlType, DataType } from '../../common/models/customField';

@Component({
    selector: 'custom-fields',
    templateUrl: './custom-fields.html'
})
export class CustomFields {

    @Input() public customFields: CustomField[] = new Array <CustomField>();

    constructor() { }

    addCustomField() {

        if (this.customFields == null)
            this.customFields = [];

        this.customFields.push({
            category: "",
            label: "",
            controlType: ControlType.TextBox,
            dataType: DataType.String,
            values: ""
        });
    }

    deleteCustomField(index: number) {
        this.customFields.splice(index, 1);
    }

}
