import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { BookingsComponent } from './bookings.component';
import { BookingListComponent } from './bookingList/bookingList.component';
import { BookingDetailComponent } from './bookingDetail/bookingDetail.component';

const routes: Routes = [
  {
    path: '', component: BookingsComponent, children: [
      {
        path: '',
        component: BookingListComponent
      },
      {
        path: ':id',
        component: BookingDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }
