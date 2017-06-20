import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nba',
  templateUrl: './nba.component.html',
  styleUrls: ['./nba.component.css']
})
export class NbaComponent {
  title = "Iteration-3: Last Four NBA Champions";
  champions = [
    { //team1
      year: "2016-2017",
      name: "Golden State Warriors",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/200px-Golden_State_Warriors_logo.svg.png",
      bestPlayers:
      [
        "Kevin Durant",
        "Stephen Curry",
        "Klay Thompson",
        "Draymond Green",
        "Andre Iguodala"
       ]
     },

     { //team2
       year: "2015-2016",
       name: "Cleveland Cavaliers",
       logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Cleveland_Cavaliers_logo.svg/100px-Cleveland_Cavaliers_logo.svg.png",
       bestPlayers:
       [
         "Kyrie Irving",
         "JR Smith",
         "Lebron James",
         "Kevin Love",
         "Tristan Thompson"
        ]
      },

      { //team3
        year: "2014-2015",
        name: "Golden State Warriors",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/200px-Golden_State_Warriors_logo.svg.png",
        bestPlayers:
        [
          "Stephen Curry",
          "Klay Thompson",
          "Draymond Green",
          "Andew Bogut",
          "Gestus Ezeli"
         ]
       },

       { //team4
         year: "2013-2014",
         name: "San Antonio Spurs",
         logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/San_Antonio_Spurs.svg/200px-San_Antonio_Spurs.svg.png",
         bestPlayers:
         [
           "Tim Duncan",
           "Tony Parker",
           "Manu Ginobli",
           "Kawhi Leonard",
           "Tiago Splitter"
          ]
        }
  ]

} //end of the NBA component
