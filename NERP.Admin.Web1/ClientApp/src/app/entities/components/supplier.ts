import { Component, Input } from '@angular/core';
import { Supplier } from '../../common/models/supplier';

@Component({
    selector: 'suppliers',
    templateUrl: './supplier.html'
})
export class SupplierComponent {

    @Input() public supplierList: Supplier[] = new Array <Supplier>();

    constructor() { }

    addNewSupplier() {

        if (this.supplierList == null)
            this.supplierList = [];

        this.supplierList.push({
            name: "",
            sku: "",
            price: null,
            validFrom: "",
            validTo: ""
        });
    }

    deleteSupplier(index: number) {
        this.supplierList.splice(index, 1);
    }

}
