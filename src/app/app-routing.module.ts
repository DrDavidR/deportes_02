import { NgModule } from '@angular/core';
import { ContenidoComponent } from './alumno/contenido/contenido.component';
import { AuthGuard } from './auth.guard';
import { InicioComponent } from './inicio/inicio.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './loggin/login/login.component';
import { ProgresoComponent } from './alumno/progreso/progreso.component';

const routes: Routes = [
    // ... Otras rutas
    { path: 'login', component: LoginComponent},
    { path: 'contenido-alumno', component: ContenidoComponent }, // Ruta para ContenidoComponent
    { path: 'progreso-alumno', component: ProgresoComponent }, // Ruta para ContenidoComponent
    { path: 'inicio', component: InicioComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

