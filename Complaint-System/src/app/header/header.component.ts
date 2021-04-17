import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username:string

  constructor(public enroll: EnrollmentService) { }

  checkLogin: boolean;
  ngOnInit(): void {
    this.enroll.userName$
    .subscribe(
              name => {this.username = name
                      console.log("Username in header: "+this.username)
              })
    this.username = this.enroll.getUsername()
  }  

  // setUsername(){
  //   console.log("Username in header: "+localStorage.getItem('username'))
  //   this.username = localStorage.getItem('username')
  // }
   
  
}
