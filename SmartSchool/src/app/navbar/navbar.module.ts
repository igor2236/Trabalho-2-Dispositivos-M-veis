import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppRoutingModule } from '../app-routing.module';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';





@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BsDropdownModule,
    AppRoutingModule,
    NgxNavbarModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
