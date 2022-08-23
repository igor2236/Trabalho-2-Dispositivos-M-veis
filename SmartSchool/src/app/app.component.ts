import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'SmartSchool';
  menefrego = 'Wel come maguila?';
  canClick = false;
  message = 'buuuuuuuu';

  sayMessage() {
    if (this.message != this.menefrego) {
      this.menefrego == this.message
    }
  }
}
