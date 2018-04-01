import { Routes, RouterModule } from '@angular/router';

import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuard } from '../services/service.index';





const pagesRoutes: Routes = [
  {
  path: '',
  component: PagesComponent,
  canActivate: [LoginGuard],
  children: [
    {path: 'progress', component: ProgressComponent, data: {titulo: 'ProgressBar'}},
    {path: 'grafica1', component: Graficas1Component, data: {titulo: 'Gráficas'}},
    {path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas'}},
    {path: 'rxjs', component: RxjsComponent, data: {titulo: 'RxJs'}},
    {path: 'account-settings', component: AccountSettingsComponent, data: {titulo: 'Ajustes de tema'}},
    {path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard'}},
    {path: '', redirectTo: '/dashboard' , pathMatch: 'full'}
  ]
}
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
