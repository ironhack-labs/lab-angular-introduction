import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  championships= [{
    year: '2017-18',
    champion: 'Golden State Warriors',
    image: '../assets/images/200px-Golden_State_Warriors_logo.svg.png',
    bestPlayers: [ 'Stephen Curry', 'Kevin Durant', 'Klay Thompson', 'J.R. Smith', 'Draymond Green' ]
  }, {
    year: '2016-17',
    champion: 'Golden State Warriors',
    image: '../assets/images/200px-Golden_State_Warriors_logo.svg.png',
    bestPlayers: [ 'Stephen Curry', 'Kevin Durant', 'Klay Thompson', 'J.R. Smith', 'Draymond Green' ]
  }, {
    year: '2015-16',
    champion: 'Cleveland Cavaliers',
    image: '../assets/images/100px-Cleveland_Cavaliers_logo.svg.png',
    bestPlayers: [ 'Lebron James', 'Kyrie Irving', 'Kevin Love', 'J. R. Smith', 'Anderson Varejao' ]
  }];
}
