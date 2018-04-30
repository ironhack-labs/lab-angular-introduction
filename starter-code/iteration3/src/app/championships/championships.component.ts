import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championships',
  templateUrl: './championships.component.html',
  styleUrls: ['./championships.component.scss']
})
export class ChampionshipsComponent implements OnInit {
  datas = [
    {
    year: "2015-16",
    name: "Cleveland Cavaliers",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXBPr0GnqXMcj1QNQXwJ9819vVzyYBHbe1CIY0QL_XKkUTMz5W",
    bestPlayer:["James, LeBron", "Irving, Kyrie", "pepe"]
  },
  {
    year: "2015-16",
    name: "Cleveland Cavaliers",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXBPr0GnqXMcj1QNQXwJ9819vVzyYBHbe1CIY0QL_XKkUTMz5W",
    bestPlayer:["James, LeBron", "Irving, Kyrie"]
  },
  {
    year: "2015-16",
    name: "Cleveland Cavaliers",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXBPr0GnqXMcj1QNQXwJ9819vVzyYBHbe1CIY0QL_XKkUTMz5W",
    bestPlayer:["James, LeBron", "Irving, Kyrie"]
  },
]
  constructor() { }

  ngOnInit() {
  }

}
// year of the championship.
// Name of the champion team.
// A champion-url to show the team badge.
// A list with the best players of the champion team, called best-players