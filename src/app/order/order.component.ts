import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { OrderService } from '../service/order/order.service'
import { Order } from './order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: []
})
export class OrderComponent implements OnInit {
  orders: Order[];
  order: Order = { id: 0, orderNumber: 0, password: '', userName: '' };
  @Input() empName: string;
  @Output() onOrderPlaced = new EventEmitter<number>();
  constructor(private _orderService: OrderService) { }



  ngOnInit() {
    this.orders = this._orderService.getOrders();
    console.log(this.orders);
  }

  ngOnChanges(obj: SimpleChanges) {
    let data = obj;
     console.log('ngOnInit');
  }

  addOrder(orderForm: any) {
    let order = this.order;
    this._orderService.addOrder(order);
    this.onOrderPlaced.emit(this.order.id);
    this.order = { id: 0, orderNumber: 0, password: '', userName: '' };

  }
}
