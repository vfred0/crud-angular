import { Component, OnInit } from '@angular/core';
import { TypeButton } from 'src/app/core/types/TypeButton';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',  
})
export class ProductAddComponent implements OnInit {
  typeButton: TypeButton = TypeButton.CREATE;
  constructor() { }

  ngOnInit(): void {
  }

  
}
