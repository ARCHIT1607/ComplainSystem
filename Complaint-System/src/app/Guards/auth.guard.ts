import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { EnrollmentService } from '../enrollment.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authService: EnrollmentService,
              private route: Router){}

  canActivate():boolean{
    if(this.authService.loggedIn()){
      console.log("Token Present")
      return true
    }
    else{
      this.route.navigate(['/login'])
      console.log("Token Absent")
      return false
    }

  }
}
