import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nba',
  templateUrl: './nba.component.html',
  styleUrls: ['./nba.component.css']
})
export class NbaComponent implements OnInit {
  championships: Array<any> = [
  {
    year : '2015-2016',
    champion : 'Cleveland Cavaliers',
    champion_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Cleveland_Cavaliers_logo.svg/200px-Cleveland_Cavaliers_logo.svg.png',
    best_player : [
      'Larry',
      'Magic',
      'Jordan'
    ]
  },
  {
    year: '2017-2018',
    champion: 'Lakers',
    champion_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/400px-Los_Angeles_Lakers_logo.svg.png',
    best_player: [
      '2Larry',
      '2Magic',
      '2Jordan'
    ]
  },
  {
    year: '2020-2026',
    champion: 'Cchicago Bulls',
    champion_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Chicago_Bulls_logo.svg/400px-Chicago_Bulls_logo.svg.png',
    best_player: [
      '3Larry',
      '3Magic',
      '3Jordan'
    ]
   }
]

  constructor() { }

  ngOnInit() {
  }


}
