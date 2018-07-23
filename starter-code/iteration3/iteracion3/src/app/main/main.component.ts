import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  equipos = [
    {
      year: "2015-2016",
      champion: "Cleveland Cavaliers",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQagnbGMYwm_On4ReR0VXfWFL2QbVl-Q5xQUj1SbQqZYYqzOVln",
      players: ["bruno", "juan", "pepe", "alejandro", "benito"]
    },
    {
      year: "2016-2017",
      champion: "Golden State Warriors",
      url: "http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/gsw.png",
      players: ["eustakio", "juanjo", "josemaria", "carlota", "benitez"]

    },
    {
      year: "2017-2018",
      champion: "San Antonio Sprs",
      url: "https://images-na.ssl-images-amazon.com/images/I/51Zr5gUw52L._SX425_.jpg",
      players: ["marc", "ronaldo", "giorgio", "susana", "juan"]

    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
