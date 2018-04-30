import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  teams: Array<Object> = [
    {
      id: 1,
      year: '2015-16',
      champion: 'Cleveland Cavaliers',
      championUrl: 'https://misc-rnnukmcdu8mee.netdna-ssl.com/san/logos/1fe763ea4bef7a13d7d43b0d9e177ca4-84bb6c12045e7fc7a67925e4a4d41f2c.png',
      bestPlayers: ['Lebron James', 'Kyrie Irving', 'Kevin Love', 'J.R. Smith', 'Anderson Varejao']
    },
    {
      id: 2,
      year: '2014-15',
      champion: 'Golden State Warriors',
      championUrl: 'http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/gsw.png',
      bestPlayers: ['Stephen Curry', 'Klay Thompson', 'Draymong Green', 'Andrew Bogut', 'Gestus Ezeli']
    },
    {
      id: 3,
      year: '2013-14',
      champion: 'San Antonio Spurs',
      championUrl: 'http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/sas.png',
      bestPlayers: ['Tim Duncan', 'Tony Parker', 'Manu Ginóbili', 'Kawhi Leonard', 'Tiago Splitter']
    }
  ]
}
