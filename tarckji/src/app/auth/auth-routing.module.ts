import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  { path : 'login', component : LoginComponent},
  { path : 'dashboard/:userid', component : DashboardComponent},
  { path : 'register', component : RegisterComponent},
  { path : 'reset-password', component : ResetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
