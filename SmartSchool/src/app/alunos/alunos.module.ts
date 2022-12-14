import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos.component';
import { TituloModule } from '../titulo/titulo.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { ProfessoresModule } from '../professores/professores.module';



@NgModule({
  declarations: [
    AlunosComponent
  ],
  imports: [
    CommonModule,
    TituloModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    ProfessoresModule
  ],
  exports: [
    AlunosComponent
  ]
})
export class AlunosModule { }
