import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service'; // Importar o LocalStorageService

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) { }

  login(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, user, { responseType: 'text' });
  }

  logout(): void {
    this.localStorageService.removeItem('isLoggedIn');
  }
}
