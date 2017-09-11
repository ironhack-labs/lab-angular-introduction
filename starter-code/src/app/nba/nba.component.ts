import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nba',
  templateUrl: './nba.component.html',
  styleUrls: ['./nba.component.css']
})
export class NbaComponent implements OnInit {
  title3 = "NBA Champs - Iteration #3"
  championships: Array<Object> = [
    {
      year: "2015-16",
      name: "Cleveland Cavaliers",
      champion_url: "https://upload.wikimedia.org/wikipedia/en/4/4b/Cleveland_Cavaliers_logo.svg",
      best_players: [
        "Lebron James",
        "Kyrie Irving",
        "Kevin Love",
        "J.R. Smith",
        "Anderson Varejao"
      ]
    },
    {
      year: "2014-15",
      name: "Golden State Warriors",
      champion_url: "http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/gsw.png",
      best_players:[
        "Steven Curry",
        "Klay Thompson",
        "Draymond Green",
        "Andrew Bogut",
        "Gestus Ezeli"
      ]
    },
    {
      year: "2013-14",
      name: "San Antonio Spurs",
      champion_url: "http://cdn.bleacherreport.net/images/team_logos/328x328/san_antonio_spurs.png",
      best_players: [
        "Tim Duncan",
        "Tony Parker",
        "Manu Ginobli",
        "Kawhi Leaonard",
        "Tiago Spliter"
      ]
    }
  ];

  ngOnInit() {
  }

}
