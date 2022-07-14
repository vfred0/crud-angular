import { Component, OnInit } from '@angular/core';
import { TypeButton } from 'src/app/core/types/TypeButton';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  
})
export class ProductEditComponent implements OnInit {
  typeButton: TypeButton = TypeButton.UPDATE;
  ngOnInit(): void {
    
  }
}
