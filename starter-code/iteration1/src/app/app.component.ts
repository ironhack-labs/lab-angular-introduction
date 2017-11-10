import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DBZ Photo Album';

  images: Array<object> = [
    {
      source:'Goku.png',
      description: "Goku"
    },
    {
      source: 'Gohan.png',
      description: "Gohan"
    },
    {
      source: 'Vegeta.png',
      description: "Vegeta"
    }
  ];
}
