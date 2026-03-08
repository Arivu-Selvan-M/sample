import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found'; 

const routes: Routes = [
  { 
    path: 'member', 
    loadChildren: () => import('./member/member-module').then(m => m.MemberModule) 
  },
  { 
    path: 'billing', 
    loadChildren: () => import('./billing/billing-module').then(m => m.BillingModule) 
  },
  { 
    path: 'payment', 
    loadChildren: () => import('./payment/payment-module').then(m => m.PaymentModule) 
  },
  
  // Default path - goes to member dashboard
  { path: '', redirectTo: 'member', pathMatch: 'full' },
  
  // 404 Path (MUST be last)
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
