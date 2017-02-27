import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  championships: Array<any>=[{
    year: "2016",
    winningTeam: "Cleveland Calvaliers",
    url: "http://a4.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnba%2F500%2Fcle.png",
    bestPlayers: ["LeBron James", "Stephen Curry"]
  }, {
    year: "2015",
    winningTeam: "Golden State Warriors",
    url: "http://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/warriors/images/logo-gsw-primary-yellow.svg",
    bestPlayers: ["LeBron James", "Stephen Curry"]
  }]
}
