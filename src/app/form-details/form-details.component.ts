import { Component, OnInit } from '@angular/core';
import { QuoteserviceService } from '../quoteservice.service';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.css']
})
export class FormDetailsComponent implements OnInit {

  constructor( private qouteservice:QuoteserviceService) { }

  qoute={};

  ngOnInit() {

  this.qoute = this.qouteservice.qoute;

  }

}
