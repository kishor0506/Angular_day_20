import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule}from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { GridComponent } from './components/grid/grid.component';
import { HttpClientModule } from '@angular/common/http';
import { PaymentComponent } from './components/payment/payment.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForexconvertComponent } from './components/forexconvert/forexconvert.component';
import { UnitconvertComponent } from './components/unitconvert/unitconvert.component';
import { FraudulentComponent } from './components/fraudulent/fraudulent.component';
import { ExpPipe } from './exp.pipe';
import { CustomerComponent } from './components/customer/customer.component';
import { PaydetailsComponent } from './components/paydetails/paydetails.component';



@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    PaymentComponent,
    DashboardComponent,
    ForexconvertComponent,
    UnitconvertComponent,
    FraudulentComponent,
    ExpPipe,
    CustomerComponent,
    PaydetailsComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
