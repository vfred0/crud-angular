import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NotifierModule } from 'angular-notifier';

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,    
    AngularSvgIconModule.forRoot(),
    NotifierModule

  ],
  exports: [CardComponent]
})
export class SharedModule { }
