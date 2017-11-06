import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iteration3',
  templateUrl: './iteration3.component.html',
  styleUrls: ['./iteration3.component.css']
})
export class Iteration3Component implements OnInit {
  champs: Array<object>;
  constructor() {
    this.champs = [
      {
        year: "2015-16",
        team: "Cleveland Cavaliers",
        img: 'cavs.png',
        players: ["Lebron James", "Kyrie Irving", "Kevin Love", "J.R. Smith",
      "Anderson Varejao"]
      },
      {
        year: "2014-15",
        team: "Golden State Warriors",
        img: 'gsw.png',
        players: ["Stephen Curry", "Klay Thompson", "Draymond Green", "Andrew Bogut",
      "Gestus Ezeli"]
    },
    {
      year: "2013-14",
      team: "San Antonio Spurs",
      img: 'spurs.jpeg',
      players: ["Tim Duncan", "Tony Parker", "Manu Ginobili", "Kawhi Leonard",
    "Tiago Splitter"]
    }

    ]
   }

  ngOnInit() {
  }

}
