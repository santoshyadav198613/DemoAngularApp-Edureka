import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from  '@angular/http';

import { AppComponent } from './app.component';
import { Employee } from './employee/employee.component';
import { Product } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { OrderService } from './service/order/order.service';
import { ProductService } from './service/product/product.service';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    Employee,
    Product,
    OrderComponent,
    InvoiceComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpModule
  ],
  providers: [OrderService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
