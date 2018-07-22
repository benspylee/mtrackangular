import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = new User();
  loginerrormsg: string = '';
  loginerror: boolean = false;

  constructor(private authenticateservice: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }


  login() {
    console.log("user info:" + JSON.stringify(this.model))
    this.authenticateservice.login(this.model).subscribe(data => {
      console.log(data);

      if (data != null && data['msg'] == 'success') {
        this.authenticateservice.getloggedIn().next(true);
        this.loginerror=false;
        this.loginerrormsg='';
        this.router.navigateByUrl("/home");
        localStorage.setItem("loggeduser", JSON.stringify(data['response']))
      }
      else
      {
        this.authenticateservice.getloggedIn().next(false);
        this.loginerror=true;
        this.loginerrormsg=data['response']
        console.log("login failed");
      }
      return data;

    },
    error => {
        this.authenticateservice.getloggedIn().next(false);
        console.log(error );
        this.loginerror=true;
        this.loginerrormsg=(error['msg'] == undefined?error['statusText']==undefined?'UnKown error Occured':error['statusText']:'UnKown error Occured');
        return error;
      }
    );

  }
}
