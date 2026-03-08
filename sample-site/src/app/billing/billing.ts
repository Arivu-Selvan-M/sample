import { Component } from '@angular/core';
import { DialogService } from '../shared/dialog/dialog.service';
import { FooterButton } from '../shared/footer/footer';

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

  footerButtons: FooterButton[] = [
    { label: 'Download', action: 'download-invoice' },
    { label: 'Support', action: 'contact-support' },
    { label: 'Pay Now', action: 'pay-bill', isPrimary: true }
  ];

  constructor(private dialogService: DialogService) {}

  onFooterButtonClick(action: string) {
    switch (action) {
      case 'download-invoice':
        this.dialogService.openDialog({
          title: 'Download Invoice',
          message: 'Download the selected invoice?',
          actionType: 'confirm'
        });
        break;
      case 'contact-support':
        this.dialogService.openDialog({
          title: 'Contact Support',
          message: 'Email support@company.com for help.',
          actionType: 'info'
        });
        break;
      case 'pay-bill':
        this.dialogService.openDialog({
          title: 'Pay Bill',
          message: 'Ready to pay your bill?',
          actionType: 'confirm'
        });
        break;
    }
  }
}

