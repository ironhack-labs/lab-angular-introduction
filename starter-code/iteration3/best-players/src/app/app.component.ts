import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  championsShip: Object[];

  constructor () {
    this.championsShip = [
      {
        year: "2015-16",
        champion: "Cleveland Cavaliers",
        championUrl: "http://lorempixel.com/200/200/sports/1",
        bestPlayers: [
          "Lebron James",
          "Kyrie Irving",
          "Kevin Love",
          "J.R. Smith",
          "Anderson Varejao"
        ]
      },
      {
        year: "2014-15",
        champion: "Golden State Warriors",
        championUrl: "http://lorempixel.com/200/200/sports/2",
        bestPlayers: [
          "Stephen Curry",
          "Klay Thompson",
          "Draymong Green",
          "Andrew Bogut",
          "Gestus Ezeli"
        ]
      },
      {
        year: "2013-14",
        champion: "Sant Antonio Spurs",
        championUrl: "http://lorempixel.com/200/200/sports/3",
        bestPlayers: [
          "tim Duncan",
          "Tony Parker",
          "Manu Ginóbili",
          "Kawhi Leonard",
          "Tiago Splitter"
        ]
      }
    ]
  }
}
