import { NgFor } from '@angular/common';
import { ProductService } from '../../services/product-service';
import { SaleProduct } from './../../models/SaleProduct';
import { Component, OnInit, inject, signal } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [NgFor],
  standalone: true
})
export class ProductListComponent implements OnInit {
  remove(arg0: number) {
    this.service.RemoveProduct(arg0);
  }

  public service = inject(ProductService);


  constructor() { }

  ngOnInit() {
  }

}
