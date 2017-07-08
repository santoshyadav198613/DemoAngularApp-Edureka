import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import  { Employee } from './employee/employee.component';
import { Product } from  './product/product.component';
import { OrderComponent } from './order/order.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { OrderService } from  './service/order/order.service';
import {ProductService} from  './service/product/product.service';

@NgModule({
  declarations: [
    AppComponent,
    Employee,
    Product,
    OrderComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [OrderService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
