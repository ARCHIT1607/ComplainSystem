import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './authentication/register/register.component'
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './authentication/login/login.component';
import { UserTicketComponent } from './user-ticket/user-ticket.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { TicketViewComponent } from './user-ticket/ticket-view/ticket-view.component';
import { TicketRaiseComponent } from './user-ticket/ticket-raise/ticket-raise.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full'
  },
  // {
  //   path: 'auth', 
  //   component: AuthenticationComponent,
  //   children: [
  //     {
  //       path: 'register',
  //       component: RegisterComponent
  //     },
  //     {
  //       path: 'login',
  //       component: LoginComponent
  //     }
  //   ]
  // },
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
    component: UserTicketComponent,
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ AuthenticationComponent, RegisterComponent, LoginComponent, UserTicketComponent, AdminDashboardComponent] 