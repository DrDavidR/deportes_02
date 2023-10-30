// navbar.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-navbar',
  template: `
<!-- navbar.component.ts template -->
<nav>
  <div *ngIf="authService.isAuthenticated">
    {{ authService.user }}
    <button (click)="logout()">Logout</button>
  </div>
</nav>
  `,
  styles: [`
    nav {
      position: fixed;
      top: 0;
      right: 0;
      padding: 10px;
    }
  `]
})
export class NavbarComponent {
  constructor(public authService: AuthService) {}
  logout() {
    this.authService.logout();
  }
}
