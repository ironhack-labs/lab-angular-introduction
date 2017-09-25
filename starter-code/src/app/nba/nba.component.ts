import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nba',
  templateUrl: './nba.component.html',
  styleUrls: ['./nba.component.css']
})
export class NbaComponent implements OnInit {
  championships: Array<Object> = [
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
      best_players: ['Stephen Curry', 'Klay Thompson', 'Draymong Green', 'Andrew Bogut', 'Gestus Ezeli']
    },
    {
      year: '2013-14',
      champion: 'San Antonio Spurs',
      champion_url: 'http://cdn.bleacherreport.net/images/team_logos/328x328/san_antonio_spurs.png',
      best_players: ['Tim Duncan', 'Tony Parker', 'Manu Ginóbili', 'Kawhi Leonard', 'Tiago Splitter']
    }
  ];



  constructor() { }

  ngOnInit() {
  }

}
