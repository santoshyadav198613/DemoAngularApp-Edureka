import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from  '../service/order/order.service'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: [ ] 
})
export class OrderComponent implements OnInit {
  orders= [];
  constructor(private _orderService: OrderService) { }

  ngOnInit() {
    this.orders = this._orderService.getOrders();
  }

}
