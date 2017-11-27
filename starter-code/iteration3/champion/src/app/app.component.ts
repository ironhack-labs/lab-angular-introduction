import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NBA Champions';
  champions = [{
    year: "2015-2016",
    name: "Cleveland Cavaliers",
    img: "https://i.pinimg.com/474x/02/32/d9/0232d9e0971b7f10dd0eb14613062421--cavaliers-logo-the-cavaliers.jpg",
    player: ["Lebron James", "Kyrie Irving","Kevin Love","J.R. Smith","Anderson Varejao"]

  },{
    year: "2014-2015",
    name: "Golden State Warriors",
    img: "http://4.bp.blogspot.com/_jCjxMtemAzk/TPPGTWaqmUI/AAAAAAAAACo/du65eE63ifk/s1600/warriors+2.jpg",
    player: ["Steven Curry", "Klay Thompson", "Draymond Green","Andrew Bogut","Gestus Ezeli"]
  },{
    year: "2013-2014",
    name: "San Antonio Spurs",
    img: "https://i.pinimg.com/564x/50/8c/0c/508c0c78fbbf5222127ed33bd123c2f4--logo-sport-san-antonio-spurs.jpg",
    player: ["Tim Duncan", "Manu Ginobili", "Tony Parker", "Kahwi Leonard", "Tiago Splitter"]
  }];
}
