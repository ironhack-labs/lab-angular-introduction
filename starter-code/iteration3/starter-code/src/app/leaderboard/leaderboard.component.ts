import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blah-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  champions: Champion[] = [
    
    new Champion(
      "2014",
      "Cleveland Cavaliers",
      "https://upload.wikimedia.org/wikipedia/fr/0/06/Cavs_de_Cleveland_logo_2017.png",
      [ "Batardo", "Canardo", "Vomito" ]
    ),

    new Champion(
      "2015",
      "Golden State Warriors",
      "https://upload.wikimedia.org/wikipedia/fr/0/06/Cavs_de_Cleveland_logo_2017.png",
      [ "Batardo", "Canardo", "Vomito" ]
    ),

    new Champion(
      "2016",
      "San Antonio Spurs",
      "https://upload.wikimedia.org/wikipedia/fr/0/06/Cavs_de_Cleveland_logo_2017.png",
      [ "Batardo", "Canardo", "Vomito" ]
    )
  ]
  
  constructor() { }

  ngOnInit() {
  }

}

class Champion {
  constructor(
    public year: string,
    public name: string,
    public image: string,
    public players: string[]
  ) {}
}