import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent }
];


export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
