import { Component, OnInit } from '@angular/core';
import { Invoice } from './invoice';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
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
