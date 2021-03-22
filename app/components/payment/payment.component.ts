import { Component, OnInit } from '@angular/core';
import {PaymentService} from '../../service/payment.service';
import {Payment} from '../../model/payment'
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payments:Payment[] =[];
  constructor(private paySer:PaymentService) { }

  ngOnInit(): void {
    this.paySer.getPayment().subscribe((data)=>
    this.payments =data
    )}

}
