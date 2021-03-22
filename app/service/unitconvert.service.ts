import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnitconvertService {
  constructor() { }
  public cmTom(x:number)
  {
    return x*0.01;
  }
  public cmTofeet(x:number)
  {
    return x*0.03280;
  }
  public mTofeet(x:number)
  {
    return x*3.28084;
  }
  public mTocm(x:number)
  {
    return x*100;
  }
  public feetTocm(x:number)
  {
    return x*30.48;
  }
  public feetTom(x:number)
  {
    return x/0.3048;
  }
  public celtofah(x:number)
  {
    return (x*1.8)+32;
  }
  public fahtocel(x:number)
  {
    return x-32*1.8;
  }
}