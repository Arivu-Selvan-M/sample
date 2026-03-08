import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment';
import { TransactionsComponent } from './transactions/transactions';
import { PaymentMethodsComponent } from './methods/methods';

const routes: Routes = [
  {
    path: '',
    component: PaymentComponent,
    children: [
      { path: 'transactions', component: TransactionsComponent },
      { path: 'methods', component: PaymentMethodsComponent },
      { path: '', redirectTo: 'transactions', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentRoutingModule {}
