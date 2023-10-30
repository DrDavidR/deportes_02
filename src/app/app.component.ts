// app.component.ts
import { AuthService } from './servicios/auth.service';
import { Component } from '@angular/core';
import { LoginModule } from './loggin/login/login.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sistema-pronostico';

  constructor(public authService: AuthService) {} // Inyecta el servicio de autenticación

  logout() {
    this.authService.isAuthenticated = false; // Ajusta aquí
    this.authService.logout();
    alert('Sesión cerrada exitosamente');
  }
}
