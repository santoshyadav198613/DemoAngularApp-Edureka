import { Component , Input } from '@angular/core'

@Component({
    selector: 'product',
    templateUrl: './product.html'
})
export class Product {
    @Input() userName: string;
    @Input() products = [];

    addProduct()
    {
        let product = { name: 'test product', price: 5000 };
        this.products.push(product);
    }
}