import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/core/models/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
})
export class DeleteComponent implements OnInit {  
  ngOnInit(): void {
  }

}
