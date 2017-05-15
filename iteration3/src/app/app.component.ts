import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  champions: Array<any> = [
      {year: "2015-16", champion: "Cleveland Cavaliers", champion_url:"/assets/1.png", best_players:["CC Player 1", "CC Player 2", "CC Player 3"]},
      {year: "2014-15", champion: "Golden State Warriors", champion_url:"/assets/2.png", best_players:["GSW Player 1", "GSW Player 2", "GSW Player 3"]},
      {year: "2013-14", champion: "San Antonio Spurs", champion_url:"/assets/3.png", best_players:["SAS Player 1", "SAS Player 2", "SAS Player 3"]}
  ];
}
