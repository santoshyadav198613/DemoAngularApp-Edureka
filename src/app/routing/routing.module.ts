import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Employee } from '../employee/employee.component';
import { Product } from '../product/product.component';
import { ProductdetailsComponent } from '../product/productdetails.component';
import { OrderComponent } from '../order/order.component';
import { LoginComponent } from '../login/login.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot([
      { path: 'employee', component: Employee },
      { path: 'product', component: Product },
      { path: 'product/:id', component: ProductdetailsComponent },
      { path: 'order', component: OrderComponent },
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: '**', component: PagenotfoundComponent }
    ])
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }
