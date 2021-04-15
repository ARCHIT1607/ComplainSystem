import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnrollmentService } from 'src/app/enrollment.service';
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
                console.log(data.customer.role)
                localStorage.setItem('token', data.token)
                data.customer.role === "customer" ? this.router.navigate(['/user-dashboard']) : this.router.navigate(['/admin-dashboard'])
      },
        error => console.error('Error!', error)
      )
  }
}
