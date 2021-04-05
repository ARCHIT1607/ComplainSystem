import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from '../app/register/register.component'
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './login/login.component';
import { UserTicketComponent } from './user-ticket/user-ticket.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/register',
    pathMatch: 'full'
  },
  {
    path: 'register', 
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user-dashboard',
    component: UserTicketComponent
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ RegisterComponent, LoginComponent, UserTicketComponent, AdminDashboardComponent] 