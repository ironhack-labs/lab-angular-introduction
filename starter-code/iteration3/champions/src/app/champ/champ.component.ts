import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champ',
  templateUrl: './champ.component.html',
  styleUrls: ['./champ.component.css']
})
export class ChampComponent implements OnInit {
  champions: Array<any> = [
    {
      champion: 'Cleveland Cavaliers',
      year: '2015-16',
      championUrl: 'http://as01.epimg.net/img/especiales/baloncesto/nba/escudos/cleveland_cavaliers.svg',
      bestPlayers: ['Lebron', 'Kyrie', 'Kevin', 'J.R. Smith', 'Anderson']
    },
    {
      champion: 'Golden State Warriors',
      year: '2014-15',
      championUrl: 'http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/gsw.png',
      bestPlayers: ['Stephen Curry', 'Klay', 'Draymong', 'Andrew', 'Gestus']
    },
    {
      champion: 'San Antonio Spurs',
      year: '2013-14',
      championUrl: 'http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/sas.png',
      bestPlayers: ['Tim', 'Tony', 'Manu', 'Kawhi', 'Tiago']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
