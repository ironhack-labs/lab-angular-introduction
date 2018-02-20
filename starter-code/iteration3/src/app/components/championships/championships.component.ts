import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championships',
  templateUrl: './championships.component.html',
  styleUrls: ['./championships.component.css']
})
export class ChampionshipsComponent implements OnInit {
  championships: Array<{}> = [{
    year: '2013 - 14',
    champion: 'San Antonio Spurs',
    championUrl: 'san-antonio.jpg',
    bestPlayers: ['Tim Duncan', 'Tony Parker', 'Manu Ginóbili', 'Kahwi Leonard', 'Tiago Splitter']
  },
  {
    year: '2014 - 15',
    champion: 'Golden State Warriors',
    championUrl: 'gsw.jpg',
    bestPlayers: ['Stephen Curry', 'Klay Thomspon', 'Draymong Green', 'Andrew Bogut', 'Gestus Ezeli']
  },
  {
    year: '2015 - 16',
    champion: 'Cleveland Cavaliers',
    championUrl: 'cleveland.jpg',
    bestPlayers: ['Lebron James', 'Kyrie Irving', 'Kevin Love', 'J.R. Smith', 'Anderson Varejao']
  },
  ]
  constructor() { }

  ngOnInit() {
  }

}
