import { Injectable } from '@angular/core';
import type { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenDecodeService } from '../services/token-decode.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private tokenService: TokenDecodeService,private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }
    const tokenPayload = this.tokenService.decodeToken(token);
    if (!tokenPayload.roles.includes(route.data["expectedRole"])) {
      this.router.navigate(['/']); // no existe el rol en las rutas
      return false;
    }
    return true;
  }
};
