import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos.component';
import { TituloModule } from '../titulo/titulo.module';



@NgModule({
  declarations: [
    AlunosComponent
  ],
  imports: [
    CommonModule,
    TituloModule
  ],
  exports: [
    AlunosComponent
  ]
})
export class AlunosModule { }
