import { Injectable, computed, signal } from '@angular/core';
import { SaleProduct } from '../models/SaleProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productlist = signal<SaleProduct[]>([]);
  constructor() { }

  /**
   * Add a new product to the list
   * @param _product the product to be added
   */
  AddProduct(product: SaleProduct) {
    // Update the product list by appending the new product to the previous list
    this.productlist.update(previous => [...previous, product]);
  }

  totalquantity= computed(() => this.productlist().length)

}

