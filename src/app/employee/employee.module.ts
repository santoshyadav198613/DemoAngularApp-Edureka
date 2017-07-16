import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Employee } from './employee.component';
import { Product } from '../product/product.component';
import { OrderComponent } from '../order/order.component';
import { SharedModule } from '../shared/shared.module';
import { TestpipePipe } from '../testpipe.pipe';
import { MytestdirectiveDirective } from '../mytestdirective.directive';
import { ColorHighlightDirective } from '../directive/color-higlight.directive';
import { InrPipe } from '../pipe/inrpipe.pipe';
import { WelcomePipe } from '../pipe/welcome.pipe';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{
      path: 'employee', component: Employee
    }])
  ],
  declarations: [Employee, 
  Product, OrderComponent,TestpipePipe,InrPipe,
  ColorHighlightDirective,MytestdirectiveDirective,
  WelcomePipe]
})
export class EmployeeModule { }
