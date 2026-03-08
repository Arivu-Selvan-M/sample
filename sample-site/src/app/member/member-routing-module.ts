import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MemberComponent } from './member';
import { DashboardComponent } from './dashboard/dashboard';
import { ProfileComponent } from './profile/profile';
import { SettingsComponent } from './settings/settings';

const routes: Routes = [
  {
    path: 'member',
    children: [
      { path: '', component: DashboardComponent },
      {
        path: 'module',
        component: MemberComponent,
        children: [
          { path: 'profile', component: ProfileComponent },
          { path: 'settings', component: SettingsComponent },
          { path: '', redirectTo: 'profile', pathMatch: 'full' }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
