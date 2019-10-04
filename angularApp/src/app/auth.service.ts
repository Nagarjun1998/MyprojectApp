import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { login1 } from './login1';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http:HttpClient,private route:Router) { }

  LogService(email,password){

    const emp = new login1(email,password)

    // console.log(emp);
    this.http.post('http://localhost:8091/api/login',emp).toPromise()
    .then((data:any)=>{
      console.log(data)

      if(data.message === "Success!"){
        if(data.user.role === "Mentor"){
          this.route.navigate(['/mdashboard']);
          localStorage.setItem('token',data.token)
          localStorage.setItem('login','yes')
          localStorage.setItem('role',data.user.role)



        }
        else if(data.user.role === "User"){
          this.route.navigate(['/udashboard'])
          localStorage.setItem('token',data.token)
          localStorage.setItem('login','yes')
          localStorage.setItem('role',data.user.role)


        }
      }
      else{
        this.route.navigate(['/login']);
        alert(data.message +'\n\n' );
      }
    });
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  isLogin(){
    if(localStorage.getItem('login')==="yes")
    return true;
    else
        return false;
  }
  isMentor(){
    if(localStorage.getItem('role')==="Mentor")
    return true;
    else
    return false;
  }
  logoutUser(){
    localStorage.removeItem('token')
    this.route.navigate(['/login'])
  }
  getToken(){
    return localStorage.getItem('token')
  }
}
