
import {
    Component, QueryList, ViewChild, ViewChildren, OnChanges, OnDestroy, DoCheck,
    SimpleChanges, AfterViewInit, AfterViewChecked
} from '@angular/core';
import { OrderComponent } from '../order/order.component';
import { ProductService } from '../service/product/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    templateUrl: './employee.html',
    providers: []
})
export class Employee {
    firstName: string = "Test";
    changedName: string;
    isVisible = false;
    userName = "Test User";
    products = [];
    employeeForm: FormGroup;
    orderId: number;
    @ViewChild(OrderComponent)
    orderComp: OrderComponent;

    constructor(private _service: ProductService, private _fb: FormBuilder) {

    }


    ngOnInit() {
        console.log('ngOnInit');
        this.products = this._service.getProducts();
        this.employeeForm = this._fb.group({
            name: ['', Validators.required],
            address: this._fb.group({
                addressLine1: [''],
                city: [''],
                zip: []
            })
        })
    }

    ngDoCheck() {
        let data = this.employeeForm;
        console.log('ngDoCheck');
    }

    ngAfterViewInit() {
        this.orderComp.empName = 'Rupesh';
        console.log('ngAfterViewInit');
    }

    ngAfterViewChecked() {

        console.log('ngAfterViewChecked');
    }
    addEmployee() {
        let emp = this.employeeForm.value;
    }
    submit(name: string) {
        this.changedName = name;
        this.isVisible = !this.isVisible;
    }



    getOrderId(oId: number) {
        this.orderId = oId;
    }
}