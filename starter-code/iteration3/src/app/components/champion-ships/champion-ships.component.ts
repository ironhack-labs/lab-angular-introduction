import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champion-ships',
  templateUrl: './champion-ships.component.html',
  styleUrls: ['./champion-ships.component.css']
})
export class ChampionShipsComponent implements OnInit {
  championTeam: Array<Object> = [{
    year: "2015-16",
    image: "http://nbaadrian.webcindario.com/imagenes/logo.ico",
    champion: "Cleveland Cavaliers",
    bestPlayers: [
      "Lebron James","Kyrie Irving", "Kevin Love"
    ]
  },
  {
    year: "2014-15",
    image: "https://sportsfly.cbsistatic.com/fly-795/bundles/sportsmediacss/images/team-logos/nba/alt/GS.svg",    
    champion: "Golden State Warriors",
    bestPlayers:  [
      "Stephen Curry","Klay Thompson", "Draymon Green"
    ]
  },
  {
    year: "2013-14",
    image: "http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/sas.png",
    
    champion: "San Antonio Spurs",
    bestPlayers:  [
      "Tim Duncan","Tony Parker", "Manu Ginóbili"
    ]
  },
];

  constructor() { }

  ngOnInit() {
  }

}
