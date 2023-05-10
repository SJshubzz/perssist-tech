import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { ChangePasswordComponent } from '../material-componenet/dialog/change-password/change-password.component';
import { ConfirmationComponent } from '../material-componenet/dialog/confirmation/confirmation.component';
import { UserLoginComponent } from '../user-login/user-login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default';
  userName: string = '';
  role: any = '';

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private userService: UserAuthService
  ) {}
  ngOnInit(): void {
    var token: any = localStorage.getItem('token');
    const decodedToken: any = jwt_decode(token);
    this.role = decodedToken.role;

    if (token) {
      if (this.role === 'admin') {
        this.menuType = 'seller';
        this.router.navigate(['persist']);
      } else {
        this.menuType = 'user';
      }
    } else {
      this.menuType = 'default';
    }
  }
  logout() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      message: 'Logout',
      confirmation: true,
    };
    const dialogRef = this.dialog.open(ConfirmationComponent, dialogConfig);
    const sub = dialogRef.componentInstance.onImitStatusChange.subscribe(
      (response) => {
        dialogRef.close();
        localStorage.clear();
        this.router.navigate(['/']);
      }
    );
    this.menuType = 'default';
  }

  changePassword() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    this.dialog.open(ChangePasswordComponent, dialogConfig);
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
