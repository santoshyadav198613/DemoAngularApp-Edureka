import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing/routing.module';
import { EmployeeModule } from './employee/employee.module';


import { AppComponent } from './app.component';

import { InvoiceComponent } from './invoice/invoice.component';
import { OrderService } from './service/order/order.service';
import { ProductService } from './service/product/product.service';
import { UserComponent } from './user/user.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './shared/shared.module';
import { ProductModule } from './product/product.module';

import { LowerCasePipe } from '@angular/common';
import { MytestdirectiveDirective } from './mytestdirective.directive';
import { TestpipePipe } from './testpipe.pipe';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    InvoiceComponent,
    UserComponent,
    PagenotfoundComponent,
    LoginComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    EmployeeModule,
    RoutingModule
  ],
  providers: [OrderService, ProductService, LowerCasePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
