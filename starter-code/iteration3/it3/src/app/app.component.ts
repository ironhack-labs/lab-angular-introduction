import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NBA Champs';

  recentChamp:Array<any> =[
  {name: "Golden State Warriors",
  year: 2018,
  img: 'https://s3.amazonaws.com/freebiesupply/thumbs/2x/golden-state-warriors-logo.png',
  bestPlayers: ['Steph Curry', 'Klay Thompson']

  },
  {name: "Golden State Warriors",
  year: 2017,
  img: 'https://s3.amazonaws.com/freebiesupply/thumbs/2x/golden-state-warriors-logo.png',
  bestPlayers: ['Steph Curry', 'Klay Thompson']

  }, 
  {name: "Cleveland Cavs",
  year: 2016,
  img: 'http://www.pngmart.com/files/3/Cleveland-Cavaliers-PNG-File.png',
  bestPlayers: ['James Lebron', 'Kevin Love', 'JR Smith']

  }
]
}
