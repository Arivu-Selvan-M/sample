import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing-module';
import { SharedModule } from '../shared/shared-module';
import { PaymentComponent } from './payment';
import { TransactionsComponent } from './transactions/transactions';
import { PaymentMethodsComponent } from './methods/methods';
import { PaymentFooterComponent } from './payment-footer/payment-footer';

@NgModule({
  declarations: [
    PaymentComponent,
    TransactionsComponent,
    PaymentMethodsComponent,
    PaymentFooterComponent
  ],
  imports: [CommonModule, PaymentRoutingModule, SharedModule],
})
export class PaymentModule {}
