import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessoresComponent } from './professores.component';
import { TituloModule } from '../titulo/titulo.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProfessoresComponent
  ],
  imports: [
    CommonModule,
    TituloModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ProfessoresComponent
  ]
})
export class ProfessoresModule { }
