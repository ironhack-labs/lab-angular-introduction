import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-component',
  templateUrl: './team-component.component.html',
  styleUrls: ['./team-component.component.css']
})
export class TeamComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
teams = [
  {year: "2015-16",
  name:"Cleveland Cavaliers",
championUrl: "http://falso9sports.com/wp-content/uploads/cle.png",
bestPlayers: ["Lebron James", "Kyrie Irving", "Kevin Love", "J.R. Smith", "Anderson Varejao"]},
{year: "2014-15",
  name: "Golden State Warriors",
championUrl: "http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/gsw.png" ,
bestPlayers: ["Stephen Curry", "Klay Thompson", "Draymong Green", "Andrew Bogut", "Gestus Ezeli"]},
{year: "2013-14",
  name: "San Antonio Spurs",
championUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/San_Antonio_Spurs.svg/1200px-San_Antonio_Spurs.svg.png" ,
bestPlayers: ["Tim Duncan", "Tony Parker", "Manu Ginóbili", "Kawhi Leonard", "Tiago Splitter"]}

]
}
