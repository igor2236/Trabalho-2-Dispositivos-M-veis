import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil.component';
import { TituloModule } from '../titulo/titulo.module';



@NgModule({
  declarations: [
    PerfilComponent
  ],
  imports: [
    CommonModule,
    TituloModule
  ],
  exports:[
    PerfilComponent
  ]
})
export class PerfilModule { }
