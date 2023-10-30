import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './loggin/login/login.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContenidoComponent } from './alumno/contenido/contenido.component';
import { ProgresoComponent } from './alumno/progreso/progreso.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    ContenidoComponent,
    ProgresoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    LoginModule, // Importa el módulo de inicio de sesión aquí

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
