import { Component, OnInit } from '@angular/core';
import { Quotec } from '../quotec'
import { QuoteserviceService } from '../quoteservice.service'
import { Router } from '@angular/router';
import { DateCountPipe } from '../date-count.pipe';
@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  constructor(private qouteservice: QuoteserviceService,private router:Router,private datepipe:DateCountPipe) { }
  validate: boolean = false;
  Quotes = [];
  Quote: string;
  submitter: string;
  author: string;
  qoute:any={};




  ngOnInit() {

    this.Quotes = this.qouteservice.qoutes;
  }

  submitQuote() {
    if (this.author != null && this.Quote != null && this.submitter != null) {
      var date = new Date();
      this.qouteservice.qoutes.push(new Quotec(7, this.author, this.Quote, this.submitter, this.datepipe.transform(date), 0, 0));
      this.author = this.Quote = this.submitter = null;
    } else {
      this.validate = true;
    }

  }
  
  deleteQuote(quote){
    this.qouteservice.deleteQoute(quote);
  }

  viewQoute(quote){
 
    this.qoute = quote;   
  }

upvote(){
    this.qoute.upvote++;
}
downvote(){
  this.qoute.downvote++;
}


}
