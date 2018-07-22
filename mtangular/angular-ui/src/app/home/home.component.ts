import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authenticateservice: AuthenticationService, private router: Router) {

    if(localStorage.getItem("loggeduser")!=null)
    this.authenticateservice.getloggedIn().next(true);
  else
    this.router.navigateByUrl('/login');
    
   }

  ngOnInit() {
  
  }

  ngAfterContentChecked() {
   
  } 

}
