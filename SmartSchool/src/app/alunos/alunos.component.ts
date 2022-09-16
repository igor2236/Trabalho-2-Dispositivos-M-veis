import { Component, Input, OnInit } from '@angular/core';
import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  protected titulo: string = "Alunos";
  @Input() alunoSelected!: Aluno;

  protected alunos = [
    { id: 1, name: 'Rogerio', tel: '502924481' },
    { id: 2, name: 'Geraldo', tel: '502967485' },
    { id: 3, name: 'Cleiton', tel: '502954486' },
    { id: 4, name: 'Eymael', tel: '502948687' },
    { id: 5, name: 'Cleide', tel: '502922488' },
    { id: 6, name: 'Dalva', tel: '502941289' },
    { id: 7, name: 'Neide', tel: '502999480' }
  ];

  alunoSelect(aluno: Aluno){
    this.alunoSelected = aluno;
  };

  return(){
    this.alunoSelected = null;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
