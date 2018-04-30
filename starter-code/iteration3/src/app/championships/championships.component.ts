import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championships',
  templateUrl: './championships.component.html',
  styleUrls: ['./championships.component.css']
})
export class ChampionshipsComponent implements OnInit {
  constructor() {}
  championships = [
    {
      year: '2016 - 2017',
      champion: 'Golden State Warriors',
      img:
        'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/200px-Golden_State_Warriors_logo.svg.png',
      players: ['Jordan Bell', 'Stephen Curry', 'Kevin Durant', 'Damian Jones', 'Kevon Looney']
    },
    {
      year: '2015 - 2016',
      champion: 'Cleveland Cavaliers',
      img: 'https://upload.wikimedia.org/wikipedia/sco/f/f7/Cleveland_Cavaliers_2010.svg',
      players: ['Paco Pil', 'Chimo Bayo', 'DJ Pastis', 'Leonardo Dantés', 'Dj Tiesto']
    },
    {
      year: '2014 - 2015',
      champion: 'Golden State Warriors',
      img:
        'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/200px-Golden_State_Warriors_logo.svg.png',
      players: ['Jordan Bell', 'Stephen Curry', 'Kevin Durant', 'Damian Jones', 'Kevon Looney']
    }
  ];
  ngOnInit() {}
}
