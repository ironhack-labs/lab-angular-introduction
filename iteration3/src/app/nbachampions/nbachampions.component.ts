import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nbachampions',
  templateUrl: './nbachampions.component.html',
  styleUrls: ['./nbachampions.component.css']
})
export class NBAchampionsComponent implements OnInit {
  champions: Array<Object> = [
    {
      year: '2015-16',
      champion: 'Cleveland Cavaliers',
      champion_url: 'http://cdn.bleacherreport.net/images/team_logos/328x328/cleveland_cavaliers.png',
      best_players: ['Lebron James', 'Kyrie Irving', 'Kevin Love', 'J.R. Smith', 'Anderson Varejao']
    },
    {
      year: '2014-15',
      champion: 'Golden State Warriors',
      champion_url: 'http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/gsw.png',
      best_players: ['Stephen curry', 'Klay thompson', 'draymong green', 'Andrew Bogut', 'Gestus Ezeli']
    },
    {
      year: '2013-14',
      champion: 'San Antonio Spurs',
      champion_url: 'http://kiaenzona.com/wp-content/uploads/2016/10/SPURS.png',
      best_players: ['Tim Duncan', 'Tony parker', 'Manu Ginobili', 'Klawi leonard', 'Tiago Splitter']
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
