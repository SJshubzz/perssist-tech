import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  url = Environment.apiUrl;
  constructor(private HttpClient: HttpClient) {}
  signup(data: any) {
    return this.HttpClient.post(this.url + '/user/signup', data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }

  login(data: any) {
    return this.HttpClient.post(this.url + '/user/login', data, {
      headers: new HttpHeaders().set('Content-Type', 'Application/json'),
    });
  }
  checkToken() {
    return this.HttpClient.get(this.url + '/user/checkToken');
  }
  forgetPassword(data: any) {
    return this.HttpClient.post(this.url + '/user/forgotPassword' + data, {
      Headers: new HttpHeaders().set('Content-Type', 'appication/json'),
    });
  }
}
