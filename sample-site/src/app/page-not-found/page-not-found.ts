import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: false,
  templateUrl: './page-not-found.html',
  styleUrl: './page-not-found.scss',
})
export class PageNotFoundComponent {

  @Input() display: boolean = true;
    constructor(private router: Router) {}
  onReturnToHome() {
    this.router.navigate(['/member']);
  }
}
