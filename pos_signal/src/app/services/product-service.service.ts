import { Injectable, signal } from '@angular/core';
import { SaleProduct } from '../models/SaleProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  productlist = signal<SaleProduct[]>([]);
  constructor() { }

  /**
   * Add a new product to the list
   * @param _product the product to be added
   */
  AddProduct(_product: SaleProduct) {
    // Update the product list by appending the new product to the previous list
    this.productlist.update(previous => [...previous, _product]);
  }

}

