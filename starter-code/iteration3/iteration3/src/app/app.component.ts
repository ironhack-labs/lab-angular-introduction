import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  championships: Array<Object> = [
    {
      year: 2018,
      champion:  'Golden State Warriors',
      championUrl: 'http://wwwcdn.howdesign.com/wp-content/uploads/LogoPrimary_300x329.jpg',
      bestPlayers: ['Stephen Curry', 'Stephen Curry', 'Stephen Curry']
    }, {
      year:  2017,
      champion : 'Cleveland Cavaliers',
      championUrl: 'https://upload.wikimedia.org/wikipedia/fr/0/06/Cavs_de_Cleveland_logo_2017.png',
      bestPlayers: ['Lebron James', 'Lebron James', 'Lebron James']
    }
  ];

}
