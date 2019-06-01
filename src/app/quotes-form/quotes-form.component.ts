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

  names ="Mike Shago";
  
  ngOnInit() {

    this.Quotes=[
      //new Quotec( 1, "TOM CRUSE", "viv" ,"2018-3-3",0, 0),
    //  new Quotec( 2, "Memia Walgwe", "John", "2018-5-12",0 ,0),
    //  new Quotec( 3, "Michael Angelo", "Mike", "2018-5-12",0 ,0),
    //  new Quotec( 4, "Ndemi Wahutu", "Kimani", "2018-5-12",0 ,0),
     // new Quotec( 5, "Tryphosa ", "Lolo", "2018-5-12",0 ,0),
     {id:1, author:"aBC ", submitter:"XYZ", date:"2017-10-10",},
     {id:2, author:"aBC123 ", submitter:"XYZ112", date:"2017-10-10",}
    ]
  }

}
