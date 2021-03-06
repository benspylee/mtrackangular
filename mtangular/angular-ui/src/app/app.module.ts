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
import {NgxPaginationModule} from 'ngx-pagination';
import { QuoteComponent } from './quote/quote.component';
import { QuoteinfoService } from './service/quoteinfo.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PostComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(routes),HttpClientModule,
    NgxPaginationModule

  ],
  providers: [AuthenticationService,PostinfoService,QuoteinfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
