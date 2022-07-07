import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductPageComponent } from './page/product-page/product-page.component';
import {  ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    // FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
