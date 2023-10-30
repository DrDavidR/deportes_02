import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  showPasswordField: boolean = false;
  isPasswordVisible = false;

  constructor(public authService: AuthService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const result = this.authService.login(this.username, this.password);
      if (result) {
        this.router.navigate(['/inicio']);
      } else {
        alert('Credenciales incorrectas');
      }
    } else {
      alert('Por favor, completa el formulario correctamente.');
    }
  }
}
