import { Component } from '@angular/core';

@Component({
  selector: 'app-billing',
  standalone: false,
  templateUrl: './billing.html',
  styleUrl: './billing.scss',
})
export class BillingComponent {
  billingMenu = [
    { label: 'Invoices', link: '/billing/invoices' },
    { label: 'Payments', link: '/billing/payments' }
  ];
}

