import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './Models/User/user';
import { Ticket } from './Models/Ticket/ticket';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  // Url variables for calling apis
  registerUrl = "http://localhost:8086/api/register";
  loginUrl = "http://localhost:8086/api/login";
  submitTicketUrl = "http://localhost:8086/ticket/addTicket";
  getTicketUrl = "http://localhost:8086/ticket/getAllTicketsByCustomer";
  getAllTicketsUrl = "http://localhost:8086/ticket/admin/getAllTickets";
  getTicketByIdUrl = "http://localhost:8086/ticket/admin/getAllTicketById/";
  updateTicketUrl = "http://localhost:8086/ticket/admin/updateTicket";

  //Component Interaction

  private userNameSource = new Subject<string>();
  userName$ = this.userNameSource.asObservable();
  
  constructor(private http: HttpClient,
              private route: Router) { }


  sendUsername(username:string){
    this.userNameSource.next(username)
  }

  // Service to Register a User
  register(user: User){
    return this.http.post<any>(this.registerUrl, user)
  }

  login(user: User){
    return this.http.post<any>(this.loginUrl, user)
  }

  raiseTicket(ticket: Ticket){
    return this.http.post<any>(this.submitTicketUrl, ticket)
  }

  // Service to submit ticket
  submitTicket(ticket: Ticket){
    return this.http.post<any>(this.submitTicketUrl, ticket)
  }

  // Service to get ticket
  getUserTicket(){
    return this.http.get(this.getTicketUrl);
  }

  getAllTickets(){
    return this.http.get(this.getAllTicketsUrl);
  }

  getTicketById(index){
    return this.http.get(this.getTicketByIdUrl+index);
  }

  updateTicket(updatedTicket: Ticket){
    return this.http.put<any>(this.updateTicketUrl, updatedTicket);
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  logoutUser(){
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    console.log("Token Deleted")
    this.route.navigate(['/login'])

  }

  getToken(){
    return localStorage.getItem('token')
  }

  getUsername(){
    return localStorage.getItem('username')
  }

}
