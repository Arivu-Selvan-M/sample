import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface FooterButton {
  label: string;
  action: string;
  isPrimary?: boolean;
}

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  @Input() buttons: FooterButton[] = [];
  @Input() showCopyright: boolean = true;
  @Output() buttonClicked = new EventEmitter<string>();

  onButtonClick(action: string) {
    this.buttonClicked.emit(action);
  }
}
