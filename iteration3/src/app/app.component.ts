import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  championships: Array<Object> = [{
    year: "2015-16",
    champion: "Cleveland Cavaliers",
    champion_url: "http://a4.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnba%2F500%2Fcle.png",
    best_players: ["Lebron James", "Kyrie Irving", "Kevin Love", "J.R. Smith", "Anderson Varejao"]
  }, {
    year: "2014-15",
    champion: "Golden State Warriors",
    champion_url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/838px-Golden_State_Warriors_logo.svg.png",
    best_players: ["Stephen Curry", "Klay Thompson", "Draymong Green", "Andrew Bogut", "Gestus Ezeli"]
  }, {
    year: "2013-14",
    champion: "San Antonio Spurs",
    champion_url: "http://content.sportslogos.net/logos/6/233/full/827.png",
    best_players: ["Tim Duncan", "Tony Parker", "Manu Ginóbili", "Kawhi Leonard", "Tiago Splitter"]
  }]
}
