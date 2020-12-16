import { Component } from '@angular/core';

@Component({
  selector: 'app-studio-ghibli-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name:string = 'Paul';

  constructor () {
    this.changeName("Scrappy")
  }

  changeName(name:string):void {
    this.name = name;
  }
}
