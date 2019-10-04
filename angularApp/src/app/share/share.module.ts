import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserSignupComponent } from '../user/user-signup/user-signup.component';
import { MentorSignupComponent } from '../mentor/mentor-signup/mentor-signup.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SignupComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
   
    RouterModule.forChild([
      {path : 'signup',component:SignupComponent,
      children: [
        
        { path: 'signuser',component:UserSignupComponent },
        
        { path: 'signmen',component:MentorSignupComponent}
      ]}
    
    // {path:'signup/signuser/login',component:LoginComponent},
    // {path:'signup/signmen/login',component:LoginComponent}
    ])
  ]
})
export class ShareModule { }
