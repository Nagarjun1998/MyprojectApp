import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mentorinfo } from 'mentorinfo';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MentorService {

  constructor(private http:HttpClient,private route:Router) { }

  PostService(name,email,mpassword,technology,experience,facility,timestart,linkurl,contactno){

    const emp = new mentorinfo(name,email,mpassword,technology,experience,facility,timestart,linkurl,contactno)

    // console.log(emp);
    this.http.post('http://localhost:8091/api/userdata',emp).toPromise()
    .then((data:any)=>{
      console.log(data)
      localStorage.setItem('token',data.token)

      if(data.code === 422){
        this.route.navigate(['/signup/signmen']);
        alert('Email already exists \n\n');
      }
      else{
        this.route.navigate(['/login']);
        alert('Successfull Login!!\n\n');
      }
    });
  }
}
