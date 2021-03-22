import { Component, OnInit } from '@angular/core';
import { Fraudulent } from 'src/app/model/fraudulent';
import {FraudulentService} from'src/app/service/fraudulent.service';

@Component({
  selector: 'app-fraudulent',
  templateUrl: './fraudulent.component.html',
  styleUrls: ['./fraudulent.component.css']
})
export class FraudulentComponent implements OnInit {
  fraud:Fraudulent[]=[];
  constructor(private fraudpay:FraudulentService) { }

  ngOnInit(): void {
    this.fraudpay.getfraud().subscribe((data: Fraudulent[])=>
    this.fraud=data
    )
  }
}
