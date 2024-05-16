import { Injectable, computed, signal } from '@angular/core';
import { SaleProduct } from '../models/SaleProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productlist = signal<SaleProduct[]>([]);
  productitem = signal<SaleProduct>({
    saleNumber: 0,
    code: '',
    price: 0,
    quantity: 0,
    total: 0
  });
  constructor() { }

  /**
   * Add a new product to the list
   * @param _product the product to be added
   */
  AddProduct(product: SaleProduct) {
    // Update the product list by appending the new product to the previous list
    this.productlist.update(previous => [...previous, product]);
  }

  RemoveProduct(id: number){
    this.productlist.update(previous => previous.filter(product => product.saleNumber !== id));
  }

  GetProductByCode(code: string) {
    return this.productitem.set( this.productlist().find(product => product.code === code) as SaleProduct);
  }

  totalquantity = computed(() => this.productlist().length)
  summarytotal = computed(() => this.productlist().reduce((a, b) => a + b.total, 0))

}

