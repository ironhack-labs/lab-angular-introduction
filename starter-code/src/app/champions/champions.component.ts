import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {
  championship: Array<Object> = [
    {
      year: "2015-16",
      champion: "Cleveland Cavaliers",
      champion_url: "",
      best_players: [ "Lebron James" , "Kerie Irving", "Kevin Love"]
    },
    {
      year: "2014-15",
      champion: "Golden State Warriors",
      champion_url: "",
      best_players: ["Stephen Curry", "Klay Thompson", "Andrew Bogult"]
    },
    {
      year: "2013-12",
      champion: "San Antonio Sprus",
      champion_url: "",
      best_players: ["Tim Duncan", "Manu Ogibly", "Tiago Splitter"]
    }
  ]
  constructor() { }

  ngOnInit() { }

}
