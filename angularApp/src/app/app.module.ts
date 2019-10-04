import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { MentorModule } from './mentor/mentor.module';
import { HomeComponent } from './home/home.component';
import { ShareModule } from './share/share.module';
import { UserSignupComponent } from './user/user-signup/user-signup.component';
import { MentorSignupComponent } from './mentor/mentor-signup/mentor-signup.component';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { ResultComponent } from './result/result.component';


@NgModule({
  declarations: [
    AppComponent,
    UserSignupComponent,
    MentorSignupComponent,
    HomeComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    MentorModule,
    FormsModule,
    ShareModule,
    NgbModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
