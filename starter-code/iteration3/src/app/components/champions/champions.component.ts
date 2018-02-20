import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {
  champions = [
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
    }
  ];
  constructor() {}

  ngOnInit() {}
}
