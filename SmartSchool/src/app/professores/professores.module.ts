import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessoresComponent } from './professores.component';
import { TituloModule } from '../titulo/titulo.module';



@NgModule({
  declarations: [
    ProfessoresComponent
  ],
  imports: [
    CommonModule,
    TituloModule
  ],
  exports: [
    ProfessoresComponent
  ]
})
export class ProfessoresModule { }
