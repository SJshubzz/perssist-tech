import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellerAuthService } from 'src/app/services/seller-auth.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css'],
})
export class SellerComponent implements OnInit {
  loginMode: boolean = true;
  username = 'shubham';
  password = '';
  invalidLogin = false;

  constructor(
    private router: Router,
    private loginservice: SellerAuthService
  ) {}

  ngOnInit(): void {}
  onModeSwitch() {
    this.loginMode = !this.loginMode;
  }
  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)) {
      this.router.navigate(['seller-home']);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
      console.warn('Wrong');
    }
  }
}
