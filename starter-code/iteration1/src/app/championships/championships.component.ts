import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championships',
  templateUrl: './championships.component.html',
  styleUrls: ['./championships.component.css']
})
export class ChampionshipsComponent implements OnInit {

  championships: Array<Object>;
  constructor() {
    this.championships = [
      {
        year: "2015-16",
        team: "Cleveland Cavaliers",
        url: "https://www.cavaliersteamshop.com/content/images/thumbs/0029447_cavs-global-shield-pin.jpeg",
        players: [
          "Lebron James",
          "Kyrie Irving",
          "Kevin Love",
          "J.R. Smith",
          "Anderson Varejao"
        ]
      },
      {
       year: "2014-15",
       team: "Golden State Warrrios",
       url: "https://i.pinimg.com/236x/db/3d/d8/db3dd8b347cd75edba3a873cd9f2051c--sport-logos-sports-party.jpg",
       players: [
         "Stephen Curry",
         "Klay Thompson",
         "Draymong Green",
         "Andrew Bogut",
         "Gestus Ezeli"
       ]
      },
      {
        year: "2013-14",
        team: "San Antonio Spurs",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/San_Antonio_Spurs.svg/1200px-San_Antonio_Spurs.svg.png",
        players: [
          "Tim Duncan",
          "Tony Parker",
          "Manu Ginobili",
          "Kawhi Leonard",
          "Tiago Splitter"
        ]
      }
    ];
   }

  ngOnInit() {
  }

}