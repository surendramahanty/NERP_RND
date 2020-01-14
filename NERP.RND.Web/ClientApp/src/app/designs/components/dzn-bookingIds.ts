import { Component, Input, OnInit } from '@angular/core';
import { Design } from '../models/design';
import { BookingId } from '../../common/models/bookingId';

@Component({
    selector: 'dzn-bookingIds',
    templateUrl: './dzn-bookingIds.html'
})
export class DesignBookingIds implements OnInit{

    @Input() public design: Design = new Design();

    bookingIds: BookingId[] = new Array <BookingId>();

    constructor() { }

    ngOnInit(): void {
        if (this.design.bookingIds == null || this.design.bookingIds.length == 0) {

            this.design.bookingIds.push({ entityType: "Cable", format: "Cable_{code}", sequenceStart: 1, sequenceEnd: null, step: 1 });
            this.design.bookingIds.push({ entityType: "Chamber", format: "Chamber_{code}", sequenceStart: 1, sequenceEnd: null, step: 1 });
            this.design.bookingIds.push({ entityType: "Duct", format: "Duct_{code}", sequenceStart: 1, sequenceEnd: null, step: 1 });
            this.design.bookingIds.push({ entityType: "ODF", format: "ODF_{code}", sequenceStart: 1, sequenceEnd: null, step: 1 });
            this.design.bookingIds.push({ entityType: "Pole", format: "Pole_{code}", sequenceStart: 1, sequenceEnd: null, step: 1 });
            this.design.bookingIds.push({ entityType: "SpliceClosure", format: "SpliceClosure_{code}", sequenceStart: 1, sequenceEnd: null, step: 1 });
            this.design.bookingIds.push({ entityType: "Splitter", format: "Splitter_{code}", sequenceStart: 1, sequenceEnd: null, step: 1 });
        }
    }

    clearBookingId(index: number) {
        let item = this.design.bookingIds[index];
        item.format = "";
        item.sequenceStart = null;
        item.sequenceEnd = null;
        item.step = 1;
    }

}
