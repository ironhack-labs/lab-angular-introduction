import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-component',
  templateUrl: './team-component.component.html',
  styleUrls: ['./team-component.component.css']
})
export class TeamComponentComponent implements OnInit {

  championship = [
    {
      year: "2015-16",
      name: "Cleveland Cavaliers",
      championUrl: "http://www.stickpng.com/assets/images/58419c8da6515b1e0ad75a63.png",
      bestPlayers: [
        "Lebron James",
        "Kyrie Irving",
        "Kevin Love",
        "J.R. Smith",
        "Anderson Varejao"
      ]
    },
    {
      year: "2014-15",
      name: "Golden State Warriors",
      championUrl: "http://1000logos.net/wp-content/uploads/2018/01/golden-state-warriors-logo.png",
      bestPlayers: [
        "Stephen Curry",
        "Klay Thompson",
        "Draymong Green",
        "Andrew Bogut",
        "Gestus Ezeli"
      ]
    },
    {
      year: "2013-14",
      name: "San Antonio Spurs",
      championUrl: "https://i.pinimg.com/originals/ed/04/7d/ed047d941400caf7e95a198485d83898.png",
      bestPlayers: [
        "Tim Duncan",
        "Tony Parker",
        "Manu Ginobili",
        "Kawhi Leonard",
        "Tiago Splitter"
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
