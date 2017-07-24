import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NBA Champions';
  champions: Array<Object> = [
    {
      year: '2017',
      champions: 'Golden State Warriors',
      champion_url: 'http://i.cdn.turner.com/nba/nba/teamsites/images/legacy/warriors/LogoPrimary_300x329.jpg',
      best_players: [
        'Steph Curry',
        'Klay Thompson',
        'Kevin Durant',
        'Draymond Green',
        'Zaza Pachulia'
      ]
    },
    {
      year: '2008',
      champions: 'Boston Celtics',
      champion_url: 'http://i.cdn.turner.com/nba/nba/teamsites/images/legacy/celtics/CelticsLogo_History.gif',
      best_players: [
        'Rajon Rondo',
        'Ray Allen',
        'Paul Pierce',
        'Kevin Garnett',
        'Kendrick Perkins'
      ]
    },
    {
      year: '1974',
      champions: 'Milwaukee Bucks',
      champion_url: 'http://www.underconsideration.com/brandnew/archives/milwaukee_bucks_logo_primary_detail.png',
      best_players: [
        'Oscar Robertson',
        'Jon McGlocklin',
        'Bob Dandridge',
        'Lucius Allen',
        'Kareem Abdul-Jabbar'
      ]
    }
  ]
}
