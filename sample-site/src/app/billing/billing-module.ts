import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing-module';
import { SharedModule } from '../shared/shared-module';
import { BillingComponent } from './billing';
import { InvoicesComponent } from './invoices/invoices';
import { BillingPaymentsComponent } from './payments/payments';
import { BillingFooterComponent } from './billing-footer/billing-footer';

@NgModule({
  declarations: [
    BillingComponent,
    InvoicesComponent,
    BillingPaymentsComponent,
    BillingFooterComponent
  ],
  imports: [CommonModule, BillingRoutingModule, SharedModule],
})
export class BillingModule {}
