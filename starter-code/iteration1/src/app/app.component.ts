import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  cities = [
    {
      imageUrl: 'assets/img/1.png',
      cityName: 'Madrid'
    },
    {
      imageUrl: 'assets/img/2.png',
      cityName: 'Barcelona'
    },
    {
      imageUrl: 'assets/img/3.png',
      cityName: 'Berlin'
    }
  ];
}
