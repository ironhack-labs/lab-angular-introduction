import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  year: String;
  title: String;
  url: String;
  players: String[];

  constructor() { }

  ngOnInit() {
    this.year = "2015-16";
    this.title = "Cleveland Cavaliers";
    this.url = "http://cdn.bleacherreport.net/images/team_logos/328x328/cleveland_cavaliers.png";
    this.players = [ "LeBron James", "Kyrie Irving", "Kevin Love", "J.R. Smith", "Anderson Varejão"];
  }

}
