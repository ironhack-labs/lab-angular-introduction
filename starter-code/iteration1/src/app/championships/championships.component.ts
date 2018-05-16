import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championships',
  templateUrl: './championships.component.html',
  styleUrls: ['./championships.component.css']
})
export class ChampionshipsComponent implements OnInit {
  championships: Array<Object>;
  constructor() {
    this.championships = [
      {
        year: '2015-16',
        team: 'Cavaliers',
        url: './assets/photos/sheep.jpg',
        players: [
          'legran Jemas',
          'Keyrie Ivine',
          'Kavin Lave',
          'J.R Schmidth',
          'Androsan Varo'
        ]
      },
      {
        year: '2014-15',
        team: 'Warriors',
        url: './assets/photos/sheep.jpg',
        players: [
          'Migraine Head',
          'Long Toes',
          'Curly Hair',
          'Das Boot',
          'Under Bridge'
        ]
      },
      {
        year: '2013-14',
        team: 'Spurs',
        url: './assets/photos/sheep.jpg',
        players: [
          'Migraine Head',
          'Long Toes',
          'Curly Hair',
          'Das Boot',
          'Under Bridge'
        ]
      }
    ];
  }

  ngOnInit() {}
}
