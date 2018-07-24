import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards: Array<Object> = [
    {
      year : '2015-2016',
      champion : 'Cleveland Cavaliers',
      championURL: 'https://vignette.wikia.nocookie.net/nba2k/images/8/8b/Cleveland_Cavaliers_Logo.png/revision/latest?cb=20120119223259',
      bestPlayers: ['Lebron James','Kyrie Irving','Kevin Love','J.R. Smith','Anderson Varejao']
    },
    {
      year: '2016-2017',
      champion: 'Golden State Warriors',
      championURL: 'http://wwwcdn.howdesign.com/wp-content/uploads/LogoPrimary_300x329.jpg',
      bestPlayers: ['Kevin Durant','Stephen Curry','Klay Thompson','Draymond Green','Andree Iguodala']
  },
    {
      year: '2017-2018',
      champion: 'Golden State Warriors',
      championURL: 'http://wwwcdn.howdesign.com/wp-content/uploads/LogoPrimary_300x329.jpg',
      bestPlayers: ['Kevin Durant','Stephen Curry','Klay Thompson','Draymond Green','Andree Iguodala']
  }
  ]
}
