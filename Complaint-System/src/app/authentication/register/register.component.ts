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
  id:number;
  username:string;
  email:string;
  password:string;

  constructor(private enrollService: EnrollmentService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(registerForm:any){
    console.log(registerForm);
    this.enrollService.register(registerForm)
      .subscribe(
        data => {console.log('Success!', data),
                this.router.navigate(['user-dashboard'])
      },
        error => console.error('Error!', error)
      )
  }

}
