import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { SuppliersComponent } from './suppliers.component';
import { SupplierListComponent } from './supplierList/supplierList.component';
import { SupplierDetailComponent } from './supplierDetail/supplierDetail.component';

const routes: Routes = [
  {
    path: '', component: SuppliersComponent, children: [
      {
        path: '',
        component:SupplierListComponent
      },
      {
        path: ':id',
        component: SupplierDetailComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuppliersRoutingModule { }
