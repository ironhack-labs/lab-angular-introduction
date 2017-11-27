import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Photo Album!';
  content = [
    {
      url: 'http://s.newsweek.com/sites/www.newsweek.com/files/2017/10/09/10-9-rick-morty-mcdonalds.jpg',
      name: 'Rick Sanchez: Wubalubadubdub!!',
    }, {
      url: 'https://cdn.pastemagazine.com/www/articles/morty%20main.jpg',
      name: 'Morty Smith: I shat my pants!'
    }, {
      url: 'https://nerdist.com/wp-content/uploads/2016/09/Mr-Meeseeks.jpg',
      name: 'Mr Meeseeks I/\'/m Mr. Meeseeks! Look at me!'
    }
  ];
}
