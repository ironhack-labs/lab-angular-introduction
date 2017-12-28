import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nba-box',
  templateUrl: './nba-box.component.html',
  styleUrls: ['./nba-box.component.css']
})
export class NbaBoxComponent implements OnInit {
  nbaCardList: Array<any>;
  constructor() { }

  ngOnInit() {
    this.nbaCardList = [{
      date: "2015-16",
      teamName: "Cleveland Cavaliers",
      teamLogo: "./../../assets/img/Cleveland_Cavaliers_Logo.png",
      players: ["Lebron James", "Kyrie Irving", "Kevin Love", "J.R. Smith", "Anderson Varejao"]
    }, {
      date: "2014-15",
      teamName: "Golden State Warriors",
      teamLogo: "./../../assets/img/golden_state_warriors.png",
      players: ["Stephen Curry", "Klay Thompson", "Draymong Green", "Andrew Bogut", "Gestus Ezeli"]
    }, {
      date: "2013-14",
      teamName: "San Antonio Spurs",
      teamLogo: "./../../assets/img/spurs_logo.png",
      players: ["Tim Duncan", "Tony Parker", "Manu Ginóbili", "Kawhi Leonard", "Tiago Splitter"]
    }]
  }

}
