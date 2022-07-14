import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { DeleteComponent } from './components/delete/delete.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [CardComponent, DeleteComponent],
  imports: [
    CommonModule,    
    AngularSvgIconModule.forRoot()
  ],
  exports: [CardComponent]
})
export class SharedModule { }
