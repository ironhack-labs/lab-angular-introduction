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
    champion_url: "assets/cavaliers.jpg",
    best_players:["Player1", "Player2", "Player3", "Player4"]
  },{
    year: '2014-15',
    champion: "Golden State Warriors",
    champion_url: "assets/golden-state.jpg",
    best_players: ["2Team1", "2Team2", "2Team3", "2Team4"]
  },{
    year: '2013-14',
    champion: "San Antonio Spurs",
    champion_url: "assets/san-antonio.jpg",
    best_players: ["3Team1", "3Team2", "3Team3", "3Team4"]
    }
]}