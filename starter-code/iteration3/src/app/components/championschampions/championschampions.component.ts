import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championschampions',
  templateUrl: './championschampions.component.html',
  styleUrls: ['./championschampions.component.css']
})
export class ChampionschampionsComponent implements OnInit {
  championTeam: Array<Object> = [{
    year: '2015-16',
    champion: 'Cleveland Cavaliers',
    image: 'http://falso9sports.com/wp-content/uploads/cle.png',
    players: ["Lebron James", "Kyrie Irving", "Kevin Love", "J.R. Smith", "Anderson Varejao"]
  },
  {
    year: '2014-15',
    champion: 'Golden State Warriors',
    image: 'http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/gsw.png',
    players: ["Stephen Curry", "Klay Thompson", "Draymong Green", "Andrew Bogut", "Gestus Ezeli"]
  },
  {
    year: '2013-14',
    champion: 'San Antonio Spurs',
    image: 'http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/sas.png',
    players: ["Tim Duncan", "Tony Parker", "Manu Ginóbili", "Kawhi Leonard", "Tiago Slitter"]
  }]

  constructor() { }

  ngOnInit() {
  }

}
