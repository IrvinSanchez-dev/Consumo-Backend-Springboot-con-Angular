import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Ejemplo: GET request
  getData() {
    return this.http.get(`${this.apiUrl}/api/data`);
  }

  // Ejemplo: POST request
  postData(data: any) {
    return this.http.post(`${this.apiUrl}/api/data`, data);
  }
}
