import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iteration3',
  templateUrl: './iteration3.component.html',
  styleUrls: ['./iteration3.component.css']
})
export class Iteration3Component implements OnInit {
  nbas: Array <Object> =
  [
    {
      year : '2015-16',
      name: 'Cleveland Cavaliers',
      url : 'http://cdn.bleacherreport.net/images/team_logos/328x328/cleveland_cavaliers.png',
      players: ['Lebron James', 'Kyrie Irving', 'Kevin Love', 'JR Smith', 'Anderson']
    },
    {
      year : '2015-16',
      name: 'Cleveland Cavaliers',
      url : 'http://cdn.bleacherreport.net/images/team_logos/328x328/cleveland_cavaliers.png',
      players: ['Lebron James', 'Kyrie Irving', 'Kevin Love', 'JR Smith', 'Anderson']
    },
    {
      year : '2015-16',
      name: 'Cleveland Cavaliers',
      url : 'http://cdn.bleacherreport.net/images/team_logos/328x328/cleveland_cavaliers.png',
      players: ['Lebron James', 'Kyrie Irving', 'Kevin Love', 'JR Smith', 'Anderson']
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
