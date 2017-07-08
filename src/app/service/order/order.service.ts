import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {
  orders = [{
    id: 1,
    orderNumber: 1234,
    userName: 'test'
  },
  {
    id: 2,
    orderNumber: 12345,
    userName: 'test test' 
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
