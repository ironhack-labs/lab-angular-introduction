import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'app works!';
  photos: Array<Photo> = [
    new Photo(
      'Jaleous',
      'https://media.giphy.com/media/lL2fM6RWgf9ReUJLwV/giphy.gif'
    ),
    new Photo(
      "Kate's hairs",
      'https://media.giphy.com/media/EKvQpJrlt9lTO/giphy.gif'
    ),
    new Photo(
      'Idiot Bachelor',
      'https://media.giphy.com/media/3dizFGQ3gAdd29AlkR/giphy.gif'
    ),
  ];
  constructor() {}
}
class Photo {
  constructor(public name: string, public img: string) {}
}
