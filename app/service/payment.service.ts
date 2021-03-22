import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../model/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  pUrl =" http://localhost:3000/payment";
  constructor(private http:HttpClient) { }

  public getPayment(): Observable<Payment[]>
  {
    return this.http.get<Payment[]>(this.pUrl);
  }
}
