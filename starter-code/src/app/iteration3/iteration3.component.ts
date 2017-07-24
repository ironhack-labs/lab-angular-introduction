import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iteration3',
  templateUrl: './iteration3.component.html',
  styleUrls: ['./iteration3.component.css']
})
export class Iteration3Component implements OnInit {
  teams: Array <Object> =
  [
    {
      year : '2015-16',
      name: 'Cleveland Cavaliers',
      url : 'http://cdn.bleacherreport.net/images/team_logos/328x328/cleveland_cavaliers.png',
      players: ['Lebron James', 'Kyrie Irving', 'Kevin Love', 'JR Smith', 'Anderson']
    },
    {
      year : '2014-15',
      name: 'Golden State Warriors',
      url : 'http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/gsw.png',
      players: ['Stephen Curry', 'Klay Thompson', 'Draymong Green', 'Andrew Bogut', 'Gestus Ezeli']
    },
    {
      year : '2013-14',
      name: 'San Antonio Spurs',
      url : 'http://kiaenzona.com/wp-content/uploads/2016/10/SPURS.png',
      players: ['Tim Duncan', 'Tony Parker', 'Manu Ginobili', 'Kawhi Leonard', 'Thiago Splitter']

    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
