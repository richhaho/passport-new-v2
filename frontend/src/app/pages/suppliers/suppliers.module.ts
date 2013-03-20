import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliersComponent } from './suppliers.component';
import { SupplierListComponent } from './supplierList/supplierList.component';
import { SupplierDetailComponent } from './supplierDetail/supplierDetail.component';
import { SuppliersRoutingModule } from './suppliers-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SuppliersRoutingModule
  ],
  declarations: [
    SuppliersComponent,
    SupplierListComponent,
    SupplierDetailComponent
  ],
  providers: [
  ],
})
export class SuppliersModule { }