import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams = [
    {
      year: ["2015-16"],
      name: ["Cleveland Cavaliers"],
      players: ["Lebron James", "Kyre Irving", "Kevin Love", "JR Smith", "Anderson Varejao"]
    },
    {
      year: ["2016-17"],
      name: ["Golden State Warriors"],
      players: ["Lebron James", "Kyre Irving", "Kevin Love", "JR Smith", "Anderson Varejao"]
    },
    {
      year: ["2017-18"],
      name: ["San Antonio Spurs"],
      players: ["Lebron James", "Kyre Irving", "Kevin Love", "JR Smith", "Anderson Varejao"]
    }];
  constructor() {

  }

  ngOnInit() {

  }

}
