import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { DialogService, DialogConfig } from './dialog.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dialog',
  standalone: false,
  templateUrl: './dialog.html',
  styleUrl: './dialog.scss',
})
export class DialogComponent implements OnInit, OnDestroy {
  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  display: boolean = false;
  dialogConfig: DialogConfig | null = null;
  private subscription: Subscription | null = null;

  constructor(private dialogService: DialogService) {}

  ngOnInit() {
    this.subscription = this.dialogService.getDialogState().subscribe(state => {
      this.display = state.show;
      this.dialogConfig = state.config;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onConfirm() {
    this.confirm.emit();
    this.dialogService.closeDialog();
  }

  onCancel() {
    this.cancel.emit();
    this.dialogService.closeDialog();
  }
}
