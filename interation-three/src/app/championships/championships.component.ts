import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championships',
  templateUrl: './championships.component.html',
  styleUrls: ['./championships.component.css']
})
export class ChampionshipsComponent implements OnInit {
  championships: Object[] = [
    {
      year: 2017,
      name: 'Player 1',
      championUrl: 'https://www.pexels.com/photo/man-playing-basketballwilson-159611/',
    },
    {
      year: 2000,
      name: 'Player 2',
      championUrl: 'https://www.pexels.com/photo/athletes-ball-basketball-court-40908/',
    },
    {
      year: 1999,
      name: 'Player 3',
      championUrl: 'https://www.pexels.com/photo/49ers-football-player-roos-at-daytime-looking-surprised-163231/',
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
