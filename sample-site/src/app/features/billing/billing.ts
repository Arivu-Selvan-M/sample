import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService } from '../../shared/dialog/dialog.service';
import { FooterButton } from '../../shared/footer/footer';

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

  billingForm!: FormGroup;  // reactive form for billing data

  footerButtons: FooterButton[] = [
    { label: 'Download', action: 'download-invoice' },
    { label: 'Support', action: 'contact-support' },
    { label: 'Pay Now', action: 'pay-bill', isPrimary: true }
  ];

  constructor(private fb: FormBuilder, private dialogService: DialogService) {}

  ngOnInit() {
    this.billingForm = this.fb.group({
      invoiceNumber: ['', Validators.required],
      totalAmount: ['', [Validators.required, Validators.min(0.01)]],
      dueDate: ['', Validators.required],
      status: ['Pending'],
      description: ['']
    });
  }

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
        if (this.billingForm.valid) {
          const data = this.billingForm.value;
          const billMessage = `Bill Payment Summary:\n\nInvoice Number: ${data.invoiceNumber}\nAmount Due: $${data.totalAmount}\nDue Date: ${data.dueDate}\nStatus: ${data.status}\nDescription: ${data.description || 'N/A'}\n\nProceeding with payment?`;
          this.dialogService.openDialog({
            title: 'Pay Bill',
            message: billMessage,
            actionType: 'confirm'
          });
        } else {
          this.dialogService.openDialog({
            title: 'Form Incomplete',
            message: 'Please fill in all required billing details.',
            actionType: 'error'
          });
        }
        break;
    }
  }
}

