import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {
  champions = [
    {
     year: "2015-16",
     name: "Cleveland Cavaliers",
     champion_url: "/assets/cava.jpg",
     best_players: ['Lebron James', 'Kyrie Irving', 'Kevin Love', 'J.R. Smith', 'Anderson Varejao']
    },
    {
      year: "2014-15",
      name: "Golden State Warrios",
      champion_url: "/assets/golden.png",
      best_players: ['Stephen Curry', 'Klay Thompson', 'Draymong Green', 'Andrew Bogut', 'Gestus Ezeli']
    },
    {
      year: "2013-14",
      name: "San Antonio Spurs",
      champion_url: "/assets/spurs.png",
      best_players: ['Tim Duncan', 'Tony Parker', 'Manu Ginobili', 'Kawhi Leonard', 'Tiago Splitter']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
