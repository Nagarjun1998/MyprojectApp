import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userinfo } from 'userinfo';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _specialEventsUrl = "http://localhost:8091/api/udashboard";

  constructor(private http:HttpClient,private route:Router) { }

  getSpecialEvents() {
    return this.http.get<any>(this._specialEventsUrl)
  }
  PostService(email,password){

    const emp = new userinfo(email,password)

    // console.log(emp);
    this.http.post('http://localhost:8091/api/userdata',emp).toPromise()
    .then((data:any)=>{
      console.log(data)
      localStorage.setItem('token',data.token)
      if(data.code === 422){
        this.route.navigate(['/signup/signuser']);
        alert('Email already exists \n\n');
      }
      else{
        this.route.navigate(['/login']);
        alert('Successfull Login!!\n\n');
      }
    });
  }
}
