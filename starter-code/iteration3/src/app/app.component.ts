import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  champions: Array<Object> = [
    {
      year: "2014-15",
      champion: "Golden State Warriors",
      championUrl: "../assets/img/400px-Golden_State_Warriors_logo.svg.png",
      bestPlayers: [
        "Stephen Curry", "Harrison Barnes", "Draymond Green", "Shaun Livingston"
      ],
    }, {
      year: "2015-16",
      champion: "Cleveland Cavaliers",
      championUrl: "../assets/img/200px-Cleveland_Cavaliers_logo.svg.png",
      bestPlayers: [
        "LeBron James", "Zydrunas Ilgauskas", "Hot Rod Williams", "Brad Daugherty"
      ],
    }, {
      year: "2016-17",
      champion: "Golden State Warriors",
      championUrl: "../assets/img/400px-Golden_State_Warriors_logo.svg.png",
      bestPlayers: [
        "Stephen Curry", "Harrison Barnes", "Draymond Green", "Shaun Livingston"
      ],
    }
  ]
}