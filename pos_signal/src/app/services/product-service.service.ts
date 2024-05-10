import { Injectable, signal } from '@angular/core';
import { SaleProduct } from '../models/SaleProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  productList = signal<SaleProduct[]>([]);
  constructor() { }

}
