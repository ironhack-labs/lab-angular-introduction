import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championships',
  templateUrl: './championships.component.html',
  styleUrls: ['./championships.component.css']
})
export class ChampionshipsComponent implements OnInit {
  championship: Array<Object> = [
    {
      year: "2015-16",
      champion: "Cleveland Cavaliers",
      champion_url: "https://bloximages.chicago2.vip.townnews.com/clevelandjewishnews.com/content/tncms/assets/v3/editorial/3/48/348a7d60-37da-11e6-860e-3b81d4297526/5769812435779.image.png?resize=1200%2C635",
      best_players: ["Lebron James", "Kyrie Irving", "Kevin Love", "J.R. Smith", "Anderson Varejao"]
    },
    {
      year: "2014-15",
      champion: "Golden State Warriors",
      champion_url: "http://i.cdn.turner.com/nba/nba/teamsites/images/legacy/warriors/LogoPrimary_300x329.jpg",
      best_players: ["Stephen Curry", "Klay Thompson", "Draymong Green", "Andrew Bogut", "Gestus Ezeli"]
    },
    {
      year: "2013-14",
      champion: "San Antonio Spurs",
      champion_url: "http://ww3.hdnux.com/photos/41/05/33/8672978/3/rawImage.png",
      best_players: ["Tim Duncan", "Tony Parker", "Manu Ginóbili", "Kawhi Leonard", "Tiago Splitter"]
    }]
  constructor() { }

  ngOnInit() {
    }

}
