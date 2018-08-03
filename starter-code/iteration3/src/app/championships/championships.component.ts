import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championships',
  templateUrl: './championships.component.html',
  styleUrls: ['./championships.component.css']
})
export class ChampionshipsComponent implements OnInit {

  constructor() { }

  championships: Array<Object> = [
    {
      year: "2015-16",
      team: "Cleveland Cavaliers",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/Cleveland_Cavaliers_secondary_logo.svg",
      bestPlayers : ["Lebron James", "Kyrie Irving", "Kevin Love", "J.R. Smith", "Anderson Varejao"]
    },
    {
      year: "2014-15",
      team: "Golden State Warriors",
      logo: "https://upload.wikimedia.org/wikipedia/el/0/01/Golden_State_Warriors_logo.svg",
      bestPlayers : ["Steph Curry", "Klay Thompson", "Draymong Green", "Andrew Bogut", "Gestus Ezeli"]
    },
    {
      year: "2013-14",
      team: "San Antonio Spurs",
      logo: "https://upload.wikimedia.org/wikipedia/en/a/a2/San_Antonio_Spurs.svg",
      bestPlayers : ["Tim Duncan", "Tony Parker", "Manu Ginobili", "Kawhi Leonard", "Tiago Splitter"]
    }
  ]

  ngOnInit() {
  }

}
