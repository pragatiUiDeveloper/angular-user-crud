import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AppRoutingModule } from './/app-routing.module';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HttpClientModule }    from '@angular/common/http';

import {TableModule} from 'primeng/table';
import { DataTableComponent } from './data-table/data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    UserDetailComponent,
    PageNotFoundComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
