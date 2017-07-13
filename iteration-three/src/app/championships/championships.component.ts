import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championships',
  templateUrl: './championships.component.html',
  styleUrls: ['./championships.component.css']
})
export class ChampionshipsComponent implements OnInit {
 teams: Object[] =[
   {
      year: 2016,
      name: "Cleveland Cavaliers",
      championUrl: "https://www.pixelstalk.net/wp-content/uploads/2016/06/Cleveland-Cavaliers-Logo-Wallpaper-Download.jpg",
      best_players: ["Lebron James", "Kyrie Irving", "Kevin Love", "J.R Smith"]
    },
    {
      year: 2015,
      name: "Golden State Warriors",
      championUrl: "http://theawesomedaily.com/wp-content/uploads/2016/06/facts-about-the-golden-state-warriors-feat.jpg",
      best_players: ["Kevin Durant", "Stephan Curry", "Klay Thompson", "Draymond Green"]
    },
    {
      year: 2014,
      name: "San Antonio Spurs",
      championUrl: "https://pbs.twimg.com/profile_images/870330221370556416/5i_8BAc-_400x400.jpg",
      best_players: ["Tim Duncan", "Tony Parker", "Manu Ginobili", "Tiago splitter"]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
