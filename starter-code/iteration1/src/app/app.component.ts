import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app works!';
  elements: Array<Object> = [
    {
      id: 1,
      src: 'https://media.vandal.net/i/640x360/11-2017/2017111135917_1.jpg',
      name: 'Bulma'
    }, {
      id: 2,
      src: 'https://media.vandal.net/i/640x360/11-2017/2017111135917_1.jpg',
      name: 'R16'
    }, {
      id: 3,
      src: 'https://media.vandal.net/i/640x360/11-2017/2017111135917_1.jpg',
      name: 'Chi-Chi'
    }
  ];
}



