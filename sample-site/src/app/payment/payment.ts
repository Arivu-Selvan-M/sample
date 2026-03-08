import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  standalone: false,
  templateUrl: './payment.html',
  styleUrl: './payment.scss',
})
export class PaymentComponent {
  paymentMenu = [
    { label: 'Transactions', link: '/payment/transactions' },
    { label: 'Methods', link: '/payment/methods' }
  ];
}

