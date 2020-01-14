import { Component, Input, EventEmitter, Output } from '@angular/core';
import { SearchField } from '../../common/models/SearchField';
import { ConditionOperator, SearchFilter, Filter } from '../../common/models/paginationRequest';
import { Helper } from '../../common/helper';

@Component({
    selector: 'dt-search',
    templateUrl: './dt-search.html'
})
export class DTSearch {

    @Input() public searchFields: SearchField[] = new Array<SearchField>();
    @Output() onSearch: EventEmitter<any> = new EventEmitter();

    selectedField: SearchField;
    searchText: string;
    searchFilter: SearchFilter;
    filterPills: Filter[];
    conditionOption: boolean = true;

    constructor(private helper: Helper) { }

    ngOnInit() {
        this.selectedField = this.searchFields[0];
        this.searchText = "";
    }

    setSearchField(searchField: any) {
        this.selectedField = searchField;
        this.searchText = '';
    }

    search() {

        let conditionOption = this.conditionOption ? ConditionOperator.AND : ConditionOperator.OR;
        this.searchFilter = this.helper.search(this.selectedField, this.searchText, conditionOption)
        this.searchFields.forEach(x => x.value = '');

        this.searchText = '';
        this.populateFilterPills();

        this.onSearch.emit(this.searchFilter);
    }

    populateFilterPills() {

        let filters = new Array<Filter>();

        this.searchFilter.filters.forEach(x => {

            var index = filters.findIndex(y => y.propertyName == x.propertyName);

            let newValue = x.value;

            if (newValue.includes('T00:00:00.000Z')) {
                newValue = Helper.formatDate(new Date(newValue));
            }

            if (index < 0) {
                filters.push({
                    operator: x.operator,
                    propertyName: x.propertyName,
                    caseSensitive: false,
                    value: newValue
                });
            }
        });

        this.filterPills = filters;
    }

    removeFilter(index: any) {
        if (index >= 0) {
            let filter = this.searchFilter.filters[index];
            this.searchFilter.filters = this.searchFilter.filters.filter(x => x.propertyName != filter.propertyName);

            this.populateFilterPills();

            this.onSearch.emit(this.searchFilter);
        }
    }

    advancedSearch() {

        let conditionOption = this.conditionOption ? ConditionOperator.AND : ConditionOperator.OR;
        this.searchFilter = this.helper.advancedSearch(this.searchFields, conditionOption)
        this.searchText = "";

        this.onSearch.emit(this.searchFilter);
        this.populateFilterPills();
    }

    clearSearch() {
        this.searchFilter = this.helper.search(this.selectedField, this.searchText, ConditionOperator.AND)
        this.searchFields.forEach(x => x.value = '');

        this.onSearch.emit(this.searchFilter);
    }
}
