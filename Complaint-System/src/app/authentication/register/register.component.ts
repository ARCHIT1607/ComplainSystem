import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../../enrollment.service';
import { User } from '../../Models/User/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userModel = new User('', '', '')
  // public userModel = [];
  // id:number;
  // username:string;
  // email:string;
  // password:string;

  constructor(private enrollService: EnrollmentService) { }

  ngOnInit(): void {
  }

  onSubmit(userForm:any){
    console.log(userForm);
    this.enrollService.register(userForm)
      .subscribe(
        data => console.log('Success!', data),
        error => console.error('Error!', error)
      )
  }

}
