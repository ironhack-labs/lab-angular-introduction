import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
  championships: Array<Championships> = [
    new Championships(2015-16, "Clevland", "http://www.stickpng.com/assets/images/58419c8da6515b1e0ad75a63.png", ["Nizar", "Arthur", "Mike", "MGad"]),
    new Championships(2014-15, "Golden State Worries", "https://goodlogo.com/images/logos/golden_state_warriors_logo_3913.png", ["Nizar", "Arthur", "Mike", "MGad"]),
    new Championships(2013-14, "San Antonio Spurs", "http://www.stickpng.com/assets/images/58419cbca6515b1e0ad75a66.png", ["Nizar", "Arthur", "Mike", "MGad"]) 
  ]
}


class Championships {
  constructor(
    public year:number,
    public name: string,
    public championUrl: string,
    public bestPlayers: Array<string>
  ){}
}