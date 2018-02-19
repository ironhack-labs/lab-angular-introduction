import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  championship = [{
  year: '2015-16',
  champion: "Cleveland Cavaliers",
  champion_url: "http://handicappershideaway.com/wp-content/uploads/2015/04/Cleveland-Cavaliers-Feature.jpg",
  best_players:["a1", "a2", "a3", "a4"],
},{
year: '2014-15',
champion: "Golden State Warriors",
champion_url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/1200px-Golden_State_Warriors_logo.svg.png",
best_players: ["b1", "b2", "b3", "b4"],
},{
year: '2013-14',
champion: "San Antonio Spurs",
champion_url: "http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/sas.png",
best_players: ["c1", "c2", "c3", "c4"],
},
  ]}
