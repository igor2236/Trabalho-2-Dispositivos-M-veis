import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NovoModelModule } from './novo-model/novo-model.module';
import { BlablaModelModule } from './blabla-model/blabla-model.module';
import { BiruleiboModule } from './biruleibo/biruleibo.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NovoModelModule,
    BlablaModelModule,
    BiruleiboModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
