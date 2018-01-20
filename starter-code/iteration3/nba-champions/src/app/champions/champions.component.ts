import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {

    theChampionships: any[] = [
        {
          year: 2017,
          teamName: "DBZ",
          badgeUrl: "https://vignette.wikia.nocookie.net/dragonball/images/8/8d/Dragon_Ball_Z_logo.png/revision/latest?cb=20131001023201",
          bestPlayers: [
              "Goku",
              "Gohan",
              "Vegeta"
          ]
        },
        {
          year: 2016,
          teamName: "StarWars",
          badgeUrl: "https://s-media-cache-ak0.pinimg.com/originals/08/52/60/085260027cd0e7181739169273186b95.jpg",
          bestPlayers: [
              "Darth Vader",
              "Storm Trooper",
              "Luke Skywalker"
          ]
        },
        {
          year: 2015,
          teamName: "ThunderCats",
          badgeUrl: "http://lofrev.net/wp-content/photos/2016/06/thundercats-logo_-1.png",
          bestPlayers: [
              "Cheetara",
              "Lion-O",
              "Snarf"
          ]
        }

    ]

  constructor() { }

  ngOnInit() {
  }

}
