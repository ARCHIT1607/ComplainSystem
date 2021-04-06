import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../../enrollment.service';
import { User } from '../../Models/User/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userModel = new User('Darshan', 'd.sakpal38@gmail.com', 'System@123')
  // userModel: User
  constructor(private enrollService: EnrollmentService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.userModel);
    this.enrollService.register(this.userModel)
      .subscribe(
        data => console.log('Success!', data),
        error => console.error('Error!', error)
      )
  }

}
