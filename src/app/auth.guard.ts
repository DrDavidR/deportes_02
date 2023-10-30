import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './servicios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated) {
      // Aquí puedes añadir lógica adicional basada en el tipo de usuario si es necesario
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
