import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  nba: Array<object> = [
    {
      year: "2015-2016",
      champion: "Cleveland Cavalliers",
      img:
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Cleveland_Cavaliers_logo.svg/127px-Cleveland_Cavaliers_logo.svg.png",
      bestPlayers: [
        "Lebron James",
        'Stephen Curry',
        'Kevin Durant',
        'Kawhi Leonard',
        'Russell Westbrook'
      ]
    },
    {
      year: "2015-2016",
      champion: "Golden State Warriors",
      img:
        "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/200px-Golden_State_Warriors_logo.svg.png",
      bestPlayers: [
        'Russell Westbrook',
        'Tony Parker',
        'Chris Paul',
        'Kevin Durant',
        'LeBron James'
      ]
    },
    {
      year: "2015-2016",
      champion: "Cleveland Cavalliers",
      img:
        "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/San_Antonio_Spurs.svg/200px-San_Antonio_Spurs.svg.png",
      bestPlayers: [
        'Russell Westbrook',
        'Tony Parker',
        'Chris Paul',
        'Kevin Durant',
        'LeBron James'
      ]
    }
  ];
}
