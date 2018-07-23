import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Quotes } from '../model/quotes';
import { CommonUtils } from '../model/commonUtils';


@Injectable()
export class QuoteinfoService {
  userxst:String=btoa(CommonUtils.appUserKey);
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': "Basic " + this.userxst
    })
  };
  httpUploadOptions = {
    headers: new HttpHeaders({
    'Accept':'application/json',
      'Authorization': "Basic " + this.userxst
    })
  };

  constructor(private httpclient: HttpClient, private router: Router) { 
    
  }

  uploadF1(formData:any)
  {
  return this.httpclient.post(CommonUtils.appContextpath+"api/fileupload", formData, this.httpUploadOptions)
    .map((response: Response) => response);
   
  }

  uploadFile(file:any)
  {
   return this.httpclient.post(CommonUtils.appContextpath+"api/fileupload", file, this.httpUploadOptions)
    .map((response: Response) => response);
   
  }

  getQuote()
  {
    return   this.httpclient.get(CommonUtils.appContextpath+"api/quotes",this.httpOptions)
    .map((response: Response) => response);
  }

  
addQuote(quote:Quotes)
{
  return   this.httpclient.post(CommonUtils.appContextpath+"api/quotes",JSON.stringify(quote),this.httpOptions)
  .map((response: Response) => response);
}

updateQuote(quote:Quotes)
{
  return   this.httpclient.post(CommonUtils.appContextpath+"api/quotes/"+quote.quoteno,JSON.stringify(quote),this.httpOptions)
  .map((response: Response) => response);
}

deleteQuote(quote:Quotes)
{
  return   this.httpclient.delete(CommonUtils.appContextpath+"api/quotes/"+quote.quoteno,this.httpOptions)
  .map((response: Response) => response);
}


searchQuote(quote:Quotes)
{
  return   this.httpclient.post(CommonUtils.appContextpath+"api/quotes/search",JSON.stringify(quote),this.httpOptions)
  .map((response: Response) => response);
}

getQuoteCat()
  {
    return   this.httpclient.get(CommonUtils.appContextpath+"api/quotecategory",this.httpOptions)
    .map((response: Response) => response);
  }

}
