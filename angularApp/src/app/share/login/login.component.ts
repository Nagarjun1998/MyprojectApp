import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import { FormGroup, Validators, FormBuilder ,NgForm} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email;
  password;
  
  service;

  

registerForm: FormGroup;
  submitted = false;
  constructor(private myservice:AuthService,private formBuilder: FormBuilder,private router: Router,private flashMessage:FlashMessagesService) { }

  
 
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
       
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      
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
      
   // this.flashMessage.show('Login Successfull', {cssClass: 'alert-success', timeout: 3000});
    this.service=this.myservice.LogService(this.email,this.password);
    this.email=" ";
    this.password=" ";
    //this.router.navigate(['/udashboard']);
  }
}

}
