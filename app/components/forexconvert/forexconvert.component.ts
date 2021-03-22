import { Component, OnInit } from '@angular/core';
import { ForexconvertService } from 'src/app/service/forexconvert.service';


@Component({
  selector: 'app-forexconvert',
  templateUrl: './forexconvert.component.html',
  styleUrls: ['./forexconvert.component.css']
})
export class ForexconvertComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'forexcalculation';
  selectedfrom:String='';
  selectedto:String='';
  amountentered:number=0;
  cal1:number=0;
  private fservice: ForexconvertService=new ForexconvertService();
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
    if(this.selectedfrom=='INR' && this.selectedto=='EUR')
    {
       this.cal1=this.fservice.InrToEur(this.amountentered);
    }
    else if(this.selectedfrom=='INR' && this.selectedto=='USD')
    {
      this.cal1=this.fservice.InrToUsd(this.amountentered); 
    }
    else if(this.selectedfrom=='EUR' && this.selectedto=='INR')
    {
      this.cal1=this.fservice.EurToInr(this.amountentered); 
    }
    else if(this.selectedfrom=='EUR' && this.selectedto=='USD')
    {
      this.cal1=this.fservice.EurToUsd(this.amountentered); 
    }
    else if(this.selectedfrom=='USD' && this.selectedto=='INR')
    {
      this.cal1=this.fservice.UsdToInr(this.amountentered); 
    }
    else if(this.selectedfrom=='USD' && this.selectedto=='EUR')
    {
      this.cal1=this.fservice.UsdToEur(this.amountentered); 
    }
    else
    {
      this.cal1=this.amountentered;
    }
    
  }
  
  
 }
  
  