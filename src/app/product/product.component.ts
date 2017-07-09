import { Component, Input } from '@angular/core'
import { ProductService } from '../service/product/product.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Component({
    selector: 'product',
    templateUrl: './product.html'
})
export class Product {
    @Input() userName: string;
    @Input() products = [];
    posts: any[];
    product = { name: '', price: 10 };

    constructor(private _productService: ProductService, private _http: Http) {

    }

    ngOnInit() {
        this._http.get('http://jsonplaceholder.typicode.com/posts').
            subscribe((res: Response) => this.posts = res.json());
    }

    addProduct() {
        //let product = { name: 'test product', price: 5000 };
        this._productService.addProduct(this.product);
        //this.products.push(this.product);
    }
}