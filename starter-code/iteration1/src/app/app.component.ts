import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'Our campus';
  photos: Array<Object> = [
    {
      id: 'https://www.google.com/photos/about/static/images/maggie-2.png',
      text: 'Ironhack Madrid',

    }, {
      id: 'https://www.google.com/photos/about/static/images/maggie-2.png',
      text: 'Ironhack Barcelona',

    }, {
      id: 'https://www.google.com/photos/about/static/images/maggie-2.png',
      text: 'Ironhack Miami',

    }
  ];
}
