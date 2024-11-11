import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa los módulos o componentes
import { InicioComponent } from './inicio/inicio.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BatallaComponent } from './batalla/batalla.component';
import { LoginComponent } from './login/login.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { PasswordrecuperacionComponent } from './passwordrecuperacion/passwordrecuperacion.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { NavbarComponent } from './navbar/navbar.component';

// Define las rutas
export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' }, // Redirige la raíz a la página de inicio
  { path: '', component: InicioComponent }, // Ruta para el componente Inicio
  { path: 'formulario', component: FormularioComponent },
  { path: 'contactanos', component: ContactanosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'batallas', component: BatallaComponent },
  {path: 'solicitud', component: SolicitudComponent},
  { path: 'cuentas', component: CuentasComponent },
  { path: 'recuperacion', component: PasswordrecuperacionComponent },
  { path: 'navbar', component: NavbarComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Registra las rutas en el módulo
  exports: [RouterModule] // Exporta el RouterModule para que esté disponible en toda la aplicación
})
export class AppRoutingModule { }
