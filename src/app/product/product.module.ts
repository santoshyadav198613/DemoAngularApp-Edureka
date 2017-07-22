import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { Product } from '../product/product.component';
import { ProductdetailsComponent } from '../product/productdetails.component';
import { ProducteditComponent } from '../product/productedit.component';
import { InrPipe } from '../pipe/inrpipe.pipe';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: Product },
      { path: ':id', component: ProductdetailsComponent },
      { path: ':id/edit', component: ProducteditComponent },
    ])
  ],
  declarations: [Product,
    ProductdetailsComponent, InrPipe,
    ProducteditComponent]
})
export class ProductModule { }
