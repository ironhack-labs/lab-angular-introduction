import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() { }
  championships = [
    {
    year: '2015-1016',
    champion: 'Cleveland Cavaliers',
    imgUrl: 'https://piratasdelbasket.net/wp-content/uploads/2017/05/cleveland-cavaliers.jpg',
    bestPlayers: ['Lebron James', 'Kyrie Irving', 'Kevin Love', 'J.R. Smith', 'Anderson Varejao'] 

    },
    {
      year: '2016-1017',
      champion: 'Golden State Warriors',
      imgUrl: 'http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/gsw.png',
      bestPlayers: ['Stephen Curry', 'Klay Thompson', 'Draymong Green', 'Andrew Bogut', 'Gestus Ezeli'] 
  
    },
    {
      year: '2013-1014',
      champion: 'San Antonio Spurs',
      imgUrl: 'https://i2.wp.com/www.nbamaniacs.com/wp-content/uploads/2012/10/logo-spurs.jpg?fit=400%2C400&ssl=1',
      bestPlayers: ['Tim Duncan', 'Tony Parker', 'Manu Ginobili', 'Kawhi Leonard', 'Tiago Splitter'] 
  
    },
  ]
}
