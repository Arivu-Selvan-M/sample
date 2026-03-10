import { Component } from '@angular/core';
import { DialogService } from '../../shared/dialog/dialog.service';
import { FooterButton } from '../../shared/footer/footer';

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

  footerButtons: FooterButton[] = [
    { label: 'Receipts', action: 'view-receipts' },
    { label: 'Add Card', action: 'add-card' },
    { label: 'Pay', action: 'make-payment', isPrimary: true }
  ];

  constructor(private dialogService: DialogService) {}

  onFooterButtonClick(action: string) {
    switch (action) {
      case 'view-receipts':
        this.dialogService.openDialog({
          title: 'View Receipts',
          message: 'Download your payment receipts.',
          actionType: 'info'
        });
        break;
      case 'add-card':
        this.dialogService.openDialog({
          title: 'Add Card',
          message: 'Add a new payment method?',
          actionType: 'confirm'
        });
        break;
      case 'make-payment':
        this.dialogService.openDialog({
          title: 'Make Payment',
          message: 'Proceed with payment?',
          actionType: 'confirm'
        });
        break;
    }
  }
}

