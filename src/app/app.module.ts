import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './routing/routing.module';
import { EmployeeModule } from './employee/employee.module';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { InvoiceComponent } from './invoice/invoice.component';
import { OrderService } from './service/order/order.service';
import { ProductService } from './service/product/product.service';
import { UserComponent } from './user/user.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './shared/shared.module';
import { ProductdetailsComponent } from './product/productdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceComponent,
    UserComponent,
    PagenotfoundComponent,
    LoginComponent,
    ProductdetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    EmployeeModule,
    RoutingModule
  ],
  providers: [OrderService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
