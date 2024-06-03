import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url:string = 'http://localhost:3000/auth';

  constructor(private _http: HttpClient) { }

  register(user:any){
    return this._http.post<any>(`${this.url}/register`, user)
  }

  login(data:any){
    return this._http.post<any>(`${this.url}/login`, data)
  }

  loggedIn(){
    return !!localStorage.getItem('token') // return true or false
  }
  getToken(){
    return localStorage.getItem('token')  //obtener token
  }

  getCurrentUser(): any {
    const token = this.getToken()
    if (!token) {
      return null;
    }
    try {
      // Decodificamos el token para obtener la información del usuario
      const decodedToken = jwtDecode(token);
      return decodedToken;
    } catch (error) {
      console.error('Error decoding token', error);
      return null;
    }
  }

  logoutUser(){
    localStorage.removeItem('token')
    window.location.reload()
  }
}
