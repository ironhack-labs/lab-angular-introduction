import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'teams-group',
  templateUrl: './teams-group.component.html',
  styleUrls: ['./teams-group.component.css']
})
export class TeamsGroupComponent implements OnInit {
  quotes: Array<any> = [
    {
      year: "2015-16",
      title: "Cleveland Cavaliers",
      url: "http://cdn.bleacherreport.net/images/team_logos/328x328/cleveland_cavaliers.png",
      players: [ "LeBron James", "Kyrie Irving", "Kevin Love", "J.R. Smith", "Anderson Varejão"]
    },
    {
      year: "2014-15",
      title: "Golden State Warriors",
      url: "http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/gsw.png",
      players: [ "Stephen Curry", "Klay Thomson", "Draymong Green", "Andrew Bogut", "Gestus Ezeil"]
    },
    {
      year: "2013-14",
      title: "San Antonio Spurs",
      url: "http://kiaenzona.com/wp-content/uploads/2016/10/SPURS.png",
      players: [ "Tim Duncan", "Tony Parker", "Manu Ginóbili", "Kawhi Leonard", "Tiago Splitter"]
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
