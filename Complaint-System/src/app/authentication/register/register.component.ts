import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnrollmentService } from '../../enrollment.service';
import { User } from '../../Models/User/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userModel: any = [];
  // id:number;
  // username:string;
  // email:string;
  // password:string;
  isEmail:boolean = false

  constructor(private enrollService: EnrollmentService,
              private router: Router) { 
              }

  ngOnInit(): void {
  }

  // setEmail(email, emails):boolean{
  //   this.isEmail = false
  //   console.log("Inside set email")
  //   for(let i=0; i<emails.length; i++){
  //     if(emails[i] === email){
  //       return true
  //     }
  //   }
  // }

  onSubmit(registerForm:any){
    console.log(registerForm);
    this.enrollService.register(registerForm)
      .subscribe(
        data => {
                if(data.errorMessage){
                  console.log(data.errorMessage)
                  this.isEmail = true
                  // alert(data.errorMessage)
                }
                else{
                  console.log('Success!', data),
                  this.sendUserName(data.customer.username)
                  localStorage.setItem('token', data.token)
                  localStorage.setItem('username', data.customer.username)
                  this.router.navigate(['user-dashboard'])
                }
      },
        error => console.error('Error!', error)
      )
  }

  sendUserName(username:string){
    this.enrollService.sendUsername(username)
  }
}


