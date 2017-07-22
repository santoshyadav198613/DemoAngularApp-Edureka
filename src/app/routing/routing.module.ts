import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { OrderComponent } from '../order/order.component';
import { LoginComponent } from '../login/login.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { PostComponent } from '../post/post.component'
import { AuthGuard } from '../service/AuthGuard/auth.guard';

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot([
      { path: 'order', component: OrderComponent },
      { path: 'login', component: LoginComponent },
      { path: 'post', component: PostComponent },
      { path: 'product', canActivate: [AuthGuard], loadChildren: 'app/product/product.module#ProductModule' },
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: '**', component: PagenotfoundComponent }
    ])
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }
