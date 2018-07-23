import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championship',
  templateUrl: './championship.component.html',
  styleUrls: ['./championship.component.scss']
})
export class ChampionshipComponent implements OnInit {
  
  teams: Array<object> = [
    {
      year: "2017-18",
      champion: "Golden State Warriors",
      championUrl: "http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/gsw.png",
      bestPlayers: ["Jugador 1", "Jugador 2", "Jugador 3", "Jugador 4"]
    },
    {
      year: "2015-16",
      champion: "Cleveland Cavaliers",
      championUrl: "https://cbscleveland.files.wordpress.com/2014/12/cavslogo_770x433.jpg?w=770",
      bestPlayers: ["Jugador 1", "Jugador 2", "Jugador 3", "Jugador 4"]
    },
    {
      year: "2013-14",
      champion: "San Antonio Spurs",
      championUrl: "https://cdn.worldvectorlogo.com/logos/san-antonio-spurs-1.svg",
      bestPlayers: ["Jugador 1", "Jugador 2", "Jugador 3", "Jugador 4"]
    }
  ]


  constructor() { }

  ngOnInit() {
  }

}
