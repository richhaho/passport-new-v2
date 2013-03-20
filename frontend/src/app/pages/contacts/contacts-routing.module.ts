import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { ContactsComponent } from './contacts.component';
import { ContactListComponent } from './contactList/contactList.component';
import { ContactDetailComponent } from './contactDetail/contactDetail.component';

const routes: Routes = [
  {
    path: '', component: ContactsComponent, children: [
      {
        path: '',
        component: ContactListComponent
      },
      {
        path: ':id',
        component: ContactDetailComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
