import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent, routes } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from './service/authentication.service';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { PostinfoService } from './service/postinfo.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(routes),HttpClientModule,


  ],
  providers: [AuthenticationService,PostinfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
