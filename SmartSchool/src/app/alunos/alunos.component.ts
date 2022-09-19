import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { __values } from 'tslib';
import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public modalRef: BsModalRef;
  protected alunoForm: FormGroup;
  protected titulo: string = "Alunos";
  @Input() alunoSelected!: Aluno;
  protected simpleText: string;



  protected alunos = [
    { id: 1, name: 'Rogerio', tel: '502924481' },
    { id: 2, name: 'Geraldo', tel: '502967485' },
    { id: 3, name: 'Cleiton', tel: '502954486' },
    { id: 4, name: 'Eymael', tel: '502948687' },
    { id: 5, name: 'Cleide', tel: '502922488' },
    { id: 6, name: 'Dalva', tel: '502941289' },
    { id: 7, name: 'Neide', tel: '502999480' }
  ];

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder,
              private modalService: BsModalService) {
    this.criarFormulario();
  }


  ngOnInit(): void {
  }

  criarFormulario() {
    this.alunoForm = this.fb.group({
      name: ['', Validators.required],
      tel: ['', Validators.required]
    });
  }

  alunoSelect(aluno: Aluno) {
    this.alunoSelected = aluno;
    this.alunoForm.patchValue(aluno);
  };

  alunoSubmit() {
    console.log(this.alunoForm.value);
  }

  close() {
    this.alunoSelected = null;
  }


}
