import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nba-champions',
  templateUrl: './nba-champions.component.html',
  styleUrls: ['./nba-champions.component.css']
})
export class NbaChampionsComponent implements OnInit {
  championships: Array<Championship> = [
    new Championship ("2015-2016", "Cleveland Cavaliers", "champion-team badge", "best-player"),
    new Championship
  ]
  constructor() { }

  ngOnInit() {
  }
class Championship{
  constructor(public year : string, public champion team : string, public champion-url: string, public best-player : Array){}

}
