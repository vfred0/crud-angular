import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { DeleteComponent } from './components/delete/delete.component';
@NgModule({
  declarations: [CardComponent, DeleteComponent],
  imports: [
    CommonModule,    
  ],
  exports: [CardComponent]
})
export class SharedModule { }
