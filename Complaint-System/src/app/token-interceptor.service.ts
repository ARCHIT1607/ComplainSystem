import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { EnrollmentService } from './enrollment.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector) { }

  intercept(req, next){
    let authService = this.injector.get(EnrollmentService)
    let tokenizedReq = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${authService.getToken()}`,
        'content-type': "application/json"
      }
    })
    return next.handle(tokenizedReq) 
  }
}
