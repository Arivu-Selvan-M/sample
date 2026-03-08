import { Component } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.html',
  styleUrls: ['./member.scss'],
  standalone: false
})
export class MemberComponent {
  memberMenu = [
    { label: 'Dashboard', link: '/member/dashboard' },
    { label: 'Profile', link: '/member/profile' },
    { label: 'Settings', link: '/member/settings' }
  ];
}