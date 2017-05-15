import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'My Photo Album!';
  image1 = {
    path: '/assets/newyork.jpg',
    title: "New York Skyline"
  }
  image2 = {
    path: '/assets/paris.jpg',
    title: "Paris Skylime"
  }
  image3 = {
    path: '/assets/tokyo.jpg',
    title: "Tokyo Skyline"
  }
}
