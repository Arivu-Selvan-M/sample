import { Component } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.html',
  styleUrls: ['./member.scss'],
  standalone: false
})
export class MemberComponent {
  memberMenu = [
    { label: 'Profile', link: 'profile' },
    { label: 'Settings', link: 'settings' }
  ];
}