import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Product } from '../product/product.component';
import { ProductService } from '../service/product/product.service';


@Component({
    selector: 'emp',
    templateUrl: './employee.html',
    providers: [ ]
})
export class Employee {
    firstName: string = "Test";
    changedName: string;
    isVisible = false;
    userName = "Test User";
    products = [];
    @ViewChild(Product)
    productComponent: Product;
    @ViewChildren(Product)
    productChildren: QueryList<Product>;

    constructor(private _service: ProductService) {

    }

    ngOnInit(){
        this.products = this._service.getProducts();
    }

    submit(name: string) {
        this.changedName = name;
        this.isVisible = !this.isVisible;
    }

    addProduct() {
        console.log(this.productChildren);
        this.productChildren.forEach((data) => data.userName = "Srinivasan");
        //this.productComponent.userName = "Srinivasan";
        this.productComponent.addProduct();
    }
}