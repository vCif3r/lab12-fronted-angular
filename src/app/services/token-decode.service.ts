import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenDecodeService {
  decodeToken(token: string): any {
    try {
      return jwtDecode(token);
    } catch (error) {
      console.error('Error decoding token', error);
      return null;
    }
  }

  getTokenExpirationDate(token: string): Date | null {
    const decodedToken: any = this.decodeToken(token);
    if (!decodedToken || !decodedToken.hasOwnProperty('exp')) {
      return null;
    }
    const date = new Date(0);
    date.setUTCSeconds(decodedToken.exp);
    return date;
  }

  isTokenExpired(token: string): boolean {
    const tokenExpirationDate: Date | null = this.getTokenExpirationDate(token);
    return !tokenExpirationDate || tokenExpirationDate.valueOf() < new Date().valueOf();
  }
}
