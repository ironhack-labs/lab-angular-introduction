import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to NBA Champions!';
  team = [{
    year: '2015-2016',
    champion: 'Cleveland Cavaliers',
    championurl: 'http://as01.epimg.net/img/especiales/baloncesto/nba/escudos/cleveland_cavaliers.svg'
  },{
    year: '2014-2015',
    champion: 'Golden State Warriors',
    championurl: 'http://as01.epimg.net/img/especiales/baloncesto/nba/escudos/golden_state_warriors.svg'
  },{
    year: '2013-2014',
    champion: 'San Antonio Spurs',
    championurl: 'http://as01.epimg.net/img/especiales/baloncesto/nba/escudos/san_antonio_spurs.svg'
  }]
players = [{
  player1: 'Lebron James',
  player2: 'Kyrie Irving',
  player3: 'Kevin Love',
  player4: 'J.R. Smith',
  player5: 'Anderson Varejao'
},{
  player1: 'Stephen Curry',
  player2: 'Klay Thompson',
  player3: 'Draymong Green',
  player4: 'Andrew Bogut',
  player5: 'Gestus Ezeli'
},{
  player1: 'Tim Duncan',
  player2: 'Tony Parker',
  player3: 'Manu Ginóbili',
  player4: 'kawhi Leonard',
  player5: 'Tiago Splitter'
}]
}
