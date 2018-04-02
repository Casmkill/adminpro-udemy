import { MedicoComponent } from './medicos/medico.component';
import { MedicosComponent } from './medicos/medicos.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { ProfileComponent } from './profile/profile.component';
import { Routes, RouterModule } from '@angular/router';

import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuard } from '../services/service.index';
import { UsuariosComponent } from './usuarios/usuarios.component';





const pagesRoutes: Routes = [
  {
  path: '',
  component: PagesComponent,
  canActivate: [LoginGuard],
  children: [
    {path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard'}},
    {path: 'progress', component: ProgressComponent, data: {titulo: 'ProgressBar'}},
    {path: 'grafica1', component: Graficas1Component, data: {titulo: 'Gráficas'}},
    {path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas'}},
    {path: 'rxjs', component: RxjsComponent, data: {titulo: 'RxJs'}},
    {path: 'account-settings', component: AccountSettingsComponent, data: {titulo: 'Ajustes de tema'}},
    {path: 'perfil', component: ProfileComponent, data: {titulo: 'Perfil de usuario'}},

    // Mantenimientos
    {path: 'usuarios', component: UsuariosComponent, data: {titulo: 'Mantenimiento de usuarios'}},
    {path: 'hospitales', component: HospitalesComponent, data: {titulo: 'Mantenimiento de hospitales'}},
    {path: 'medicos', component: MedicosComponent, data: {titulo: 'Mantenimiento de médicos'}},
    {path: 'medico/:id', component: MedicoComponent, data: {titulo: 'Actualizar médico'}},
    {path: '', redirectTo: '/dashboard' , pathMatch: 'full'}
  ]
}
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
