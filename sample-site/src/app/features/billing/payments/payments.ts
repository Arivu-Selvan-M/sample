import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService } from '../../../shared/dialog/dialog.service';
import { FooterButton } from '../../../shared/footer/footer';

@Component({
  selector: 'app-billing-payments',
  standalone: false,
  templateUrl: './payments.html',
  styleUrl: './payments.scss',
})
export class BillingPaymentsComponent implements OnInit {
  paymentForm!: FormGroup;
  footerButtons: FooterButton[] = [
    { label: 'Pay Now', action: 'paynow', isPrimary: true }
  ];

  constructor(private fb: FormBuilder, private dialogService: DialogService) {}

  ngOnInit() {
    this.paymentForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(0.01)]],
      date: ['', Validators.required],
      method: ['', Validators.required],
      description: ['']
    });
  }

  onButtonClick(action: string) {
    if (action === 'paynow') {
      this.processPayment();
    }
  }

  processPayment() {
    if (this.paymentForm.valid) {
      const formData = this.paymentForm.value;
      const message = `Payment Processed Successfully!\n\nAmount: $${formData.amount}\nDate: ${formData.date}\nMethod: ${formData.method}\nDescription: ${formData.description || 'N/A'}`;
      
      this.dialogService.openDialog({
        title: 'Payment Successful',
        message: message,
        actionType: 'info'
      });
    } else {
      this.dialogService.openDialog({
        title: 'Payment Failed',
        message: 'Please fill in all required fields correctly.',
        actionType: 'error'
      });
    }
  }
}
