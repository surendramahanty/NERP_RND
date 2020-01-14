export class CustomField {
    category: string;
    label: string;
    controlType: ControlType;
    dataType: DataType;
    values: string;
    userValue?: any;
}

export enum ControlType {
    TextBox = 1,
    Dropdown = 2,
    Date = 3,
    Radio = 4,
    Checkbox = 5
}

export enum DataType {
    String = 1,
    Number = 2,
    Boolean = 3,
    Date = 4

}
