import { Component, OnInit } from '@angular/core';
import { MentorService } from 'src/app/mentor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from 'src/app/user/mustmatch-validator';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-mentor-signup',
  templateUrl: './mentor-signup.component.html',
  styleUrls: ['./mentor-signup.component.css']
})
export class MentorSignupComponent implements OnInit {
service;
name;
email;
mpassword;
technology;
experience;
facility;
re_password;
timestart;
contactno;
linkurl;
constructor(private myservice:MentorService,private formBuilder: FormBuilder,private router: Router,private flashMessage:FlashMessagesService) { }

  registerForm: FormGroup;
  submitted = false;

  
 
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
       
      name: ['', [Validators.required, Validators.maxLength(15),Validators.pattern('^[a-zA-Z ]*$')]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        re_password: ['', Validators.required],
        technology: ['', Validators.required],
        facility: ['', Validators.required],
        experience: ['', Validators.required],
        timestart: ['', Validators.required],
        linkurl: ['', Validators.required],
        contactno: ['', [Validators.required,Validators.pattern("^[0-9]*$"), Validators.minLength(10)]]




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
      // this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
 
    this.service=this.myservice.PostService(this.name,this.email,this.mpassword,this.technology,this.experience,this.facility,this.timestart,this.linkurl,this.contactno);
    //  this.router.navigate(['/login']);
    this.name="";
    this.email="";
    this.mpassword="";
    this.re_password="";
    this.technology="";
    this.experience="";
    this.facility="";
    this.timestart="";
    
    this.linkurl="";
    this.contactno=""
  }
}

}
