import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-profile',
  standalone: false,
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class ProfileComponent {
  @ViewChild('profileForm') profileForm!: NgForm;
  maxDate: string = new Date().toISOString().split('T')[0];
  profileData = {
    userName: '',
    dept: '',
    email: '',
    mobile: '',
    designation: '',
    address: '',      // New
    country: '',      // New
    gender: '',       // New
    subscribe: false,
    dob: ''  // New (Boolean)
  };
}