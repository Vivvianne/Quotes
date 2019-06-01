import { Component, OnInit } from '@angular/core';
import{ Quotec} from '../quotec'
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  constructor() { }
  Quotes = [];
  Quote: string;
  submitter: string;
  author: string;


  names ="Mike Shago";
  
  ngOnInit() {

    this.Quotes=[
      new Quotec( 1, "TOM CRUSE", "Quote", "viv" ,"2018-3-3",0, 0),
      new Quotec( 2, "Memia Walgwe", "Quote", "John", "2018-5-12",0 ,0),
      new Quotec( 3, "Michael Angelo", "Quote", "Mike", "2018-5-12",0 ,0),
      new Quotec( 4, "Ndemi Wahutu", "Quote", "Kimani", "2018-5-12",0 ,0),
      new Quotec( 5, "Tryphosa ", "Quote", "Lolo", "2018-5-12",0 ,0),
  
    ]
  }
  submitQuote(){
   var date = new Date();
    this.Quotes.push(new Quotec(7,this.author,this.Quote,this.submitter, date, 0, 0 ));
    console.log("works");
    console.log(new Quotec(7,this.author,this.Quote,this.submitter, date, 0, 0 ))

    //code here
  }

}
