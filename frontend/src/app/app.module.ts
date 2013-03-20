import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './pages/login/login.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";
import {DataTablesModule} from "angular-datatables";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CustomInterceptor} from "./services/http.interceptor";
import {NgxUiLoaderModule} from "ngx-ui-loader";
import {BsDatepickerModule} from "ngx-bootstrap";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from "angular-calendar/date-adapters/date-fns";
import {FlatpickrModule} from "angularx-flatpickr";
import {DemoUtilsModule} from "../demo-modules/demo-utils/module";
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import {ColorPickerModule} from "ngx-color-picker";
import {SortablejsModule} from "ngx-sortablejs";
import {GooglePlaceModule} from "ngx-google-places-autocomplete";
import { AccordionModule } from 'ngx-bootstrap/accordion';
import {AngularEditorModule} from '@kolkov/angular-editor';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { MorrisJsModule } from 'angular-morris-js';


@NgModule({
  entryComponents:[

  ],
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    BrowserAnimationsModule,
    NgxUiLoaderModule,
    NgbModule,
    BsDatepickerModule.forRoot(),
    ToastrModule.forRoot(),
    CalendarModule.forRoot({provide: DateAdapter, useFactory: adapterFactory}),
    FlatpickrModule,
    DemoUtilsModule,
    TimepickerModule.forRoot(),
    PaginationModule.forRoot(),
    SortablejsModule.forRoot({animation: 150}),
    ColorPickerModule,
    GooglePlaceModule,
    GooglePlaceModule,
    AngularEditorModule,
    AccordionModule.forRoot(),
    SlimLoadingBarModule,
    MorrisJsModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
