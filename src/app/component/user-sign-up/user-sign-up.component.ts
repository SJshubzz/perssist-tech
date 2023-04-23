import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
import { passwordMatchValidator } from 'src/app/shared/passwordMatch';
import { UserLoginComponent } from '../user-login/user-login.component';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css'],
})
export class UserSignUpComponent implements OnInit {
  signupForm: any = FormGroup;
  responseMessage: any;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userservice: UserAuthService,
    private snackBarService: SnackbarService,
    public dialelogReg: MatDialogRef<UserSignUpComponent>,
    private ngxService: NgxUiLoaderService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group(
      {
        first_name: [
          null,
          [Validators.required, Validators.pattern(GlobalConstants.nameRegex)],
        ],
        last_name: [
          null,
          [Validators.required, Validators.pattern(GlobalConstants.nameRegex)],
        ],
        email: [
          null,
          [Validators.required, Validators.pattern(GlobalConstants.emailRegex)],
        ],
        contact: [
          null,
          [
            Validators.required,
            Validators.pattern(GlobalConstants.contactRegex),
          ],
        ],
        password: [null, [Validators.required]],
        confirmPassword: [null, [Validators.required]],
      },
      { validator: passwordMatchValidator('password', 'confirmPassword') }
    );
  }

  validateSubmit() {
    if (
      this.signupForm.controls['password'].value !=
      this.signupForm.controls['confirmPassword'].value
    ) {
      return true;
    } else {
      return false;
    }
  }

  handleSubmit() {
    this.ngxService.start();
    var formData = this.signupForm.value;
    var data = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      contact: formData.contact,
      password: formData.password,
    };
    this.userservice.signup(data).subscribe(
      (response: any) => {
        this.ngxService.stop();
        this.dialelogReg.close();
        this.responseMessage = response?.message;
        this.snackBarService.openSnackBar(this.responseMessage, '');
        this.router.navigate(['/']);
      },
      (error) => {
        this.ngxService.stop();
        if (error.error?.message) {
          this.responseMessage = error.error?.message;
        } else {
          this.responseMessage = GlobalConstants.genericError;
        }
        this.snackBarService.openSnackBar(
          this.responseMessage,
          GlobalConstants.error
        );
      }
    );
  }
 
}
