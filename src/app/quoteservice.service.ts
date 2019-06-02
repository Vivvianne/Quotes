import { Injectable } from '@angular/core';
import {  Quotec} from './quotec'

@Injectable({
  providedIn: 'root'
})
export class QuoteserviceService {

  constructor() { }

  qoutes =[];
  qoute = {};

  public deleteQoute(qoute) {
    const index: number = this.qoutes.indexOf(qoute);
    if (index !== -1) {
      this.qoutes.splice(index, 1);
    }
  }
  public viewQoute(qoute){
    this.qoute = qoute;
  }
}
