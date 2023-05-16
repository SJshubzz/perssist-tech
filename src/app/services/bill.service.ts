import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BillService {
  url = Environment.apiUrl;
  constructor(private http: HttpClient) {}

  generateReport(data: any) {
    return this.http.post(this.url + '/bill/generateReport', data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }

  getPdf(data: any): Observable<Blob> {
    return this.http.post(this.url + '/bill/getPdf', data, {
      responseType: 'blob',
    });
  }

  getBills() {
    return this.http.get(this.url + '/bill/getBills');
  }
}
