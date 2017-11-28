import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nba-champions',
  templateUrl: './nba-champions.component.html',
  styleUrls: ['./nba-champions.component.css']
})
export class NbaChampionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title:string = "Some NBA Champions";
  height:string = "200";
  championships:Array<object>  = [
    {
      year: "2015-16",
      champion: "Cleveland Cavaliers",
      championUrl: "http://media.cleveland.com/startingblocks/photo/new-cavaliers-primary-logojpg-ecde4d110d8b58e4.jpg",
      bestPlayers : ["Lebron James",
      "Kyrie Irving",
      "Kevin Love",
      "J.R. Smith",
      "Anderson Varejao"]},
    {
      year: "2014-15",
      champion: "Golden State Warriors",
      championUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/838px-Golden_State_Warriors_logo.svg.png",
      bestPlayers: ["Lebron James",
      "Kyrie Irving",
      "Kevin Love",
      "J.R. Smith",
      "Anderson Varejao"]},
    {
      year: "2013-14",
      champion: "San Antonio Spurs",
      championUrl: "http://kiaenzona.com/wp-content/uploads/2016/10/SPURS.png",
      bestPlayers: ["Lebron James",
      "Kyrie Irving",
      "Kevin Love",
      "J.R. Smith",
      "Anderson Varejao"]},
  ]

}
