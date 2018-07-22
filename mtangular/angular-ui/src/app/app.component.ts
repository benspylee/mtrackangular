import { Component, OnInit } from '@angular/core';
import { logging } from 'protractor';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModuleDefinition } from '@angular/core/src/view';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './service/authentication.service';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  isLoggedIn$:Observable<boolean>;
  ngOnInit() {
    this.isLoggedIn$=this.authenticateservice.isLoggedIn;
  }

  constructor(private authenticateservice: AuthenticationService)
  {
  
  }

  logout()
  {
   // localStorage.removeItem("loggeduser")
  //  this.isLoggedIn$=false;
  this.authenticateservice.logout();
  }
}


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'post', component: PostComponent },
  { path: '#', redirectTo: '' }
];


