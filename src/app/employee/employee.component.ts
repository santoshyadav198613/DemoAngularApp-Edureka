import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Product } from '../product/product.component';


@Component({
    selector: 'emp',
    templateUrl: './employee.html'
})
export class Employee {
    firstName: string = "Test";
    changedName: string;
    isVisible = false;
    userName = "Test User";
    products = [{ name: 'HD TV 32 inch', price: 45000 }, { name: 'refrigerator 150 Ltr', price: 10000 }];;
    @ViewChild(Product)
    productComponent: Product;
    @ViewChildren(Product)
    productChildren: QueryList<Product>;

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