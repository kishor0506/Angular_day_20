import { Component, OnInit } from '@angular/core';
import { Paydetails } from 'src/app/model/paydetails';
import { PaydetailsService } from 'src/app/service/paydetails.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-paydetails',
  templateUrl: './paydetails.component.html',
  styleUrls: ['./paydetails.component.css']
})
export class PaydetailsComponent implements OnInit {
 pd:Paydetails[]=[];
  constructor(private paydet:PaydetailsService) { }

  ngOnInit(): void {
    this.paydet.getpd().pipe
    
    (map(data=>data.filter(d=>d.CreditCardTypes = "American Express")),)
    .subscribe((data)=>
    this.pd=data)
  }

}
