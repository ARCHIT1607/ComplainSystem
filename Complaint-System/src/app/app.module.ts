import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './authentication/register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './authentication/login/login.component';
import { UserTicketComponent } from './user-ticket/user-ticket.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { TicketViewComponent } from './user-ticket/ticket-view/ticket-view.component';
import { TicketRaiseComponent } from './user-ticket/ticket-raise/ticket-raise.component';
import { AuthGuard } from './Guards/auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    AuthenticationComponent,
    TicketViewComponent,
    TicketRaiseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
