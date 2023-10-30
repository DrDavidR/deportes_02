import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { MatInputModule } from '@angular/material/input'; // Importa MatInputModule
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule, // Agrega FormsModule aquí
    MatInputModule, // Agrega MatInputModule aquí
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class LoginModule { }
