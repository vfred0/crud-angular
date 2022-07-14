import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './page/home-page/home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularSvgIconModule } from 'angular-svg-icon';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule, 
    AngularSvgIconModule.forRoot(),
    SharedModule
  ]
})
export class HomeModule { }
