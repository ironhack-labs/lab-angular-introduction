import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  images: Array<Object> = [
    {
      title: 'Madrid',
      src: './assets/images/angular.jpg'
    },
    {
      title: 'Barcelona',
      src: './assets/images/angular.jpg'
    },
    {
      title: 'Miami',
      src: './assets/images/angular.jpg'
    }
  ]
}
