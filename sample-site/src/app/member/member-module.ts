import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberRoutingModule } from './member-routing-module';
import { SharedModule } from '../shared/shared-module';

import { MemberComponent } from './member';
import { DashboardComponent } from './dashboard/dashboard';
import { ProfileComponent } from './profile/profile';
import { SettingsComponent } from './settings/settings';
import { MemberFooterComponent } from './member-footer/member-footer';

@NgModule({
  declarations: [
    MemberComponent,
    DashboardComponent,
    ProfileComponent,
    SettingsComponent,
    MemberFooterComponent
  ],
  imports: [
    CommonModule,
    MemberRoutingModule,
    SharedModule
  ]
})
export class MemberModule { }
