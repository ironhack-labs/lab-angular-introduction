import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  NBAChampions = [
    {
      year: '2015-16',
      champion: 'Cleveland Cavaliers',
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
      year: '2014-15',
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
      year: '2013-14',
      champion: 'San Antonio Spurs',
      championUrl: 'http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/sas.png',
      bestPlayers: [
        'Tim Duncan',
        'Tony Parker',
        'Manu Ginobili',
        'Kawhi Leonard',
        'Tiago Splitter'
      ]
    }
  ];
}
