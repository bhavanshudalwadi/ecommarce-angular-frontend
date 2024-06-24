import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  products: any[] = []

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProductList()
  }

  getProductList = () => {
    this.productService.getProducts().subscribe({
      next: (response: any) => {
        if(Array.isArray(response)) {
          this.products = response
        }else {
          alert('Failed to get products')
          console.log(response)
        }
      },
      error: (e) => {
        alert("Failed to get products");
        console.error(e);
      },
      complete: () => {}
    })
  }

  handleAddToCart = (product_id: string) => {

  }

  handleQtyUpdate = (product_id: string, qty: number) => {

  }
}
