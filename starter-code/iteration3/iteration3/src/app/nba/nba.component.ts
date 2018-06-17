import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nba',
  templateUrl: './nba.component.html',
  styleUrls: ['./nba.component.css']
})
export class NbaComponent implements OnInit {
  championships: Array<object> = [
    {
      year: "2015-16",
      champion: "Cleveland Cavaliers",
      champioUrl: "assets/img/101.png",
      bestPlayers: [
        "Lebron James",
        "Kyrie Irving"
      ]
    },
    {
      year: "2014-15",
      champion: "Golden State Warriors",
      champioUrl: "assets/img/101.png",
      bestPlayers: [
        "Lebron James",
        "Kyrie Irving"
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
