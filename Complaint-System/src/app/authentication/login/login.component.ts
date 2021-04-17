import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnrollmentService } from 'src/app/enrollment.service';
import { HeaderComponent } from 'src/app/header/header.component';
import { User } from '../../Models/User/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userModel:any =[];
  email:string;
  password:string;

  constructor(private enrollService: EnrollmentService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(loginForm:any){
    console.log(loginForm);
    this.enrollService.login(loginForm)
      .subscribe(
        data => {console.log('Success!', data)
                console.log(data.customer.username)
                this.sendUserName(data.customer.username)
                localStorage.setItem('token', data.token)
                localStorage.setItem('username', data.customer.username)
                data.customer.role === "customer" ? this.router.navigate(['/user-dashboard']) : this.router.navigate(['/admin-dashboard'])
      },
        error => console.error('Error!', error)
      )
  }

  sendUserName(username:string){
    console.log("Username: "+username)
    this.enrollService.sendUsername(username)
  }
}
