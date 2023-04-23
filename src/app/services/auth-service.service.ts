import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { seller } from './seller';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private baseURL = 'http://localhost:8082/api/v1/seller';
  constructor(private http: HttpClient) {}
  getSellerList(): Observable<seller[]> {
    return this.http.get<seller[]>(`${this.baseURL}`);
  }
}
