import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { GroupsComponent } from './groups.component';
import { GroupListComponent } from './groupList/groupList.component';
import { GroupDetailComponent } from './groupDetail/groupDetail.component';

const routes: Routes = [
  {
    path: '', component: GroupsComponent, children: [
      {
        path: '',
        component: GroupListComponent
      },
      {
        path: ':id',
        component: GroupDetailComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }
