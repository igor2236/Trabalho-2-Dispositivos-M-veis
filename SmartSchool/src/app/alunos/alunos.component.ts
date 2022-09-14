import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  protected titulo: string = "Alunos";

  protected alunos = [
    { id: 1, name: 'Rogerio' },
    { id: 2, name: 'Geraldo' },
    { id: 3, name: 'Cleiton' },
    { id: 4, name: 'Eymael' },
    { id: 5, name: 'Cleide' },
    { id: 6, name: 'Dalva' },
    { id: 7, name: 'Neide' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
