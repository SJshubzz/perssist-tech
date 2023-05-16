import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  public isAuthincated(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['home']);
      return false;
    } else {
      return true;
    }
  }
}
