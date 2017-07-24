import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nba-champions',
  templateUrl: './nba-champions.component.html',
  styleUrls: ['./nba-champions.component.css']
})
export class NbaChampionsComponent implements OnInit {

  championships: Array<Object> = [];

  constructor() { }

  ngOnInit() {
    this.championships = [
      {
        name: 'Cleveland Cavaliers',
        year: '2015-16',
        champion_url: '../assets/images/cavs.png',
        best_players: ['Lebron James', 'Kerie Irving', 'Kevin Love', 'J.R. Smith', 'John Varejao']
      },
      {
        name: 'Golden State Warriors',
        year: '2014-15',
        champion_url:'../assets/images/warriors.png',
        best_players: ['Stephen Curry', 'Klan Anderson', 'Peter Ezeili', 'Andrei Bogout', 'John Green']
      },
      {
        name: 'San Antonio Spurs',
        year: '2016-17',
        champion_url: '../assets/images/spurs.png',
        best_players: ['Tim Duncan', 'Manu Ginobili', 'Tony Parker', 'Tiago Splitter', 'John Varejao']

      }

    ];
  }

}
