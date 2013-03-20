import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingsComponent } from './bookings.component';
import { BookingListComponent } from './bookingList/bookingList.component';
import { BookingDetailComponent } from './bookingDetail/bookingDetail.component';
import { BookingsRoutingModule } from './bookings-routing.module';
import { MorrisJsModule } from 'angular-morris-js';

@NgModule({
  imports: [
    CommonModule,
    BookingsRoutingModule,
    MorrisJsModule
  ],
  declarations: [
    BookingsComponent,
    BookingListComponent,
    BookingDetailComponent
  ],
  providers: [
  ],
})
export class BookingsModule { }