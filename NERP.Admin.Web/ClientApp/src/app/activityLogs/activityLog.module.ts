import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material';
import { SharedModule } from '../shared.module';
import { ActivityLogRouting } from './activityLog.routes';
import { ActivityLogService } from './services/activityLog.service';
import { ActivityLogDetails } from './views/activityLog-details';
import { ActivityLogList } from './views/activityLog-list';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatSelectModule,
        ActivityLogRouting,
        SharedModule
    ],
    declarations: [
        ActivityLogList,
        ActivityLogDetails
    ],
    providers: [
        ActivityLogService,
    ]
})
export class ActivityLogModule { }
