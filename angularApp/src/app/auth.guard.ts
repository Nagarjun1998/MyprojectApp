import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate{
  
  constructor(private myservice: AuthService, private route: Router){}
  canActivate(): boolean{
    if(this.myservice.loggedIn()){
      return true
    }
    else{
      this.route.navigate(['/login'])
      return false
    }
  }
}
