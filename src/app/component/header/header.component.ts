import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserLoginComponent } from '../user-login/user-login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default';
  userName: string = '';

  constructor(private dialog: MatDialog, private router: Router) {}
  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.menuType = 'user';
      this.userName = 'welcome';
    }
  }
  logout() {
    localStorage.removeItem('token');
    window.location.reload();
  }

  loginUser() {
    this.menuType = 'user';
  }
  loginSeller() {
    this.menuType = 'seller';
  }

  handleSigninAction() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = 'auto';
    this.dialog.open(UserLoginComponent, dialogConfig);
  }
}
