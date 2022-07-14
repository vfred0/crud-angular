import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/models/Product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',  
})
export class CardComponent {
  @Input() product: Product;
  @Output() onDeleteProduct: EventEmitter<Product> = new EventEmitter();
  
  constructor(private router: Router) { 
    this.product = new Product();
  }

  onClick(): void {    
    this.router.navigate(['product/edit/', this.product.id]);  
    
  }

  getPrice(): number {        
    return Number.parseFloat(Number(this.product.price).toFixed(2));    
  }

  onDelete(): void {
    console.log('delete card');
    this.onDeleteProduct.emit(this.product);
  }
  
}
