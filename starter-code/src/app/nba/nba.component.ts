import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nba',
  templateUrl: './nba.component.html',
  styleUrls: ['./nba.component.css']
})
export class NbaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  champions: Object[] = [
    {
      year: '2015-2016',
      champion: 'Cleveland Caveliers',
      championUrl: 'http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/cle.png',
      bestPlayers: [
        'Lebron James',
        'Kyrie Irving',
        'Kevin Love',
        'J.R. Smith',
        'Anderson Varejao'
      ]
    },
    {
      year: '2014-2015',
      champion: 'Golden State Warriors',
      championUrl: 'http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/gsw.png',
      bestPlayers: [
        'Stephen Curry',
        'Klay Thompson',
        'Draymond Green',
        'Andrew Bogut',
        'Gestus Ezeli'
      ]
    },
    {
      year: '2013-2014',
      champion: 'San Antonio Spurs',
      championUrl: 'http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/sas.png',
      bestPlayers: [
        'Tim Duncan',
        'Tony Parker',
        'Manu Ginobli',
        'Kawai Leonard',
        'Tiago Splitter'
      ]
    },
  ]

}
