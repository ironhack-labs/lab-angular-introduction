import { Component } from '@angular/core';

@Component({
  selector: 'app-iteration-3',
  templateUrl: './iteration-3.component.html',
  styleUrls: ['./iteration-3.component.css']
})
export class Iteration3Component{

    champions: Array<Object> = [
      {
        year: "2015-16",
        team_name: "Cleveland",
        champion_url: 'assets/nba-logo.jpg',
        best_players: ["Lebron", "Irving", "JRSmith"],
      }, {
        year: "2014-15",
        team_name: "GoldenState",
        champion_url: 'assets/nba-logo.jpg',
        best_players: ["Curry", "Thompson", "Green"],
      }, {
        year: "2013-14",
        team_name: "SanAntonio",
        champion_url: 'assets/nba-logo.jpg',
        best_players: ["Duncan", "Parker", "Leonard"],
      }
    ];




}
