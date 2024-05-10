import { Component, OnInit } from '@angular/core';
import { ProductAddComponent } from '../product-add/product-add.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductSummaryComponent } from '../product-summary/product-summary.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  imports: [ProductAddComponent,ProductListComponent,ProductSummaryComponent],
  standalone: true
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
