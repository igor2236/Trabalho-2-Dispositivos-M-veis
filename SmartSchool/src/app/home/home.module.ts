import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TituloModule } from '../titulo/titulo.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    TituloModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
