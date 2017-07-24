import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Ironhack Photo Album';
  photos: Array<Object> = [
    {
      src: '../assets/mad.JPG',
      name: 'Madrid'
    },
    {
      src: '../assets/bcn.JPG',
      name: 'Barcelona'
    },
    {
      src: '../assets/mia.JPG',
      name: 'Miami'
    }
  ]
}
