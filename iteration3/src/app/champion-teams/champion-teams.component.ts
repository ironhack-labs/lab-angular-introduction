import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champion-teams',
  templateUrl: './champion-teams.component.html',
  styleUrls: ['./champion-teams.component.css']
})
export class ChampionTeamsComponent implements OnInit {
  teams = [
    {
      year: "2015-2016",
      champion: "Cleveland Cavaliers",
      logo: "https://s3media.247sports.com/Uploads/Assets/855/647/4647855.png",
      players: ["Lebron", "Smith", "Jordan", "zurmano", "zurmana"]
    },
    {
      year: "2016-2017",
      champion: "Golden State Warriors",
      logo: "https://images.vexels.com/media/users/3/130643/isolated/preview/c1af6c8c2a4d1df1456fd8d034d697b7-golden-states-warriors-logo-by-vexels.png",
      players: ["Curry", "Thomson", "Green", "Bogut", "Ezeli"]
    },
    {
      year: "2017-2018",
      champion: "San Antonio Spurs",
      logo: "https://images.vexels.com/media/users/3/132006/isolated/preview/cb8990f888a45561c9d33a73b8c2c801-san-antonio-spurs-logo-by-vexels.png",
      players: ["Duncan", "Parker", "Gnobili", "Leonard", "Splitter"]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
