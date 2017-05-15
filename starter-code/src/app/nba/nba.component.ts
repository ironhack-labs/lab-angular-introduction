import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nba',
  templateUrl: './nba.component.html',
  styleUrls: ['./nba.component.css']
})
export class NbaComponent implements OnInit {
  champions = [{
    logo: "../assets/san.png",
    year: "2013-2014",
    name: "San Antonio Spurs",
    bestPlayers: [
      "Tim Duncan",
      "Tony Parker",
      "Manu Ginobili",
      "Kawhi Leonard",
      "Tiago Splitter",
    ]
  },
  {
    logo: "../assets/golden.png",
    year: "2014-2015",
    name: "Golden State Warriors",
    bestPlayers: [
      "Stephen Curry",
      "Klay Thompson",
      "Draymong Green",
      "Andrew Bogut",
      "Gestus Ezeli"
    ]

  },
  {
    logo: "../assets/cavaliers.png",
    year: "2015-2016",
    name: "Cleveland Cavaliers",
    bestPlayers: [
      "Lebron James",
      "Kyrie Irving",
      "Kevin Love",
      "J.R Smith",
      "Anderson Verajao"
    ]

  }
]
  constructor() { }

  ngOnInit() {
  }

}
