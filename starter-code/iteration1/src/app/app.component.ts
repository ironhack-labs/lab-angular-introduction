import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Welcome to Francis\' Photo Album!';
  // Directions say Array is not needed, but this is more optimal. Thanks Sandra!
  photos: Array<Object> = [
    {
      url: '../assets/images/burger.jpg',
      description: 'Burgers for the Boys'
    }, {
      url: '../assets/images/pizza.jpg',
      description: 'Pizzaaaaaaaaaa'
    }, {
      url: '../assets/images/pancakes.jpg',
      description: 'Pancakes > Waffles'
    }
  ]
}
