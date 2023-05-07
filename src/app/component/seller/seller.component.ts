import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  ngOnInit(): void {}
  onModeSwitch() {
    this.loginMode = !this.loginMode;
  }
  checkLogin() {}
}
