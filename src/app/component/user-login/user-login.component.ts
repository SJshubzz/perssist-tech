import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { GlobalConstants } from 'src/app/shared/global-constance';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { UserSignUpComponent } from '../user-sign-up/user-sign-up.component';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  hide = true;
  loginForm: any = FormGroup;
  responMessage: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userservie: UserAuthService,
    private ngxService: NgxUiLoaderService,
    private dialoref: MatDialogRef<UserLoginComponent>,
    private snackBarService: SnackbarService,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [
        null,
        [Validators.required, Validators.pattern(GlobalConstants.emailRegex)],
      ],
      password: [null, [Validators.required]],
    });
  }
  handleLoginSubmit() {
    this.ngxService.start();
    var formData = this.loginForm.value;
    var data = {
      email: formData.email,
      password: formData.password,
    };
    this.userservie.login(data).subscribe(
      (response: any) => {
        this.ngxService.stop();
        this.dialoref.close();
        localStorage.setItem('token', response.token);
        window.location.reload();
      },
      (error) => {
        if (error.error?.message) {
          this.responMessage = error.error?.message;
        } else {
          this.responMessage = GlobalConstants.genericError;
        }
        this.snackBarService.openSnackBar(
          this.responMessage,
          GlobalConstants.error
        );
        this.ngxService.stop();
      }
    );
  }
  handleSignupAction() {
    this.dialoref.close();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    this.dialog.open(UserSignUpComponent, dialogConfig);
  }

  handleForgotPasswordAction() {
    this.dialoref.close();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = 'auto';
    this.dialog.open(ForgotPasswordComponent, dialogConfig);
  }
}
