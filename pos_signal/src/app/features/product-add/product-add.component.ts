import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../services/product-service.service';
import { SaleProduct } from '../../models/SaleProduct';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
  imports: [FormsModule, ReactiveFormsModule],
  standalone: true
})
export class ProductAddComponent implements OnInit {

  private builder = inject(FormBuilder);
  public service = inject(ProductService);
  productform = this.builder.group({
    saleNumber: this.builder.control<number>(1),
    code: this.builder.control(''),
    name: this.builder.control(''),
    quantity: this.builder.control(1),
    price: this.builder.control(1),
    total: this.builder.control(0)
  })

  ngOnInit() {
  }

  onSubmit() {
    console.log("Form Value:", this.productform.value);
    let quantity = this.productform.value.quantity as number;
    let price = this.productform.value.price as number;
    let total = quantity * price;

    console.log("Quantity:", quantity);
    console.log("Price:", price);
    console.log("Total:", total);

    const product: SaleProduct = {
      saleNumber: this.service.productlist().length + 1,
      code: this.productform.value.code as string,
      price: price,
      quantity: quantity,
      total: total
    };
    this.service.AddProduct(product);
  }

}
