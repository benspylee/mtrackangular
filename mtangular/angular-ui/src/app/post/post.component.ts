import { Component, OnInit,ViewChild  } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';
import { PostinfoService } from '../service/postinfo.service';
import { Posts } from '../model/posts';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Posts[] = null;
  popstyle: String = 'none';
  model:Posts=new Posts();
  cats:any[]=JSON.parse("[{\"newscategorycode\":\"1\",\"newscategoryname\":\"History\"},{\"newscategorycode\":\"2\",\"newscategoryname\":\"Cenima\"}]");
  filename1:string; 
  uploadfile1:File;
  selectedRow : Number = -1;
  setClickedRow : Function;

  @ViewChild('f') 
  mytemplateForm : NgForm; 

  constructor(private authenticateservice: AuthenticationService, private postservice: PostinfoService, private router: Router) {
    if (localStorage.getItem("loggeduser") != null)
      this.authenticateservice.getloggedIn().next(true);
    else
      this.router.navigateByUrl('/login');

        this.setClickedRow = function(index){
            this.selectedRow = index;
             let i:any=this.selectedRow;
            this.model=this.posts[i]
        }
  }

  ngOnInit() {
    this.getpostinfo();
  }

  getpostinfo()
  {
   this.postservice.getPost().subscribe(data => {
     if(data['response']!=null)
      {
         if(data['msg'] == 'success')
        {
      this.posts = data['response'];
        }
      }
      
    });
  }

  add()
  {
    this.selectedRow =-1;
    this.model=new Posts();
    this.toggle();
  }
  edit()
  {
    if(this.selectedRow != -1)
    {
      let i:any=this.selectedRow;
     this.model=this.posts[i]
      this.toggle();
    }
  }

  toggle() {
    if (this.popstyle == 'none') {
      this.popstyle = 'block';    
    }
    else if (this.popstyle == 'block') {
      this.popstyle = 'none';   
    }
  }

  postimgfileChange(event: EventTarget){
  const eventObj: MSInputMethodContext = <MSInputMethodContext>event;
  const target: HTMLInputElement = <HTMLInputElement>eventObj.target;
  const files: FileList = target.files;
   const formData: FormData = new FormData();
   for (let i = 0; i < files.length; i++) {
    formData.append('file', files[i]);
     this.model.postimgurl = files[0].name
  }   
   if(files.length>0)
    {
      this.uploadF1(formData)
    }
    else
       this.model.postimgurl =null;
}

uploadF1(formData:any)
  {
    this.postservice.uploadF1(formData).subscribe(data => {
      if(data['response']!=null)
      {
        if(data['response']== 'success')
        alert('file upload success')
        else
        alert('error has occurred..!')
      } 
    }
    );
  }

  
  uploadfilepostimg()
  {
    this.postservice.uploadFile(this.uploadfile1).subscribe(data => {
      if(data['response']!=null)
      {
        if(data['msg'] == 'success')
        alert('file upload success')
        else
        alert('error has occurred..!')
      } 
    }
     );
  }

  submitPostinfo()
  {

    if(this.model.postid == 0)
    {
      this.postservice.addPost(this.model).subscribe(data => {
      if(data['response']!=null)
      {
        if(data['msg'] == 'success')
        {
            this.toggle();
            this.mytemplateForm.reset();
            this.getpostinfo();
        }
       
        else
        alert('error has occurred..!')
      } 
    });
    }
    else  if(this.model.postid != 0) {

     this.postservice.updatePost(this.model).subscribe(data => {
      if(data['response']!=null)
      {
        if(data['msg'] == 'success')
        {
            this.toggle();
            this.mytemplateForm.reset();
            this.getpostinfo();
        }
       
        else
        alert('error has occurred..!')
      } 
    });
    }    
  }

  deletePost()
  {
    if(this.model.postid != 0)
    {
          this.postservice.deletePost(this.model).subscribe(data => {
      if(data['response']!=null)
      {
        if(data['msg'] == 'success')
        {
           this.getpostinfo();
          alert('post deleted successfully..!');
        }
       
        else
        alert('error has occurred..!')
      } 
    });

    }
  }

}
