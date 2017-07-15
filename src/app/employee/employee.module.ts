import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Employee } from './employee.component';
import { Product } from '../product/product.component';
import { OrderComponent } from '../order/order.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{
      path: '', component: Employee
    }])
  ],
  declarations: [Employee, Product, OrderComponent]
})
export class EmployeeModule { }
