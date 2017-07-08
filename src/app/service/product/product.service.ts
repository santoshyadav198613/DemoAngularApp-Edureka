import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  products = [{ name: 'HD TV 32 inch', price: 45000 }, { name: 'refrigerator 150 Ltr', price: 10000 }];

  constructor() { }

  addProduct(product:any) {
      this.products.push(product);
  }

  getProducts()
  {
    return this.products;
  }
}
