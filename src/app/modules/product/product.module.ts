import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import {  ReactiveFormsModule } from '@angular/forms';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductComponent } from './components/product/product.component';


@NgModule({
  declarations: [        
    ProductEditComponent,
    ProductAddComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    // FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
