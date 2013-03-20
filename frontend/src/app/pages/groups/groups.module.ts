import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsComponent } from './groups.component';
import { GroupListComponent } from './groupList/groupList.component';
import { GroupDetailComponent } from './groupDetail/groupDetail.component';
import { GroupsRoutingModule } from './groups-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GroupsRoutingModule
  ],
  declarations: [
    GroupsComponent,
    GroupListComponent,
    GroupDetailComponent
  ],
  providers: [
  ],
})
export class GroupsModule { }