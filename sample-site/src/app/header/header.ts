import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  constructor(private router: Router) {}

  goToMember() {
    this.router.navigate(['/member']);
  }

  goToBilling() {
    this.router.navigate(['/billing']);
  }

  goToPayment() {
    this.router.navigate(['/payment']);
  }

  goDashboard() {
    this.router.navigate(['/member']);
  }
}
