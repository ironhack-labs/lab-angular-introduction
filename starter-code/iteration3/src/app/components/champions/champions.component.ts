import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {
  champions: Array<{}> = [
    {
      year: '2015-16',
      name: 'Clevland Cavaliers',
      championUrl:
        'https://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/cavaliers/images/170531-global-logo.png',
      bestPlayers: [
        'Lebron James',
        'Kevin Irving',
        'Kevin Love',
        'J. R. Smith',
        'Anderson Varejao'
      ]
    },
    {
      year: '2014-15',
      name: 'Golden State Warriors',
      championUrl:
        'http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/gsw.png',
      bestPlayers: [
        'Stephen Curry',
        'Klay Thompson',
        'Draymong Green',
        'Andrew Bogut',
        'Gestus Ezeli'
      ]
    },
    {
      year: '2014-13',
      name: 'San Antonio Spurs',
      championUrl:
        'http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/sas.png',
      bestPlayers: [
        'Tim Duncan',
        'Tony Parker',
        'Manu Ginobili',
        'Kawhi Leonard',
        'Tiago Splitter'
      ]
    }
  ];
  constructor() {}

  ngOnInit() {}
}
