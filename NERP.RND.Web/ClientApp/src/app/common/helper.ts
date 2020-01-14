import { Injectable } from '@angular/core';
import { SearchField } from './models/SearchField';
import { SearchFilter, Filter, Operator, ConditionOperator } from './models/paginationRequest';

declare var toastr: any;

@Injectable()
export class Helper {

    constructor() { }

    showAlertMessage(message: string, alertType: string) {

        if (alertType == "error") {
            toastr.options = {
                "closeButton": true,
                "timeOut": 3000,
                "preventDuplicates": true,
                "extendedTimeOut": 1000,
                "positionClass": "toast-top-center",
            }
            toastr.error(message, "Error").attr('style', 'width: 400px !important');
        }
        else if (alertType == "success") {
            toastr.options = {
                "closeButton": false,
                "timeOut": 3000,
                "extendedTimeOut": 1000,
                "positionClass": "toast-top-center",
            }
            toastr.success(message).attr('style', 'width: 400px !important');
        }
        else if (alertType == "info") {
            toastr.options = {
                "closeButton": false,
                "timeOut": 5000,
                "extendedTimeOut": 1000,
                "positionClass": "toast-top-center",
            }
            toastr.info(message).attr('style', 'width: 400px !important');
        }
    }

    formatBytes(bytes: number, decimals: number) {
        if (bytes == 0) return '0 Bytes';
        var k = 1024,
            dm = decimals || 2,
            sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            i = Math.floor(Math.log(bytes) / Math.log(k));

        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    popupCenter(url, title, w, h) {
        // Fixes dual-screen position Most browsers Firefox
        var dualScreenLeft = window.screenLeft;
        var dualScreenTop = window.screenTop;

        var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

        var left = ((width / 2) - (w / 2)) + dualScreenLeft;
        var top = ((height / 2) - (h / 2)) + dualScreenTop;
        var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

        // Puts focus on the newWindow
        if (window.focus) {
            newWindow.focus();
        }
    }

    getErrorMessagesText(errorMessages: string[]) {

        var li = "";

        for (let message of errorMessages) {
            li += "<li>" + message + "</li>";
        }

        return "<ul>" + li + "</li>";
    }

    compare(a: number | string | boolean, b: number | string | boolean, isAsc: boolean) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }

    getLastMonths(count) {
        var monthFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        var months = []
        var d = new Date()
        for (var i = 0; i < count; i++) {
            months.push({ "name": monthFull[d.getMonth()], "value": monthShort[d.getMonth()] });
            d.setMonth(d.getMonth() - 1)
        }
        return months
    }

    getLastDay(year: number, month: string) {

        var monthIndex = this.getMonthIndex(month);

        return new Date(year, monthIndex + 1, 0).getDate();
    }

    getMonthIndex(month: string) {

        var monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        var monthIndex = monthShort.findIndex(x => x == month);

        return monthIndex;
    }

    addDays(date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    daysBetween(startDate, endDate) {

        let millisecondsPerDay = 1000 * 60 * 60 * 24;
        let startDateUTC = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
        let endDateUTC = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());

        return Math.floor((endDateUTC - startDateUTC) / millisecondsPerDay);
    }

    static getChunks(items: any, chunkSize: number) {

        var index = 0;
        var arrayLength = items.length;
        var group = [];

        for (index = 0; index < arrayLength; index += chunkSize) {
            let chunk = items.slice(index, index + chunkSize);
            group.push(chunk);
        }

        return group;
    }

    search(selectedField: SearchField, searchText: string, conditionOperator: ConditionOperator): SearchFilter {

        let searchFilter = null;

        if (searchText.trim() != "") {

            searchFilter = new SearchFilter();
            searchFilter.conditionOperator = conditionOperator;
            searchFilter.filters = new Array<Filter>();

            if (selectedField.dataType == 'date') {
                searchFilter.filters.push({
                    propertyName: selectedField.field,
                    operator: Operator.greaterThanOrEqual,
                    value: new Date(searchText).toISOString(),
                    caseSensitive: false
                });
                searchFilter.filters.push({
                    propertyName: selectedField.field,
                    operator: Operator.lessThan,
                    value: this.addDays(new Date(searchText), 1).toISOString(),
                    caseSensitive: false
                });
            }
            else {
                searchFilter.filters.push({
                    propertyName: selectedField.field,
                    operator: Operator.contains,
                    value: searchText,
                    caseSensitive: false
                });
            }
        }

        return searchFilter
    }

    advancedSearch(searchFields: SearchField[], conditionOperator: ConditionOperator): SearchFilter {

        let searchFilter = new SearchFilter();
        searchFilter.conditionOperator = conditionOperator;
        searchFilter.filters = new Array<Filter>();

        for (var i = 0; i < searchFields.length; i++) {
            if (searchFields[i].value) {

                if (searchFields[i].dataType == 'date') {
                    searchFilter.filters.push({
                        propertyName: searchFields[i].field,
                        operator: Operator.greaterThanOrEqual,
                        value: new Date(searchFields[i].value).toISOString(),
                        caseSensitive: false
                    });
                    searchFilter.filters.push({
                        propertyName: searchFields[i].field,
                        operator: Operator.lessThan,
                        value: this.addDays(new Date(searchFields[i].value), 1).toISOString(),
                        caseSensitive: false
                    });
                }
                else {
                    searchFilter.filters.push({
                        propertyName: searchFields[i].field,
                        operator: Operator.contains,
                        value: searchFields[i].value,
                        caseSensitive: false
                    });
                }
                //let operator = this.searchFields[i].dataType == 'date' ? Operator.equals : Operator.contains
                //this.searchFilter.filters.push({
                //    propertyName: this.searchFields[i].field,
                //    operator: operator,
                //    value: this.searchFields[i].value,
                //    caseSensitive: false
                //});
            }
        }

        return searchFilter;
    }

    generateTree(arr, parentId) {
        var out = []

        for (var i in arr) {
            arr[i].label = arr[i].name;

            if (arr[i].parentId == parentId) {
                var children = this.generateTree(arr, arr[i].id)

                if (children.length) {
                    arr[i].children = children
                }
                out.push(arr[i])
            }
        }

        return out
    }

    static generateObjectId() {
        var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
        return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function () {
            return (Math.random() * 16 | 0).toString(16);
        }).toLowerCase();
    }

    generateTreeTable(arr, parentId, expanded?: boolean) {
        var out = []

        for (var i in arr) {
            arr[i].label = arr[i].name;

            arr[i].data = {
                "name": arr[i].name
            };

            arr[i].expanded = expanded;

            if (arr[i].parentId == parentId) {
                var children = this.generateTree(arr, arr[i].id);

                if (children.length) {
                    arr[i].children = children;
                }
                out.push(arr[i]);
            }
        }

        return out
    }

    findNode(id, currentNode) {
        var stack = [], node, ii;
        stack.push(currentNode);

        while (stack.length > 0) {
            node = stack.pop();
            if (node.id == id) {
                return node;
            } else if (node.children && node.children.length) {
                for (ii = 0; ii < node.children.length; ii += 1) {
                    stack.push(node.children[ii]);
                }
            }
        }

        return null;
    }

    log(logEntity: any, logType: string, message: string) {

        logEntity.log = logEntity.log + '\n' + new Date() + " [" + logType + "] " + message;
    }

    isDate(value: any) {
        return (null != value) && !isNaN(value) && ("undefined" !== typeof value.getDate);
    }

    static formatDate(value: any) {

        var dd = value.getDate();

        var mm = value.getMonth() + 1;
        var yyyy = value.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        return dd + '/' + mm + '/' + yyyy;

    }

    static groupBy(data, columnName) {

        //var groupedData;

        //data.reduce(function (result, current) {
        //    var currentVal = current[columnName];

        //    result[currentVal] = result[currentVal] || [];
        //    result[currentVal].push(current);
        //    groupedData = result;
        //}, {});

        //return groupedData;

        let group = data.reduce((r, a) => {
            r[a[columnName]] = [...r[a[columnName]] || [], a];
            return r;
        }, {});

        let tempGroups = [];

        for (var i in group) {
            tempGroups.push(group[i]);
        }

        return tempGroups;
    }
}
