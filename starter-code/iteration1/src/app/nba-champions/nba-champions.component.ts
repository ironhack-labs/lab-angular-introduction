import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nba-champions',
  templateUrl: './nba-champions.component.html',
  styleUrls: ['./nba-champions.component.css']
})
export class NbaChampionsComponent implements OnInit {
  championships: Array<Object>;
  constructor() {
    this.championships =[
      {
        year: "2015-2016",
        team: "Cleveland Cavs",
        url: "https://sportsfly.cbsistatic.com/fly-789/bundles/sportsmediacss/images/team-logos/nba/CLE.svg",
        players: ["LBJ","Kevin Love","Uncle Drew","JR Smith","Anderson Varejao"]
      },
      {
        year: "2014-2015",
        team: "Golden State Warriors",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/1200px-Golden_State_Warriors_logo.svg.png",
        players: ["Chef Curry","Klay Thompson","Draymond Green","Andrew Bogut","Gestus Ezeli"]
      },
      {
        year: "2013-2014",
        team: "San Antonio Spurs",
        url: "http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/sas.png",
        players: ["Tim Duncan","Tony Parker","The Klaw","Manu Ginobli","Tiago Splitter"]
      }
    ];
   }

  ngOnInit() {
  }

}
