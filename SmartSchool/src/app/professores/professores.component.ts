import { Component, OnInit, Input, ɵLocaleDataIndex } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Professor } from '../models/Professor';

export function log(target: any): void {
  console.log("???")
}

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})

@log
export class ProfessoresComponent implements OnInit {

  protected professorForm: FormGroup;
  protected titulo: string = "Professores";
  @Input() professorSelected!: Professor;

  protected professores = [
    { id: 1, name: 'Carlos Carne', email: "C_CARNE@protonmail.org", dis: "Análise de Marmoreio" },
    { id: 2, name: 'Alison Saldanha', email: "alissdanha@gmail.com", dis: "Acendimento de Carvão" },
    { id: 3, name: 'Rafão Grelhas', email: "R_Grrl@outlook.com", dis: "Introdução ao Ponto" },
    { id: 4, name: 'Joseph Cupim', email: "jopCP@outlook.com", dis: "Cartiado com o  Açougue" },
    { id: 5, name: 'Suzano Celado', email: "SC399401@bol.com", dis: "Introdução aos Cortes" },
    { id: 6, name: 'Plinio Salgado', email: "PS300145@gmail.com", dis: "Espetificação e Análise de Fibras" }
  ];

  constructor(private fb: FormBuilder) {
    this.criarFormulario();
  }

  ngOnInit(): void {
  }

  criarFormulario() {
    this.professorForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      dis: ['', Validators.required]
    });
  }

  professorSelect(professor: Professor) {
    this.professorSelected = professor;
    this.professorForm.patchValue(professor);
  }


  professorSubmit() {
    console.log(this.professorForm.value);
  }


  close() {
    this.professorSelected = null;
  };

}
