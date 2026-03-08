import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface DialogConfig {
  title: string;
  message: string;
  actionType: 'confirm' | 'info' | 'warning' | 'error';
  data?: any;
}

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private dialogState$ = new BehaviorSubject<{
    show: boolean;
    config: DialogConfig | null;
  }>({
    show: false,
    config: null
  });

  dialog$ = this.dialogState$.asObservable();

  openDialog(config: DialogConfig) {
    this.dialogState$.next({
      show: true,
      config
    });
  }

  closeDialog() {
    this.dialogState$.next({
      show: false,
      config: null
    });
  }

  getDialogState(): Observable<any> {
    return this.dialog$;
  }
}
