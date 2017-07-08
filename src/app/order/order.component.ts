import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from '../service/order/order.service'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: []
})
export class OrderComponent implements OnInit {
  orders = [];
  order = {
    id: 0, orderNumber: 0, userName: ''
  }
  constructor(private _orderService: OrderService) { }

  ngOnInit() {
    this.orders = this._orderService.getOrders();
  }

  addOrder() {
    let order = this.order;
    this._orderService.addOrder(order);
  } 

}
