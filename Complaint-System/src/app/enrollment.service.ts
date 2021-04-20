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
  // registerUrl = "http://localhost:8086/api/register";
  // loginUrl = "http://localhost:8086/api/login";
  // submitTicketUrl = "http://localhost:8086/ticket/addTicket";
  // getTicketUrl = "http://localhost:8086/ticket/getAllTicketsByCustomer";
  // getAllTicketsUrl = "http://localhost:8086/ticket/admin/getAllTickets";
  // getTicketByIdUrl = "http://localhost:8086/ticket/admin/getAllTicketById/";
  // updateTicketUrl = "http://localhost:8086/ticket/admin/updateTicket";
  // getUserEmailUrl = "http://localhost:8086/api/getUserDetails";
  registerUrl = "https://complaintsystem1.herokuapp.com/api/register";
  loginUrl = "https://complaintsystem1.herokuapp.com/api/login";
  submitTicketUrl = "https://complaintsystem1.herokuapp.com/ticket/addTicket";
  getTicketUrl = "https://complaintsystem1.herokuapp.com/ticket/getAllTicketsByCustomer";
  getAllTicketsUrl = "https://complaintsystem1.herokuapp.com/ticket/admin/getAllTickets";
  getTicketByIdUrl = "https://complaintsystem1.herokuapp.com/ticket/admin/getAllTicketById/";
  updateTicketUrl = "https://complaintsystem1.herokuapp.com/ticket/admin/updateTicket";
  getUserEmailUrl = "https://complaintsystem1.herokuapp.com/api/getUserDetails";

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

  getUserEmail(){
    return this.http.get<any>(this.getUserEmailUrl);
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
