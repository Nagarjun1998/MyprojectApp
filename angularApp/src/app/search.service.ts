import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { searchinfo } from './searchinfo';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient,private route:Router) { }
 emp;
  Search(technology,timestart){

    const s = new searchinfo(technology,timestart)

    this.http.post('http://localhost:8091/api/search',s).toPromise()
    .then((data:any)=>{
      console.log(data)
      this.emp=data.user
      console.log(this.emp)
      this.route.navigate(['udashboard/'])
    })
  }
  searched(){
    if(localStorage.getItem('search')){
      return true;
    }
    else{
      return false;
    }
  }
}
