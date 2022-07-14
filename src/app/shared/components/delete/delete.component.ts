import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/core/models/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
})
export class DeleteComponent implements OnInit {  
  // @Input() product: Product;
  // constructor(private productService: ProductService) { 
  //   this.product = new Product();
  // }

  ngOnInit(): void {
  }

  // onClick(): void {
  //   this.productService.deleteProduct(this.product.id);    
  // }

}
