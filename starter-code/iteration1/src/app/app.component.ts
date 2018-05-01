import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Photos';
  photos: Array<Object> = [
    {
      id: 1,
      title: 'Homer',
      url: '../assets/homer.png'
    }, {
      id: 2,
      title: 'Marge',
      url: '../assets/marge.png'
    }, {
      id: 3,
      title: 'Bart',
      url: '../assets/bart.png'
    }
  ];
}
