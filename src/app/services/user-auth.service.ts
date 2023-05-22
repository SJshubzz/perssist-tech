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

  forgetPassword(data: any) {
    return this.HttpClient.post(this.url + '/user/forgotPassword' + data, {
      headers: new HttpHeaders().set('Content-Type', 'Appication/json'),
    });
  }

  forgotPassword(email: any) {
    const url = 'http://localhost:8082/user/forgotPassword';
    const body = { email: email };
    const options = { withCredentials: true };
    return this.HttpClient.post(url, body);
  }

  checkToken() {
    return this.HttpClient.get(this.url + '/user/checkToken');
  }
  changePassword(data: any) {
    return this.HttpClient.post(this.url + '/user/changePassword', data, {
      headers: new HttpHeaders().set('Content-Type', 'Application/json'),
    });
  }
  getUser() {
    return this.HttpClient.get(this.url + '/user/get');
  }

  update(data: any) {
    return this.HttpClient.post(this.url + '/user/update', data, {
      headers: new HttpHeaders().set('Content-type', 'application/json'),
    });
  }
}
