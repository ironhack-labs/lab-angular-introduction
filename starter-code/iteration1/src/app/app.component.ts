import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  photos: Array<Object> = [
    {
      source: 'Airbnb.jpg',
      desc: ' A logo of Airbnb'
    },
    {
      source: 'sea.png',
      desc: 'A little sea'
    },
    {
      source: 'sheep.jpg',
      desc: 'this is a sheep'
    }
  ];
}
