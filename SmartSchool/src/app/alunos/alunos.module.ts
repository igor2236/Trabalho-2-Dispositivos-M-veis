import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos.component';
import { TituloModule } from '../titulo/titulo.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AlunosComponent
  ],
  imports: [
    CommonModule,
    TituloModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AlunosComponent
  ]
})
export class AlunosModule { }
