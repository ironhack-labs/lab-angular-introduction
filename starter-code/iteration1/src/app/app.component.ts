import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  image: Array<object >;

  constructor(){
    this.image = [{
        src: '../assets/barcelona.jpg',
        name: 'Barcelona'
      },
      {
        src: '../assets/madrid.jpg',
        name: 'Madrid'
      },
      {
        src: '../assets/miami.jpg',
        name: 'Miami'
      }
    ]
  }
}
