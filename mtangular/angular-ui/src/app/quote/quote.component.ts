import { Quotes } from '../model/quotes';
import { Component, OnInit,ViewChild  } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { QuoteinfoService } from "../service/quoteinfo.service";
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';

declare var $: any;



@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quotes[] = null;
  popstyle: String = 'none';
  model:Quotes=new Quotes();
  cats:any[]=JSON.parse("[{\"quotecolorcd\":\"255_0_0\",\"quotecolor\":\"RED\"},{\"quotecolorcd\":\"0_128_0\",\"quotecolor\":\"GREEN\"},{\"quotecolorcd\":\"0_0_0\",\"quotecolor\":\"BLACK\"},{\"quotecolorcd\":\"255_255_255\",\"quotecolor\":\"WHITE\"}]");
  filename1:string; 
  uploadfile1:File;
  selectedRow : Number = -1;
  setClickedRow : Function;
  popalertstyle: String = 'none';
  totalRec:number=0;
  searchstyle: String = 'none';
  searchmodel:Quotes=new Quotes();
  page:number=1;
  itemsPerPage:number=5;
  
  
  @ViewChild('f') 
  mytemplateForm : NgForm; 
  @ViewChild('searchform') 
  searchform : NgForm; 

  constructor(private authenticateservice: AuthenticationService, private quoteService: QuoteinfoService, private router: Router) {
    if (localStorage.getItem("loggeduser") != null)
      this.authenticateservice.getloggedIn().next(true);
    else
      this.router.navigateByUrl('/login');

        this.setClickedRow = function(index){
            this.selectedRow = index;
             let i:any=(this.selectedRow+this.itemsPerPage * (this.page-1));
            this.model=this.quotes[i]
        }


        this.quoteService.getQuoteCat().subscribe(data => {
          if(data['response']!=null)
           {
              if(data['msg'] == 'success')
             {
           this.cats = data['response'];
             }
           }
           
         });
        
  }

  getcolorname(code:String)
  {
    let color='';
    this.cats.forEach(element => {      
      if(element.quotecolorcd ==code )
      {
        color= element.quotecolor;
      }    
    });
    return (color==''?'BLACK':color);
  }

  ngOnInit() {
    this.getQuoteinfo();
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
    this.getQuoteinfo();
  }

  byId(item1: any,item2:any)  {
    return item1 === item2;
  }

  searchpop(){
    this.searchmodel=new Quotes();
    this.togglesearch();
  }

  search(){
    this.quoteService.searchQuote(this.searchmodel).subscribe(data => {
      if(data['response']!=null)
       {
          if(data['msg'] == 'success')
         {
          this.quotes = data['response'];
          this.totalRec =this.quotes.length;
          this.togglesearch();
          this.searchmodel=new Quotes();
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
  if(catcode == this.cats[i].quotecolorcd )
  {
    this.selectedcat=this.cats[i];
  }
  }
  }
 */
getQuoteinfo()
  {
   this.quoteService.getQuote().subscribe(data => {
     if(data['response']!=null)
      {
         if(data['msg'] == 'success')
        {
      this.quotes = data['response'];
      this.totalRec =this.quotes.length;
        }
      }
      
    });
  }

  add()
  {
    this.selectedRow =-1;
    //this.mytemplateForm.resetForm();
    this.model=new Quotes();
    this.mytemplateForm.resetForm();
    this.toggle();
  }
  edit()
  {
    if(this.selectedRow != -1)
    {
    //  let i:any=this.selectedRow;
   //  this.model=this.Quotes[i]
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

  quoteimgfileChange(event: EventTarget){
  const eventObj: MSInputMethodContext = <MSInputMethodContext>event;
  const target: HTMLInputElement = <HTMLInputElement>eventObj.target;
  const files: FileList = target.files;
   const formData: FormData = new FormData();
   for (let i = 0; i < files.length; i++) {
    formData.append('file', files[i]);
    if(target.name == 'uploadfile1')
     this.model.quoteimg = files[i].name;
  }   
   if(files.length>0)
    {
      this.uploadF1(formData)
    }
    else
    {
      if(target.name == 'uploadfile1')
      this.model.quoteimg =null;
    }
      
}

uploadF1(formData:any)
  {
    this.quoteService.uploadF1(formData).subscribe(data => {
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
    this.quoteService.uploadFile(this.uploadfile1).subscribe(data => {
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

  submitQuoteinfo()
  {

    if(this.model.quoteno == 0)
    {
      this.quoteService.addQuote(this.model).subscribe(data => {
      if(data['response']!=null)
      {
        if(data['msg'] == 'success')
        {
            this.toggle();
            this.mytemplateForm.resetForm();
            this.getQuoteinfo();
            this.selectedRow = -1;
            this.model=new Quotes();
        }
       
        else
        alert('error has occurred..!')
      } 
    });
    }
    else  if(this.model.quoteno != 0) {
     this.quoteService.updateQuote(this.model).subscribe(data => {
      if(data['response']!=null)
      {
        if(data['msg'] == 'success')
        {
            this.toggle();
            this.mytemplateForm.resetForm();
            this.getQuoteinfo();
            this.selectedRow = -1;
            this.model=new Quotes();
        }
       
        else
        alert('error has occurred..!')
      } 
    });
    }    
  }
  deleteQuote()
  {
    if(this.selectedRow != -1)
    {
     this.togglealert();
    }
  }

  deleteQuotedecision()
  {
    if(this.model.quoteno != 0)
    {
          this.quoteService.deleteQuote(this.model).subscribe(data => {
      if(data['response']!=null)
      {
        if(data['msg'] == 'success')
        {
           this.getQuoteinfo();
           this.togglealert();
           this.selectedRow = -1;
            this.model=new Quotes();
          alert('post deleted successfully..!');
        }
       
        else
        alert('error has occurred..!')
      } 
    });

    }
  }

}
