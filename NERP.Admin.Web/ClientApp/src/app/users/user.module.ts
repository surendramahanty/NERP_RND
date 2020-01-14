import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatRadioModule, MatSelectModule, MatCheckboxModule } from '@angular/material';

import { UserRouting } from './user.routes';
import { UserList } from './views/user-list';
import { UserDetails } from './views/user-details';
import { UserService } from './services/user.service';
import { SharedModule } from '../shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UserRouting,
        MatCheckboxModule,
        MatRadioModule,
        MatSelectModule,
        SharedModule
    ],
    declarations: [
        UserList,
        UserDetails
    ],
    providers: [
        UserService
    ]
})
export class UserModule { }
