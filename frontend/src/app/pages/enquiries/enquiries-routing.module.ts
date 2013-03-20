import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { EnquiriesComponent } from './enquiries.component';
import { EnquirieListComponent } from './enquirieList/enquirieList.component';
import { EnquirieDetailComponent } from './enquirieDetail/enquirieDetail.component';

const routes: Routes = [
  {
    path: '', component: EnquiriesComponent, children: [
      {
        path: '',
        component: EnquirieListComponent
      },
      {
        path: ':id',
        component: EnquirieDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnquiriesRoutingModule { }
