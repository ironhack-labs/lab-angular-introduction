import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nbachamps',
  templateUrl: './nbachamps.component.html',
  styleUrls: ['./nbachamps.component.css']
})
export class NbachampsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
teams = [
  {
    year: "2016-2017",
    name: "Golden State Warriors",
    bestPlayers: ["Stephen Curry ", " Klay Thompson"],
    championUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/122px-Golden_State_Warriors_logo.svg.png"
  },
  {
    year: "2012-2013",
    name: "Miami Heat",
    bestPlayers: ["LeBron James", "Dwyane Wade"],
    championUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Miami_Heat_logo.svg/200px-Miami_Heat_logo.svg.png"
  },
  {
    year: "2013-2014",
    name: "San Antonio Spurs",
    bestPlayers: ["Tiago Splitter"],
    championUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/San_Antonio_Spurs.svg/385px-San_Antonio_Spurs.svg.png"
  }
]
}
