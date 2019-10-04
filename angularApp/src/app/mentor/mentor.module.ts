import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorSignupComponent } from './mentor-signup/mentor-signup.component';
import { RouterModule } from '@angular/router';
import { MentordashboardComponent } from './mentordashboard/mentordashboard.component';



@NgModule({
  declarations: [MentordashboardComponent],
  imports: [
    CommonModule,
    // RouterModule.forChild([
    //   {path:'signup/signmen' ,component: MentorSignupComponent}
    // ])
  ]
})
export class MentorModule { }
