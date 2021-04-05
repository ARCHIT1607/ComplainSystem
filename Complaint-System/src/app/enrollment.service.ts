import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User/user';
@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  registerUrl = "http://localhost:8086/api/register"
  constructor(private http: HttpClient) { }

  register(user: User){
    return this.http.post<any>(this.registerUrl, user)
  }
}
