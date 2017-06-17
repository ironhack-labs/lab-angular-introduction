import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championships',
  templateUrl: './championships.component.html',
  styleUrls: ['./championships.component.css']
})
export class ChampionshipsComponent implements OnInit {
  championships: Object[] = [
    {
      year: `2015 - 2016`,
      champion: 'Cleveland Cavaliers',
      champion_url: `http://a4.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnba%2F500%2Fcle.png`,
      best_players: [ 'Lebron James', 'Kyrie Irving', 'Kevin Love', 'J.R. Smith', 'Anderson Varejao' ],
    },
    {
      year: `2014 - 2015`,
      champion: 'Golden State Warriors',
      champion_url: `http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/gsw.png`,
      best_players: [ 'Stephen Curry', 'Klay Thompson', 'Draymong Green', 'Andrew Bogut', 'Gestus Ezeli' ],
    },
    {
      year: `2013 - 2014`,
      champion: 'San Antonio Spurs',
      champion_url: 'http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/sas.png',
      best_players: [ 'Tim Duncan', 'Tony Parker', 'Manu Ginobili', 'Kawhi Leonard', 'Tiago Splitter' ],
    }
    ];

  constructor() { }

  ngOnInit() {
  }

}
