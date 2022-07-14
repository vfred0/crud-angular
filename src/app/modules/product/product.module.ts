import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import {  ReactiveFormsModule } from '@angular/forms';

import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import {ProductPageComponent } from './pages/product-page.component';
import { AngularSvgIconModule } from 'angular-svg-icon';



@NgModule({
  declarations: [        
    ProductEditComponent,
    ProductAddComponent,
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,    
    AngularSvgIconModule.forRoot(),
    ReactiveFormsModule
  ]
})
export class ProductModule { }
