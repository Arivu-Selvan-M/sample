import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DialogComponent } from './dialog/dialog';
import { SidebarComponent } from './sidebar/sidebar';
import { FooterComponent } from './footer/footer';

@NgModule({
  declarations: [
    DialogComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    DialogComponent,
    SidebarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
