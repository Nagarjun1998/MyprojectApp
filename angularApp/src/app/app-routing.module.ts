import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './share/login/login.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { MentordashboardComponent } from './mentor/mentordashboard/mentordashboard.component';
import { AuthGuard } from './auth.guard';
import { ResultComponent } from './result/result.component';


const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'home',component:HomeComponent},
  {path: 'login',component:LoginComponent},
  {path: 'udashboard',component:UserDashboardComponent,canActivate:[AuthGuard],
  children:[{path:'',component:ResultComponent}]

  },

  {path: 'mdashboard',component:MentordashboardComponent,canActivate:[AuthGuard]
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
