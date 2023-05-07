import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  url = Environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getDetails() {
    return this.httpClient.get(this.url + '/dashboard/getDetails');
  }
}
