import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nba-component",
  templateUrl: "./nba-component.component.html",
  styleUrls: ["./nba-component.component.css"]
})
export class NbaComponentComponent implements OnInit {
  winners = [
    {
      year: "2017-18",
      champion: "Golden State Warriors",
      url:
        "http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/gsw.png",
      bestPlayers: ["Curry", "Green", "Durant"]
    },
    {
      year: "2016-17",
      champion: "Golden State Warriors",
      url:
        "http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/gsw.png",
      bestPlayers: ["Curry", "Green", "Durant"]
    },
    {
      year: "2015-16",
      champion: "Cleveland Cavaliers",
      url:
        "http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/cle.png",
      bestPlayers: ["Lebron", "Kevin Love", "Irving"]
    },
    {
      year: "2014-15",
      champion: "Golden State Warriors",
      url:
        "http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/gsw.png",
      bestPlayers: ["Curry", "Green", "Bogut"]
    },
    {
      year: "2013-14",
      champion: "San Antonio Spurs",
      url:
        "http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/sas.png",
      bestPlayers: ["Duncan", "Parker", "Ginobilli"]
    }
  ];
  constructor() {}

  ngOnInit() {}
}
