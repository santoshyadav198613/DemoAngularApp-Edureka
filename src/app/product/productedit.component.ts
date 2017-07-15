import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.css']
})
export class ProducteditComponent implements OnInit {
  productId: number;
  constructor(private _route:ActivatedRoute ) { }

  ngOnInit() {
     this._route.params.subscribe(data => this.productId = data['id']);
  }

}
