import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { Product } from '../product/product.component';
import { ProductdetailsComponent } from '../product/productdetails.component';
import { ProducteditComponent } from '../product/productedit.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'product', component: Product },
      { path: 'product/:id', component: ProductdetailsComponent },
      { path: 'product/:id/edit', component: ProducteditComponent },
    ])

  ],
  declarations: [    
    ProductdetailsComponent,
    ProducteditComponent]
})
export class ProductModule { }
