import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {

  protected titulo: string = "Disciplinas"
  @Input() disciplinaSelected!: string;

  protected disciplinas = [
    {id: 1, name: "Disciplina 1", code: "1"},
    {id: 2, name: "Disciplina 2", code: "2"},
    {id: 3, name: "Disciplina 3", code: "3"},
    {id: 4, name: "Disciplina 4", code: "4"},
    {id: 5, name: "Disciplina 5", code: "5"},
    {id: 6, name: "Disciplina 6", code: "6"}
  ];
  
/*
  protected disciplinas = [
    {id: 1, name: "Análise de Marmoreio", code: "AM"},
    {id: 2, name: "Acendimento de Carvão", code: "AC"},
    {id: 3, name: "Introdução ao Ponto", code: "IP"},
    {id: 4, name: "Cartiado com o Açougue", code: "CA"},
    {id: 5, name: "Introdução aos Cortes", code: "IC"},
    {id: 6, name: "Espetificação e Análise de Fibras", code: "EAF"}
  ];
*/

  disciplinaSelect(nome: any){
    this.disciplinaSelected = nome;
  };

  return(){
    this.disciplinaSelected = "";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
