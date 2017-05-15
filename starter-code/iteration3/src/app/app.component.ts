import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template:
  `
  <div class="container">
  <div class="team" *ngFor="let game of championship; let i = index">
    <h2>{{game.year}}</h2>
    <h3>{{game.team}}</h3>
    <div class="imgholder"> <img src={{game.url}} alt=""></div>
    <strong>Best Players</strong>
    <ul>
      <li *ngFor="let player of game.bestplayers; let x = index">
        {{player}}
      </li>
    </ul>
    </div>
  </div>

  `
})
export class AppComponent {
  championship = [
    {
      year: "2015-2016",
      team: "Cleveland Cavaliers",
      url: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Cleveland_Cavaliers_2010.svg',
      bestplayers: ["Lebron James", "Kyrie Irving","Kevin Love","J.R. Smith","Anderson Varejao"]
    },
    {
      year: "2014-2015",
      team: "Golden State Warriors",
      url: 'https://upload.wikimedia.org/wikipedia/en/0/01/Golden_State_Warriors_logo.svg',
      bestplayers: ["Stephen Curry", "Klay Thompson","Draymong Green","Andrew Bogut","Gestus Ezeli"]
    },
    {
      year: "2013-2014",
      team: "San Antonio Spurs",
      url: 'http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/sas.png',
      bestplayers: ["Tim Duncan", "Tony Parker","Manu Ginobili","Kawhi Leonard","Tiago Splitter"]
    }
  ]
}
