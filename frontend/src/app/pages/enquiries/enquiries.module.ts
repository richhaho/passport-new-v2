import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnquiriesComponent } from './enquiries.component';
import { EnquirieListComponent } from './enquirieList/enquirieList.component';
import { EnquirieDetailComponent } from './enquirieDetail/enquirieDetail.component';
import { EnquiriesRoutingModule } from './enquiries-routing.module';
import { MorrisJsModule } from 'angular-morris-js';

@NgModule({
  imports: [
    CommonModule,
    EnquiriesRoutingModule,
    MorrisJsModule
  ],
  declarations: [
    EnquiriesComponent,
    EnquirieListComponent,
    EnquirieDetailComponent
  ],
  providers: [
  ],
})
export class EnquiriesModule { }