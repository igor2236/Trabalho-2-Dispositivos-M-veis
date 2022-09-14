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
    TituloModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
