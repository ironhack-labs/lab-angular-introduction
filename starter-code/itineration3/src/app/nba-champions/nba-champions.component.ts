import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nba-champions',
  templateUrl: './nba-champions.component.html',
  styleUrls: ['./nba-champions.component.css']
})
export class NbaChampionsComponent implements OnInit {
  Championships= [
    {
      year: 2015-15,
      team: "Cleveland Cavaliers",
      img:"http://media.cleveland.com/startingblocks/photo/new-cavaliers-primary-logojpg-ecde4d110d8b58e4.jpg",
      bestPlayer:[
        "lebron James",
        "Kyrie Irvin",
        "Kevin Love",
        "JRSmith",
        "Anderson Varejao",
      ]
    },
    {
      year: 2015-15,
      team: "Cleveland Cavaliers",
      img:"https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/838px-Golden_State_Warriors_logo.svg.png",
      bestPlayer:[
        "lebron James",
        "Kyrie Irvin",
        "Kevin Love",
        "JRSmith",
        "Anderson Varejao",
      ]
    },
    {
      year: 2015-15,
      team: "Cleveland Cavaliers",
      img:"http://kiaenzona.com/wp-content/uploads/2016/10/SPURS.png",
      bestPlayer:[
        "lebron James",
        "Kyrie Irvin",
        "Kevin Love",
        "JRSmith",
        "Anderson Varejao",
      ]
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
