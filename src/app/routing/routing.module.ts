import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { OrderComponent } from '../order/order.component';
import { LoginComponent } from '../login/login.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { PostComponent } from '../post/post.component'


@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot([
      { path: 'order', component: OrderComponent },
      { path: 'login', component: LoginComponent },
      { path: 'post', component: PostComponent },
      { path: 'product', loadChildren: 'app/product/product.module#ProductModule' },
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: '**', component: PagenotfoundComponent }
    ])
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }
