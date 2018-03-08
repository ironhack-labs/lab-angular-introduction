import { Component } from '@angular/core';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent {

  champions: Array<object> = [{
    year: '2015-16',
    name: 'Cleveland Cavaliers',
    championURL: 'http://falso9sports.com/13/07/2015/la-pelicula-cleveland-cavaliers-su-protagonista-lebron-james/',
    bestPlayers: ['Lebron James', 'Kyrie Irving', 'J. R. Smith', 'Tristan Thompson', 'Kevin Love']
  },
  {
    year: '2014-15',
    name: 'Golden State Warriors',
    championURL: 'https://www.pinterest.es/pin/478437160396078066/',
    bestPlayers: ['Stephen Curry', 'Klay Thompson', 'Draymong Green', 'Andrew Bogut', 'Gestus Ezeli']
  },
  {
    year: '2013-14',
    name: 'San Antonio Spurs',
    championURL: 'https://goodlogo.com/extended.info/san-antonio-spurs-logo-3932',
    bestPlayers: ['Tim Duncan', 'Tony Parker', 'Manu Ginóbili', 'Kawhi Leonard', 'Tiago Splitter']
  }]

}
