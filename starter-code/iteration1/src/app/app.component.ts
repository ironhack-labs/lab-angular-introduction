import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'My Album!';
  photos: { src: string, description: string}[] = [
    {
      src: 'https://image.freepik.com/free-photo/horizon-texture-aged-scene-weather_1088-693.jpg',
      description: 'Photo 1'
    },
    {
      src: 'https://www.google.com/photos/about/static/images/charlie-1.png',
      description: 'Photo 2'
    },
    {
      src: 'https://www.picmonkey.com/_/static/images/wall/evergreen/samples/default.947e7aff0713.jpg',
      description: 'Photo 3'
    }
  ]
}
