import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nba: Array<Object> = [
    {
      year: "2017",
      champion: "Golden State Warriors",
      championurl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/200px-Golden_State_Warriors_logo.svg.png",
      bestplayers: ["Young, Nick", "West, David", "Thompson, Klay"]
    },
    {
      year: "2016",
      champion: "Cleveland Cavaliers",
      championurl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Cleveland_Cavaliers_logo.svg/127px-Cleveland_Cavaliers_logo.svg.png",
      bestplayers: ["Young, Nick", "West, David", "Thompson, Klay"]
    },
    {
      year: "2015",
      champion: "Golden State Warriors",
      championurl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/200px-Golden_State_Warriors_logo.svg.png",
      bestplayers: ["Young, Nick", "West, David", "Thompson, Klay"]
    }
  ]
}
