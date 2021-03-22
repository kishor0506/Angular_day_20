import { Component, OnInit } from '@angular/core';

import {UnitconvertService } from'src/app/service/unitconvert.service';

@Component({
  selector: 'app-unitconvert',
  templateUrl: './unitconvert.component.html',
  styleUrls: ['./unitconvert.component.css']
})
export class UnitconvertComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  title = 'unitconv';
  selectedfrom:String='';
  selectedto:String='';
  unitentered:number=0;
  cal1:number=0;
  private uservice:UnitconvertService=new UnitconvertService();
  from(event:any)
  {
    this.selectedfrom=event.target.value;
  }
  to(event:any)
  {
    this.selectedto=event.target.value;
  }
  cal()
    {
    if(this.selectedfrom=='CM' && this.selectedto=='M')
    {
       this.cal1=this.uservice.cmTom(this.unitentered);
    }
    else if(this.selectedfrom=='CM' && this.selectedto=='FEET')
    {
      this.cal1=this.uservice.cmTofeet(this.unitentered); 
    }
    else if(this.selectedfrom=='FEET' && this.selectedto=='CM')
    {
      this.cal1=this.uservice.feetTocm(this.unitentered); 
    }
    else if(this.selectedfrom=='FEET' && this.selectedto=='M')
    {
      this.cal1=this.uservice.feetTom(this.unitentered); 
    }
    else if(this.selectedfrom=='M' && this.selectedto=='CM')
    {
      this.cal1=this.uservice.mTocm(this.unitentered); 
    }
    else if(this.selectedfrom=='M' && this.selectedto=='FEET')
    {
      this.cal1=this.uservice.mTofeet(this.unitentered); 
    }
    else if(this.selectedfrom=='celsius' && this.selectedto=='fahrenheit')
    {
      this.cal1=this.uservice.celtofah(this.unitentered); 
    }
    else if(this.selectedfrom=='fahrenheit' && this.selectedto=='celsius')
    {
      this.cal1=this.uservice.fahtocel(this.unitentered); 
    }

    else
    {
      this.cal1=this.unitentered;
    }
    
  }
}