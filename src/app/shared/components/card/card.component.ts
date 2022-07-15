import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Product } from 'src/app/core/models/Product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',  
})
export class CardComponent {
  @Input() product: Product;
  @Output() eventEmitterForDelete: EventEmitter<Product> = new EventEmitter();
  
  constructor(private router: Router, private notifier: NotifierService) { 
    this.product = new Product();
  }

  onClick(): void {    
    this.router.navigate(['product/edit/', this.product.id]);  
    
  }

  getPrice(): number {        
    return Number.parseFloat(Number(this.product.price).toFixed(2));    
  }

  onDelete(): void {    
    this.notifier.notify('success', `El producto '${this.product.description}' ha sido eliminado`);
    this.eventEmitterForDelete.emit(this.product);
  }
  
}
