import { Injectable } from '@angular/core';
import {  Quotec} from './quotec'

@Injectable({
  providedIn: 'root'
})
export class QuoteserviceService {

  constructor() { }

  qoutes =
  [
      new Quotec( 1, "TOM CRUSE", "Quote", "viv" ,"2018-3-3",0, 0),
      new Quotec( 2, "Memia Walgwe", "Quote", "John", "2018-5-12",0 ,0),
      new Quotec( 3, "Michael Angelo", "Quote", "Mike", "2018-5-12",0 ,0),
      new Quotec( 4, "Ndemi Wahutu", "Quote", "Kimani", "2018-5-12",0 ,0),
      new Quotec( 5, "Tryphosa ", "Quote", "Lolo", "2018-5-12",0 ,0),
  
    ]




}
