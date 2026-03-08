import { Component, Input } from '@angular/core';

export interface MenuItem {
  label: string;
  link: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class SidebarComponent {
  @Input() menuItems: MenuItem[] = [];
}
