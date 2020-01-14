import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { DTPagination } from './components/data-table/dt-pagination';
import { DTSearch } from './components/data-table/dt-search';
import { CustomFieldsGroup } from './components/cf-group/cf-group';


@NgModule({
    imports: [CommonModule, RouterModule, FormsModule],
    declarations: [
        DTSearch,
        DTPagination,
        CustomFieldsGroup
    ],
    exports: [
        FormsModule,
        RouterModule,
        DTSearch,
        DTPagination,
        CustomFieldsGroup
    ]
})

export class SharedModule { }
