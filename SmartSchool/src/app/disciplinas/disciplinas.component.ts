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
    {id: 1, name: "Análise de Marmoreio", code: "AM"},
    {id: 2, name: "Acendimento de Carvão", code: "AC"},
    {id: 3, name: "Introdução ao Ponto", code: "IP"},
    {id: 4, name: "Cartiado com o Açougue", code: "CA"},
    {id: 5, name: "Introdução aos Cortes", code: "IC"},
    {id: 6, name: "Espetificação e Análise de Fibras", code: "EAF"}
  ];

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
