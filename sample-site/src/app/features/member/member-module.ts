import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberRoutingModule } from './member-routing-module';
import { SharedModule } from '../../shared/shared-module';
import { FormsModule } from '@angular/forms';
import { MemberComponent } from './member';
import { DashboardComponent } from './dashboard/dashboard';
import { ProfileComponent } from './profile/profile';
import { SettingsComponent } from './settings/settings';
@NgModule({
  declarations: [
    MemberComponent,
    DashboardComponent,
    ProfileComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    MemberRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class MemberModule { }
