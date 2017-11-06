import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Iteration 1';
  photos: Array<object> = [
    {
      source:'img1.jpeg',
      description: "Cat"
    },
    {
      source: 'img2.jpg',
      description: "Ironhackers"
    },
    {
      source: 'img3.jpg',
      description: "Class"
    }
  ];

}
