import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DialogComponent } from './dialog/dialog';
import { SidebarComponent } from './sidebar/sidebar';
import { FooterComponent } from './footer/footer';
import { PageNotFoundComponent } from './page-not-found/page-not-found';

@NgModule({
  declarations: [
    DialogComponent,
    SidebarComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    DialogComponent,
    SidebarComponent,
    FooterComponent,
    PageNotFoundComponent
  ]
})
export class SharedModule { }
