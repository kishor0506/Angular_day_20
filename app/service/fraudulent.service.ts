import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import{Fraudulent} from '../model/fraudulent';
@Injectable({
  providedIn: 'root'
})
export class FraudulentService {
furl="http://localhost:3000/fraudulent_payment"
  constructor(private http:HttpClient) { }
  public getfraud():Observable<Fraudulent[]>{
    return this.http.get<Fraudulent[]>(this.furl);
  }

}
