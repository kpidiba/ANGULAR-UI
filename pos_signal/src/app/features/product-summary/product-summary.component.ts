import { ProductService } from './../../services/product-service.service';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-product-summary',
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.css'],
  standalone:true
})
export class ProductSummaryComponent implements OnInit {
  public service = inject(ProductService);
  constructor() { }

  ngOnInit() {
  }

}
