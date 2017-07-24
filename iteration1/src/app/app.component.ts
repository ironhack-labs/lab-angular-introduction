import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Ironhack Photo Album';

  photos: object[] = [
    {
      id: 1,
      name: 'Over Barcelona',
      link: '../assets/1.jpg'
    }, {
      id: 2,
      name: 'Hard at work',
      link: '../assets/2.jpg'
    }, {
      id: 3,
      name: 'Pair programming',
      link: '../assets/3.jpg'
    }
  ];
}

