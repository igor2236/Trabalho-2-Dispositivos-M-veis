import { Component, OnInit, ɵLocaleDataIndex } from '@angular/core';

export function log(target:any): void{
  console.log("que merda é essa de typescript?!")
}

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})

@log
export class ProfessoresComponent implements OnInit {

  protected titulo: string = "Professores";

  protected professores = [
  {id: 1, name: 'Carlos Carne', email: "C_CARNE@prootomail.com"},
  {id: 2 , name: 'Alison Saldanha', email: "alissdanha@gmail.com"},
  {id: 3 , name: 'Rafão Grelhas', email: "R_Grrl@outlook.com"},
  {id: 4 , name: 'Joseph Cupim', email: "jopCP@outlook.com"},
  {id: 5 , name: 'Suzano Celado', email: "SC399401@bol.com"},
  {id: 6 , name: 'Plinio Salgado', email: "PS300145@gmail.com"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
