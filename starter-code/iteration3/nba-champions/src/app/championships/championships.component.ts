import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championships',
  templateUrl: './championships.component.html',
  styleUrls: ['./championships.component.css']
})
export class ChampionshipsComponent implements OnInit {
  year =  [2007, 2008, 2009];
  champion = ['San Antonio Spurs', 'Boston Celtics', 'Los Angeles Lakers'];
  championUrl =['assets/img/spurs.png', 'assets/img/boston.png', 'assets/img/lakers.png'];
  bestPlayers: [['Mike, Paul, Steven'], ['Robert, Bill, George'], ['Barack, Donald, Pete']];

  constructor() {
   }

  ngOnInit() {
  }

}
