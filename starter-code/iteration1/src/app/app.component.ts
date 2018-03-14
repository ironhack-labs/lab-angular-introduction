import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AlbumComponent {
  album: Array<Object> = [
    {
      id: 1,
      description: 'Ironhack Barcelona ',
      image: 'http://lorempixel.com/200/200'
    }, {
      id: 2,
      description: 'Ironhack Madrid',
      image: 'http://lorempixel.com/200/200'
    }, {
      id: 3,
      description: 'Ironhack Miami',
      image: 'http://lorempixel.com/200/200'
    }
  ];
}
