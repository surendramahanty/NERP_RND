import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
    selector: 'dt-pagination',
    templateUrl: './dt-pagination.html'
})
export class DTPagination {

    @Input() public totalPages: number = 1;
    @Output() onPageSizeChange: EventEmitter<any> = new EventEmitter();
    @Output() onPageChange: EventEmitter<any> = new EventEmitter();

    pageSize = 10;
    currentPage = 1;

    constructor() { }

    ngOnInit() {
        this.pageSize = 10;
        this.currentPage = 1;
    }

    pageSizeChange() {
        this.onPageSizeChange.emit(this.pageSize);
    }

    setPage(page: number) {

        if (page < 1 || page > this.totalPages) {
            return;
        }

        this.currentPage = page;

        this.onPageChange.emit(this.currentPage);
    }
}
