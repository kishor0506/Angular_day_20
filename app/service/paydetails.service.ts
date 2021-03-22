import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paydetails } from '../model/paydetails';

@Injectable({
  providedIn: 'root'
})
export class PaydetailsService {
  pdUrl="http://localhost:3000/PaymentDetails"

  constructor(private http:HttpClient) { }
  public getpd():Observable<Paydetails[]>
{
  return this.http.get<Paydetails[]>(this.pdUrl);
}
  }

