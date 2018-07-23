import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  championShips = [
    {
      year: "2015-2016",
      name: "Cleveland Cavaliers",
      url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Cleveland_Cavaliers_logo.svg/200px-Cleveland_Cavaliers_logo.svg.png",
      bestPlayers:[
        "Lebron James",
        "Kyrie Irving",
        "Kevin Love",
        "J. R. Smith",
        "Anderson Varejao"
      ]
    },
    {
      year: "2014-2015",
      name: "Golden State Warriors",
      url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/400px-Golden_State_Warriors_logo.svg.png",
      bestPlayers:[
        "Stephen Curry",
        "Klay Thomsom",
        "Draymond Green",
        "Andrew Bogut",
        "Gestus Ezeli"
      ]
    },
    {
      year: "2013-2014",
      name: "San Antonio Spurs",
      url: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/San_Antonio_Spurs.svg/400px-San_Antonio_Spurs.svg.png",
      bestPlayers:[
        "Tim Duncan",
        "Tony Parker",
        "Manu Ginobili",
        "Kawhi Leonard",
        "Tiago Splitter"
      ]
    }
  ]
}
