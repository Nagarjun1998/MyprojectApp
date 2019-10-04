import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { RouterModule } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';



@NgModule({
  declarations: [UserDashboardComponent],
  imports: [
    CommonModule,
    // RouterModule.forChild([
    //   {path:'signup/signuser' ,component: UserSignupComponent}
    // ])
  ]
})
export class UserModule { }
