import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  saveToken(token: any) {
    localStorage.setItem('authToken', token);
  }

  // Suponiendo que almacenas el token de autenticación en el localStorage
  constructor() {}

  isAuthenticated(): boolean {
    // Verifica si el token de autenticación está presente en el almacenamiento
    return !!localStorage.getItem('authToken');
  }
}
