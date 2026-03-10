import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingComponent } from './billing';
import { InvoicesComponent } from './invoices/invoices';
import { BillingPaymentsComponent } from './payments/payments';

const routes: Routes = [
  {
    path: '',
    component: BillingComponent,
    children: [
      { path: 'invoices', component: InvoicesComponent },
      { path: 'payments', component: BillingPaymentsComponent },
      { path: '', redirectTo: 'invoices', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillingRoutingModule {}

