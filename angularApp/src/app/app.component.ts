import { Component, AfterViewInit, ViewChildren, OnInit } from '@angular/core';

import { AuthService } from './auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MeanProjectapp';

  technology;
  timestart;l;
  searchForm: FormGroup;
  submitted = false;
    constructor(private myservice:AuthService,private searchservice:SearchService,private formBuilder: FormBuilder,private router: Router){}
  
  public isCollapsed = false;

  onSubmit(){

    this.submitted = true;

    // stop here if form is invalid
    if (this.searchForm.invalid) {
        return;
    }
    else{
      
   // this.flashMessage.show('Login Successfull', {cssClass: 'alert-success', timeout: 3000});
    this.l= this.searchservice.Search(this.technology,this.timestart);
    //this.router.navigate(['/udashboard']);
  }
  }
  ngOnInit(){
    this.searchForm = this.formBuilder.group({
       
      technology: [''],
      timestart: ['']
    
    });
  }
  get f() { return this.searchForm.controls; }

}
