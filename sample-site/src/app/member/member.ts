import { Component } from '@angular/core';
import { DialogService } from '../shared/dialog/dialog.service';
import { FooterButton } from '../shared/footer/footer';

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

  footerButtons: FooterButton[] = [
    { label: 'View Profile', action: 'view-profile' },
    { label: 'Settings', action: 'edit-settings' },
    { label: 'Logout', action: 'logout', isPrimary: true }
  ];

  constructor(private dialogService: DialogService) {}

  onFooterButtonClick(action: string) {
    switch (action) {
      case 'view-profile':
        this.dialogService.openDialog({
          title: 'Member Profile',
          message: 'View your complete member profile.',
          actionType: 'info'
        });
        break;
      case 'edit-settings':
        this.dialogService.openDialog({
          title: 'Edit Settings',
          message: 'Modify your account settings.',
          actionType: 'info'
        });
        break;
      case 'logout':
        this.dialogService.openDialog({
          title: 'Logout',
          message: 'Are you sure you want to logout?',
          actionType: 'confirm'
        });
        break;
    }
  }
}