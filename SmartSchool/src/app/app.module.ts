import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunosModule } from './alunos/alunos.module';
import { ProfessoresModule } from './professores/professores.module';
import { DisciplinasModule } from './disciplinas/disciplinas.module';
import { PerfilModule } from './perfil/perfil.module';
import { HomeModule } from './home/home.module';
import { NavbarModule } from './navbar/navbar.module';
import { TituloModule } from './titulo/titulo.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlunosModule,
    ProfessoresModule,
    DisciplinasModule,
    PerfilModule,
    HomeModule,
    NavbarModule,
    TituloModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    CollapseModule,
    NgxNavbarModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
