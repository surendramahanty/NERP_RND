import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import 'hammerjs';
import { Routing } from './app.routing';
import { AppComponent } from './app.component';

import { Dashboard } from './dashboard/views/dashboard';
import { HomepassModule } from './homepasses/homepass.module';
import { ClusterModule } from './clusters/cluster.module';
import { DesignModule } from './designs/design.module';
import { AuthService } from './common/auth/auth.service';
import { Helper } from './common/helper';
import { CacheInterceptor } from './common/interceptors/cacheInterceptor';

@NgModule({
    declarations: [
        AppComponent,
        Dashboard
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        Routing,
        FormsModule,
        HomepassModule,
        ClusterModule,
        DesignModule,
    ],

    providers: [
        AuthService,
        Helper,
        { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }
    ],

    bootstrap: [AppComponent]

})
export class AppModule { }
