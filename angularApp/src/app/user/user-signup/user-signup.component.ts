import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../mustmatch-validator';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  email;
  password;
  re_password;
  service;

  registerForm: FormGroup;
  submitted = false;
  constructor(private myservice:UserService,private formBuilder: FormBuilder,private router: Router,private flashMessage:FlashMessagesService,
    ) { }

  
 
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
       
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        re_password: ['', Validators.required]
      }, 
      {
          validator: MustMatch('password', 're_password')
      });
}

// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }

onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    else{
      
    //this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
    this.service=this.myservice.PostService(this.email,this.password);
    //this.router.navigate(['/login']);
    this.email="";
    this.password="";
    this.re_password="";
  }
}

}
