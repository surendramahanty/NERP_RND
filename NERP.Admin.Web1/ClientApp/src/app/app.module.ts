import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import 'hammerjs';
import { Routing } from './app.routing';
import { AppComponent } from './app.component';

import { CacheInterceptor } from './common/interceptors/cacheInterceptor';
import { AuthService } from './common/auth/auth.service';

import { Dashboard } from './dashboard/views/dashboard';
import { GroupModule } from './groups/group.module';
import { RoleModule } from './roles/role.module';
import { UserModule } from './users/user.module';
import { EntitiesModule } from './entities/entities.module';
import { LayerModule } from './layers/layer.module';
import { AccessoryModule } from './accessories/accessory.module';
import { CivilworkModule } from './civilworks/civilwork.module';
import { GeneralSettingsModule } from './generalSettings/generalSettings.module';
import { ActivityLogModule } from './activityLogs/activityLog.module';
import { Helper } from './common/helper';
import { DTSearch } from './components/data-table/dt-search';
import { DTPagination } from './components/data-table/dt-pagination';
import { SharedModule } from 'primeng/components/common/shared';

@NgModule({
    declarations: [
        AppComponent,
        Dashboard,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        Routing,
        FormsModule,

        GroupModule,
        RoleModule,
        UserModule,
        EntitiesModule,
        LayerModule,
        AccessoryModule,
        CivilworkModule,
        GeneralSettingsModule,
        ActivityLogModule,

    ],

    providers: [
        AuthService,
        Helper,
        { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }
    ],

    bootstrap: [AppComponent]

})
export class AppModule { }
