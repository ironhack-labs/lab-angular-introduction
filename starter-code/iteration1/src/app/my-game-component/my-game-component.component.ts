import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-game-component',
  templateUrl: './my-game-component.component.html',
  styleUrls: ['./my-game-component.component.css']
})
export class MyGameComponentComponent implements OnInit {
  nbachampions: Array<Object> = [{
      year: '2015-16',
      team: 'Cleveland Cavaliers',
      championurl: 'http://armstrongonewire.com/sites/Portals/1/cleveland-cavaliers-logo-vector.png',
      bestplayers: ['Lebron James','Kyrie Irving', 'Kevin Love', 'J.R. Smith','Anderson Varejao']
  },{
    year: '2014-15',
    team: 'Golden State Warriors',
    championurl: 'http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/gsw.png',
    bestplayers: ['Stephen Curry','Klay Thompson', 'Daymond Green', 'Andrew Bogut','Festus Ezeli']
  },{
    year: '2013-14',
    team: 'San Antonio Spurs',
    championurl: 'http://cdn.bleacherreport.net/images/team_logos/328x328/san_antonio_spurs.png',
    bestplayers: ['Tim Duncan','Tony Parker', 'Manu Ginobili', 'Kawhi Leonard','Tiago Splitter']
  }];

  constructor() { }

  ngOnInit() {
  }

}
