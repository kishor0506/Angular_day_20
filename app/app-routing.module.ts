import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForexconvertComponent } from './components/forexconvert/forexconvert.component';
import { FraudulentComponent } from './components/fraudulent/fraudulent.component';
import { PaymentComponent } from './components/payment/payment.component';
import { UnitconvertComponent } from './components/unitconvert/unitconvert.component';
import{PaydetailsComponent}from'./components/paydetails/paydetails.component';
import { CustomerComponent } from './components/customer/customer.component';

const routes: Routes = [
  {path:'payment',component:PaymentComponent},{path:'dashboard',component:DashboardComponent},
  {path:'forexconvert',component:ForexconvertComponent},{path:"unitconvert",component:UnitconvertComponent},
  {path:'fraudulent',component:FraudulentComponent}, {path:'paydetails',component:PaydetailsComponent},
  {path:'customer',component:CustomerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
