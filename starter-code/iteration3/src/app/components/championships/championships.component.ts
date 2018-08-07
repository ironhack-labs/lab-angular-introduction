import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championships',
  templateUrl: './championships.component.html',
  styleUrls: ['./championships.component.css']
})
export class ChampionshipsComponent implements OnInit {
  championShips = [{
    year: '2017-18',
    champion: 'Golden State Warriors',
    championUrl: 'https://pbs.twimg.com/profile_images/1014762054115192833/mBHns7-S.jpg',
    bestPlayers: ['Draymond Green', 'Kevin Durant', 'Klay Thompson', 'Stephen Curry', 'Andre Iguodala']
  }, {year: '2016-17',
  champion: 'Golden State Warriors',
  championUrl: 'https://pbs.twimg.com/profile_images/1014762054115192833/mBHns7-S.jpg',
  bestPlayers: ['Stephen Curry', 'Klay Thompson', 'Draymond Green', 'Kevin Durant', 'Andre Iguodala']
}, {
  year: '2015-16',
    champion: 'Cleveland Cavaliers',
    championUrl: 'https://s3media.247sports.com/Uploads/Assets/855/647/4647855.png',
    bestPlayers: ['LeBron James', 'Kyrie Irving', 'J.R. Smith', 'Tristan Thompson', 'Kevin Love']
}];

  constructor() { }

  ngOnInit() {
  }

}
