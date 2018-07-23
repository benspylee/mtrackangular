import { Component, OnInit,ViewChild  } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';
import { PostinfoService } from '../service/postinfo.service';
import { Posts } from '../model/posts';
import {NgForm} from '@angular/forms';

declare var $: any;

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
  popalertstyle: String = 'none';
  totalRec:number=0;
  searchstyle: String = 'none';
  searchmodel:Posts=new Posts();
  page:number=1;
  itemsPerPage:number=5;
  
  
  @ViewChild('f') 
  mytemplateForm : NgForm; 
  @ViewChild('searchform') 
  searchform : NgForm; 

  constructor(private authenticateservice: AuthenticationService, private postservice: PostinfoService, private router: Router) {
    if (localStorage.getItem("loggeduser") != null)
      this.authenticateservice.getloggedIn().next(true);
    else
      this.router.navigateByUrl('/login');

        this.setClickedRow = function(index){
            this.selectedRow = index;
             let i:any=(this.selectedRow+this.itemsPerPage * (this.page-1));
            this.model=this.posts[i]
        }


        this.postservice.getPostCat().subscribe(data => {
          if(data['response']!=null)
           {
              if(data['msg'] == 'success')
             {
           this.cats = data['response'];
             }
           }
           
         });
        
  }

  ngOnInit() {
    this.getpostinfo();
    var self = this;
     $(document).ready(function(){
      $("#createddate").datepicker({
        dateFormat: 'yy-mm-dd',
        onSelect: function(date) {
          self.searchmodel.createddate=date;
        }});

        $("#modifieddate").datepicker({
          dateFormat: 'yy-mm-dd',
          onSelect: function(date) {
            self.searchmodel.modifieddate=date;
          }});
    }); 
  }

  datehandle(event){
    console.log("Date changed: ");
  }

  reset()
  {
    this.page=1;
    this.getpostinfo();
  }

  byId(item1: any,item2:Number)  {
    return Number(item1) === item2;
  }

  searchpop(){
    this.searchmodel=new Posts();
    this.togglesearch();
  }

  search(){
    this.postservice.searchPost(this.searchmodel).subscribe(data => {
      if(data['response']!=null)
       {
          if(data['msg'] == 'success')
         {
          this.posts = data['response'];
          this.totalRec =this.posts.length;
          this.togglesearch();
          this.searchmodel=new Posts();
         }
         else{
           alert(data['response']);
         }
       }
       
     });
  }

 /*  onSelect(catcode:Number)
  {
  for(let i=0;i<this.cats.length-1;i++)
  {
  if(catcode == this.cats[i].newscategorycode )
  {
    this.selectedcat=this.cats[i];
  }
  }
  }
 */
  getpostinfo()
  {
   this.postservice.getPost().subscribe(data => {
     if(data['response']!=null)
      {
         if(data['msg'] == 'success')
        {
      this.posts = data['response'];
      this.totalRec =this.posts.length;
        }
      }
      
    });
  }

  add()
  {
    this.selectedRow =-1;
    //this.mytemplateForm.resetForm();
    this.model=new Posts();
    this.toggle();
  }
  edit()
  {
    if(this.selectedRow != -1)
    {
    //  let i:any=this.selectedRow;
   //  this.model=this.posts[i]
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

  togglesearch() {
    if (this.searchstyle == 'none') {
      this.searchstyle = 'block';    
    }
    else if (this.searchstyle == 'block') {
      this.searchstyle = 'none';   
    }
  }

 

  togglealert()
  {
    if (this.popalertstyle == 'none') {
      this.popalertstyle = 'block';    
    }
    else if (this.popalertstyle == 'block') {
      this.popalertstyle = 'none';   
    }
  }

  postimgfileChange(event: EventTarget){
  const eventObj: MSInputMethodContext = <MSInputMethodContext>event;
  const target: HTMLInputElement = <HTMLInputElement>eventObj.target;
  const files: FileList = target.files;
   const formData: FormData = new FormData();
   for (let i = 0; i < files.length; i++) {
    formData.append('file', files[i]);
    if(target.name == 'uploadfile1')
     this.model.postimgurl = files[i].name
     else  if(target.name == 'uploadfile2')
     this.model.postinfo.postimgurls = files[i].name
  }   
   if(files.length>0)
    {
      this.uploadF1(formData)
    }
    else
    {
      if(target.name == 'uploadfile1')
      this.model.postimgurl =null;
      else  if(target.name == 'uploadfile2')
      this.model.postinfo.postimgurls = null;   
    }
      
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
            this.mytemplateForm.resetForm();
            this.getpostinfo();
            this.selectedRow = -1;
            this.model=new Posts();
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
            this.mytemplateForm.resetForm();
            this.getpostinfo();
            this.selectedRow = -1;
            this.model=new Posts();
        }
       
        else
        alert('error has occurred..!')
      } 
    });
    }    
  }
  deletePost()
  {
    if(this.selectedRow != -1)
    {
     this.togglealert();
    }
  }

  deletePostdecision()
  {
    if(this.model.postid != 0)
    {
          this.postservice.deletePost(this.model).subscribe(data => {
      if(data['response']!=null)
      {
        if(data['msg'] == 'success')
        {
           this.getpostinfo();
           this.togglealert();
          alert('post deleted successfully..!');
        }
       
        else
        alert('error has occurred..!')
      } 
    });

    }
  }

}
