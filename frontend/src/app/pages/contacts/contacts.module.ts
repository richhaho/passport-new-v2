import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsComponent } from './contacts.component';
import { ContactListComponent } from './contactList/contactList.component';
import { ContactDetailComponent } from './contactDetail/contactDetail.component';
import { ContactsRoutingModule } from './contacts-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule
  ],
  declarations: [
    ContactsComponent,
    ContactListComponent,
    ContactDetailComponent
  ],
  providers: [
  ],
})
export class ContactsModule { }