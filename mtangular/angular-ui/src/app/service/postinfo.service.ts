import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Posts } from '../model/posts';
import { CommonUtils } from '../model/commonUtils';

@Injectable()
export class PostinfoService {
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

 //   'Content-Type':  'application/json', content-type=multipart/*
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

  getPost()
  {
    return   this.httpclient.get(CommonUtils.appContextpath+"api/posts",this.httpOptions)
    .map((response: Response) => response);
  }

  
addPost(post:Posts)
{
  return   this.httpclient.post(CommonUtils.appContextpath+"api/posts",JSON.stringify(post),this.httpOptions)
  .map((response: Response) => response);
}

updatePost(post:Posts)
{
  return   this.httpclient.post(CommonUtils.appContextpath+"api/posts/"+post.postid,JSON.stringify(post),this.httpOptions)
  .map((response: Response) => response);
}

deletePost(post:Posts)
{
  return   this.httpclient.delete(CommonUtils.appContextpath+"api/posts/"+post.postid,this.httpOptions)
  .map((response: Response) => response);
}


searchPost(post:Posts)
{
  return   this.httpclient.post(CommonUtils.appContextpath+"api/posts/search",JSON.stringify(post),this.httpOptions)
  .map((response: Response) => response);
}

getPostCat()
  {
    return   this.httpclient.get(CommonUtils.appContextpath+"api/postcategory",this.httpOptions)
    .map((response: Response) => response);
  }


}



