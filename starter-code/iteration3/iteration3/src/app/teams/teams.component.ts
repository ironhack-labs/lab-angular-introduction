import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: Array<any> = [
    {
      champion: 'Cleveland Cavaliers',
      year: '2015-16',
      championUrl: 'http://as01.epimg.net/img/especiales/baloncesto/nba/escudos/cleveland_cavaliers.svg',
      bestPlayers: ['Lebron', 'Kyrie', 'Kevin', 'Smith', 'Anderson']
    },
    {
      champion: 'Golden State Warriors',
      year: '2014-15',
      championUrl: 'http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/gsw.png',
      bestPlayers: ['Stephen', 'Klay', 'Draymong', 'Andrew', 'Gestus']
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
