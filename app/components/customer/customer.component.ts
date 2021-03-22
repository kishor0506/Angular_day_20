import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import {CustomerService}from '../../service/customer.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  mycustomers:Customer[]=[];
  customerService: any;
  constructor(private cust:CustomerService){}
  ngOnInit(): void {
    this.cust.getCustomer().then((customers:Customer[])=>{
      this.mycustomers=customers;
      console.log(this.mycustomers);
    }).catch((err: any)=>{
      console.error(err);
    }).finally(() => {
      console.log("customer")
    });

  }


}
