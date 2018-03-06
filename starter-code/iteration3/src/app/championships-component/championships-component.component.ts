import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championships-component',
  templateUrl: './championships-component.component.html',
  styleUrls: ['./championships-component.component.css']
})
export class ChampionshipsComponentComponent implements OnInit {

  championships: Array<{ year: string, champion: string, championUrl: string, players: Array<string> }> = [
    {
      year: '2016-17',
      champion: 'Golden State Warriors',
      championUrl: 'http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/gsw.png',
      players: ['Stephen Curry', 'Kevin Durant', 'Draymond Green', 'Andre Iguodala', 'Klay Thompson']
    },
    {
      year: '2015-16',
      champion: 'Cleveland Cavaliers',
      championUrl: 'http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/cle.png',
      players: ['Kyrie Irving', 'Kevin Love', 'Lebron James', 'Mo Williams', 'James Jones']
    },
    {
      year: '2014-15',
      champion: 'Golden State Warriors',
      championUrl: 'http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/gsw.png',
      players: ['Stephen Curry', 'Andrew Bogut', 'Draymond Green', 'Andre Iguodala', 'Leandro Barbosa']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
