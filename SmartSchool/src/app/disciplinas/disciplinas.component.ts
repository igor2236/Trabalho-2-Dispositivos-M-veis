import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {

  protected titulo: string = "Disciplina"
  public disciplinaSelecionada!: string;

  protected disciplinas = [
    {id: 1, name: "Análise de Marmoreio", codigo: "AM"},
    {id: 2, name: "Acendimento de Carvão", codigo: "AC"},
    {id: 3, name: "Introdução ao Ponto", codigo: "IP"},
    {id: 4, name: "Cartiado com o Açougue", codigo: "CA"},
    {id: 5, name: "Introdução aos Cortes", codigo: "IC"},
    {id: 6, name: "Espetificação e Análise de Fibras", codigo: "EAF"}
  ];

  disciplinaSelect(disciplinas: string){
    this.disciplinaSelecionada = disciplinas;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
