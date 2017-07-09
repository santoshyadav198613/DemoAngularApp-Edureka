import { Injectable } from '@angular/core';
import { Order } from '../../order/order';

@Injectable()
export class OrderService {
  orders : Order[] = [{
    id: 1,
    orderNumber: 1234,
    userName: 'test',
    password  : ''
  },
  {
    id: 2,
    orderNumber: 12345,
    userName: 'test test' ,
    password : ''
  }];
  constructor() { }

  getOrders() {
    return this.orders;
  }

  addOrder(order: any )
  {
    this.orders.push(order);
  }

}
