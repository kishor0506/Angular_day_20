import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  mycustomers:Customer[]=[];
  custUrl:string="http://localhost:3000/customer"
  constructor(private http: HttpClient) { }

  getCustomer():Promise<Customer[]>{
   return this.http.get<Customer[]>(this.custUrl).toPromise();
}

}
