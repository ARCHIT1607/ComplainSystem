import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './Models/User/user';
import { Ticket } from './Models/Ticket/ticket';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  registerUrl = "http://localhost:8086/api/register";
  submitTicketUrl = "";
  constructor(private http: HttpClient) { }

  // Service to Register a User
  register(user: User){
    return this.http.post<any>(this.registerUrl, user)
  }

  // Service to submit ticket
  submitTicket(ticket: Ticket){
    return this.http.post<any>(this.submitTicketUrl, ticket)
  }
}
