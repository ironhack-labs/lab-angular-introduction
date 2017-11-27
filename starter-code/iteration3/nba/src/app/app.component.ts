import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NBA';

  championships = [
    {
      year: '2015-16',
      name: 'Cleveland Cavaliers',
      url: 'http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/cle.png',
      bestPlayers: ['Lebron James', 'Kyrie Irving', 'Kevin Love','JR Smith','Anderson Varejao']
    },
    {
      year: '2014-15',
      name: 'Golden State Warriors',
      url: 'http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/gsw.png',
      bestPlayers: ['Stephen Curry','Klay Thompson', 'Draymong Green', 'Andrew Bogut', 'Gestus Ezeli']
    },
    {
      year: '2013-14',
      name: 'San Antonio Spurs',
      url: 'http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/sas.png',
      bestPlayers: ['Tim Duncan','Toby Parker','Manu Ginobili','Kawhi Leonard','Tiago Splitter']
    }
  ];
}
