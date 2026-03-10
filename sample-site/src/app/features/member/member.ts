// member.ts
import { Component } from '@angular/core';
import { DialogService } from '../../shared/dialog/dialog.service';
import { FooterButton } from '../../shared/footer/footer';
import { ProfileComponent } from './profile/profile'; 

@Component({
  selector: 'app-member',
  templateUrl: './member.html',
  styleUrls: ['./member.scss'],
  standalone: false
})
export class MemberComponent {
  activeChild: any;

  memberMenu = [
    { label: 'Dashboard', link: '/member/dashboard' },
    { label: 'Profile', link: '/member/profile' },
    { label: 'Settings', link: '/member/settings' }
  ];

  footerButtons: FooterButton[] = [
    { label: 'View Profile', action: 'view-profile' },
    { label: 'Settings', action: 'edit-settings' },
    { label: 'Save', action: 'save', isPrimary: true }
  ];

  constructor(private dialogService: DialogService) {}

  onChildActivate(componentInstance: any) {
    this.activeChild = componentInstance;
  }

  onFooterButtonClick(action: string) {
    switch (action) {
      case 'save':
        this.handleSaveAction();
        break;
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
    }
  }

  private handleSaveAction() {
    if (this.activeChild instanceof ProfileComponent) {
      const form = this.activeChild.profileForm;

      if (form && form.valid) {
        const data = form.value;
        
        // Comprehensive message including ALL fields
        const summaryMessage = `
          Name: ${data.userName}
          Dept: ${data.dept}
          Email: ${data.email}
          Mobile: ${data.mobile}
          Designation: ${data.designation}
          DOB: ${data.dob}
          Address: ${data.address}
          Country: ${data.country}
          Gender: ${data.gender}
          Newsletter: ${data.subscribe ? 'Subscribed' : 'Not Subscribed'}
        `;

        this.dialogService.openDialog({
          title: 'Confirm Profile Changes',
          message: summaryMessage,
          actionType: 'confirm'
        });
      } else {
        alert('Please fill out all required fields correctly.');
      }
    }
  }
}