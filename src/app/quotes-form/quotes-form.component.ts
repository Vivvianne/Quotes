import { Component, OnInit } from '@angular/core';
import{ Quotec} from '../quotec'
import { QuoteserviceService} from '../quoteservice.service'
@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  constructor( private qouteservice :QuoteserviceService) { }
  Quotes = [];
  Quote: string;
  submitter: string;
  author: string;


  names ="Mike Shago";
  
  ngOnInit() {

    this.Quotes= this.qouteservice.qoutes;
  }

  submitQuote(){
   var date = new Date();
    this.qouteservice.qoutes.push(new Quotec(7,this.author,this.Quote,this.submitter, date, 0, 0 ));
    //code here
  }
  quotesupvote(id:number){
   for( var i = 0; i < this.qouteservice.qoutes.length; i++){
     if( this.qouteservice.qoutes[i].id = id){
      this.qouteservice.qoutes[i].upvote + 1;
     }
   }
   this.Quotes = this.qouteservice.qoutes;
  }

}
