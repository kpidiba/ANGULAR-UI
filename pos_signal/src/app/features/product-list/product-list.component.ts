import { NgFor } from '@angular/common';
import { ProductServiceService } from '../../services/product-service.service';
import { SaleProduct } from './../../models/SaleProduct';
import { Component, OnInit, inject, signal } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports:[NgFor],
  standalone: true
})
export class ProductListComponent implements OnInit {

  public service = inject(ProductServiceService);

  productList = signal<SaleProduct[]>([]);


  constructor() { }

  ngOnInit() {
  }

}
