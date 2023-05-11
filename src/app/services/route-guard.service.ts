import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { GlobalConstants } from '../shared/global-constance';
import { AuthService } from './auth.service';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class RouteGuardService {
  constructor(
    public auth: AuthService,
    public router: Router,
    private snackBarService: SnackbarService
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let expectedRoleArray: any = JSON.stringify(route.data);
    expectedRoleArray = JSON.stringify(expectedRoleArray.expectedRole);
    const token: any = localStorage.getItem('token');

    var tokenPayLoad: any;
    try {
      tokenPayLoad = jwt_decode(token);
    } catch (error) {
      localStorage.clear();
      this.router.navigate(['home']);
    }
    let expectedRole = tokenPayLoad.role;

    if (tokenPayLoad.role == 'admin') {
      if (this.auth.isAuthincated() && tokenPayLoad.role == expectedRole) {
        return true;
      }
      this.snackBarService.openSnackBar(
        GlobalConstants.unAuthorized,
        GlobalConstants.error
      );
      this.router.navigate(['dashboard']);
      return false;
    } else {
      this.router.navigate(['/']);
      localStorage.clear();
      return false;
    }
  }
}

// let expectedRoleArray = router.data;
// expectedRoleArray = expectedRoleArray['expectedRole'];
// const token: any = localStorage.getItem('token');
// var tokenPayLoad: any;
// try {
//   tokenPayLoad = jwt_decode(token);
// } catch (error) {
//   localStorage.clear();
//   this.router.navigate(['/']);
// }
// let expectedRole = '';

// for (let i = 0; i < expectedRole.length; i++) {
//   if (expectedRoleArray[i] == tokenPayLoad.role) {
//     expectedRole = tokenPayLoad.role;
//   }
// }
// if (tokenPayLoad.role == 'user' || tokenPayLoad.role == 'admin') {
//   if (this.auth.isAuthincated() && tokenPayLoad.role == expectedRole) {
//     return true;
//   }
//   this.snackBarService.openSnackBar(
//     GlobalConstants.unAuthorized,
//     GlobalConstants.error
//   );
//   this.router.navigate(['dashboard']);
//   return false;
// } else {
//   this.router.navigate(['/']);
//   localStorage.clear();
//   return false;
// }
