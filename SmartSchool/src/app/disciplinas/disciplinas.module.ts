import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisciplinasComponent } from './disciplinas.component';
import { TituloModule } from '../titulo/titulo.module';

@NgModule({
  declarations: [
    DisciplinasComponent
  ],
  imports: [
    CommonModule,
    TituloModule
  ],
  exports: [
    DisciplinasComponent
  ]
})
export class DisciplinasModule { }
