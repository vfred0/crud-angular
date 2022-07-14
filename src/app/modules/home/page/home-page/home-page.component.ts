import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/Product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  private products: Product[] = [];
  constructor(private productService: ProductService ) { }

  ngOnInit(): void {    
    this.productService.getProducts().subscribe((products:Product[]) => {      
      this.products = products;
    });
  }

  getProducts(): Product[]{
    return this.products;    
  } 

}
