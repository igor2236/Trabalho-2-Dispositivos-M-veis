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

  protected professores = [
  {id: 1, name: 'Prof. Leão Camargo'},
  {id: 2 , name: 'Prof. Camargo Amarantes'},
  {id: 3 , name: 'Prof. Rafão Grelhas'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
