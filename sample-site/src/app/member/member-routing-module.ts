import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MemberComponent } from './member';
import { DashboardComponent } from './dashboard/dashboard';
import { ProfileComponent } from './profile/profile';
import { SettingsComponent } from './settings/settings';

const routes: Routes = [
  {
    path: '',
    component: MemberComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'settings', component: SettingsComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
