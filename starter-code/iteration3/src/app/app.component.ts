import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NBA Champions';

  champions: Array<Champion> = [
    new Champion(
      2016, 
      `Cleveland Cavaliers`,
      `https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Cleveland_Cavaliers_logo.svg/127px-Cleveland_Cavaliers_logo.svg.png`,
      [`Arthur Blah`, `Nizar Blah`, `Vivian Blah`, `Michael Blah`]
    ),
    new Champion(
      2015, 
      `Golden State Warriors`,
      `https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/196px-Golden_State_Warriors_logo.svg.png`,
      [`Arthur Blah`, `Nizar Blah`, `Vivian Blah`, `Michael Blah`]
    ),
    new Champion(
      2014, 
      `San Antonio Spurs`,
      `https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/San_Antonio_Spurs.svg/320px-San_Antonio_Spurs.svg.png`,
      [`Arthur Blah`, `Nizar Blah`, `Vivian Blah`, `Michael Blah`]
    ),
    new Champion(
      2013, 
      `Miami Heat`,
      `https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Miami_Heat_logo.svg/174px-Miami_Heat_logo.svg.png`,
      [`Arthur Blah`, `Nizar Blah`, `Vivian Blah`, `Michael Blah`]
    ),
    new Champion(
      2012, 
      `Dallas Mavericks`,
      `https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Dallas_Mavericks_logo.svg/231px-Dallas_Mavericks_logo.svg.png`,
      [`Arthur Blah`, `Nizar Blah`, `Vivian Blah`, `Michael Blah`]
    ),
    new Champion(
      2011, 
      `Los Angeles Lakers`,
      `https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/291px-Los_Angeles_Lakers_logo.svg.png`,
      [`Arthur Blah`, `Nizar Blah`, `Vivian Blah`, `Michael Blah`]
    )

  ];
}

class Champion {
  constructor(
    public year: number,
    public teamName: string,
    public badgeUrl: string,
    public bestPlayers:Array<string>
  ) { }
}
