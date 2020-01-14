export class PaginationRequest {
    page: number;
    pageSize: number;
    filter: SearchFilter;
    order: Order;
}

export class SearchFilter {
    conditionOperator: ConditionOperator;
    filters: Filter[];
}

export enum ConditionOperator {
    AND,
    OR
}

export class Filter {
    propertyName: string;
    operator: Operator;
    value: any;
    caseSensitive: boolean;
}

export enum Operator {
    equals,
    greaterThan,
    lessThan,
    greaterThanOrEqual,
    lessThanOrEqual,
    contains,
    startsWith,
    endsWith,
    notEquals
}

export class Order {
    orderByProperty: string;
    sortOrder: SortOrder;
}

export enum SortOrder {
    ascending = 1,
    descending = -1,
    noSort = 0
}
