import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the championship';
  champions = [
    {
      year: 2015,
      name: "lakers",
      url:"http://nba.frgimages.com/FFImage/thumb.aspx?i=/productImages/_2524000/ff_2524300_full.jpg&w=340",
      list : ["briyant, shaquel,gasol,nate"]

    },
        {
      year: 1990,
      name: "chicago bulls",
      url:"https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Chicago_Bulls_logo.svg/1200px-Chicago_Bulls_logo.svg.png",
      list : ["pippen", "jordan",]

    },
        {
      year: 2016,
      name: "miami heats",
      url:"https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Miami_Heat_logo.svg/1200px-Miami_Heat_logo.svg.png",
      list : ["james lebron"]

    }
  ] 
}
