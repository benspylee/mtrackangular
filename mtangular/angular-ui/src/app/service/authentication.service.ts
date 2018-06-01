import { Injectable } from '@angular/core';

import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthenticationService {

  private loggedIn = new BehaviorSubject<boolean>(false); 

  constructor(private httpclient: HttpClient, private router: Router) {


  }

  getloggedIn()
  {
    return this.loggedIn;
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable(); 
  }


  login(user: User) :any {
    return   this.httpclient.post("/api/users/authenticate", user)
     .map((response: Response) => response);
   /* .map(
      actuser => {
        if (actuser != null) {
          localStorage.setItem("loggeduser", JSON.stringify(actuser))
        }
        return actuser;
      }

    );*/
  }

  logout()
  {
    localStorage.removeItem("loggeduser");
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
