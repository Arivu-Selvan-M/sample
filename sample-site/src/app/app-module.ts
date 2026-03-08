import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module'; 
import { RouterModule } from '@angular/router';

import { AppComponent } from './app';
import { HeaderComponent } from './header/header';
import { PageNotFoundComponent } from './page-not-found/page-not-found';
import { SharedModule } from './shared/shared-module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }