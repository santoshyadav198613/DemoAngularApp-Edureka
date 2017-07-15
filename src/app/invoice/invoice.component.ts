import { Component, OnInit } from '@angular/core';
import { Invoice } from './invoice';
import { OrderService } from  '../service/order/order.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
  providers:[OrderService]
})
export class InvoiceComponent implements OnInit {
  invoice: Invoice = { invoiceDate: null, invoiceId: 0, name: '' }
  constructor() { }

  ngOnInit() {
  }

  addInvoice()
  {
    console.log(this.invoice);
  }
}
