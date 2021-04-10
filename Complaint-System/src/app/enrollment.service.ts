import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './Models/User/user';
import { Ticket } from './Models/Ticket/ticket';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  registerUrl = "http://localhost:8086/api/register";
  loginUrl = "http://localhost:8086/api/login";
  submitTicketUrl = "";
  getTicketUrl = "http://localhost:8086/ticket/getAllTicketsByCustomer";
  constructor(private http: HttpClient) { }

  // Service to Register a User
  register(user: User){
    return this.http.post<any>(this.registerUrl, user)
  }

  login(user: User){
    return this.http.post<any>(this.loginUrl, user)
  }

  // Service to submit ticket
  submitTicket(ticket: Ticket){
    return this.http.post<any>(this.submitTicketUrl, ticket)
  }

  // Service to get ticket
  // getTicket(user: User){
  //   return this.http.get<any>(this.getTicketUrl, user);
  // }

  loggedIn(){
    return !!localStorage.getItem('token')
  }
}
