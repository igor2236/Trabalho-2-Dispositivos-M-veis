import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessoresComponent } from './professores.component';



@NgModule({
  declarations: [
    ProfessoresComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProfessoresComponent
  ]
})
export class ProfessoresModule { }
