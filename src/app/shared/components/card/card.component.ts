import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/models/Product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',  
})
export class CardComponent {
  @Input() product: Product;
  
  constructor(private router: Router) { 
    this.product = new Product();
  }

  onClick(): void {    
    this.router.navigate(['product/edit/', this.product.id]);  
    
  }

  getPrice(): number {        
    return Number.parseFloat(Number(this.product.price).toFixed(2));    
  }
}
