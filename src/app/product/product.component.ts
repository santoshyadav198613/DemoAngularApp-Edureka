import { Component, Input } from '@angular/core'
import { ProductService } from '../service/product/product.service';
@Component({
    selector: 'product',
    templateUrl: './product.html'
})
export class Product {
    @Input() userName: string;
    @Input() products = [];
    product = { name: '', price: 10 };

    constructor(private _productService: ProductService) {

    }
    addProduct() {
        //let product = { name: 'test product', price: 5000 };
        this._productService.addProduct(this.product);
        //this.products.push(this.product);
    }
}