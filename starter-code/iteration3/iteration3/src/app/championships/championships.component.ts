import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championships',
  templateUrl: './championships.component.html',
  styleUrls: ['./championships.component.css']
})
export class ChampionshipsComponent implements OnInit {


  teams = [
        {
          year: "2015-2016",
          champion: "Cleveland Cavaliers",
          url: "http://cnnphilippines.com/incoming/uxfm37-Cleveland-Cavaliers_CNNPH.png/alternates/FREE_640/Cleveland-Cavaliers_CNNPH.png",
          players: ["LEBRON ", " Kyrie Irving", "Kevin Love ", "J.R. Smith", " Anderson Verajo"]
        },
        {
          year: "2014-2015",
          champion: "Golden State Warriors",
          url: "https://defylifecom.files.wordpress.com/2017/06/golden-state-warriors-champions-nba-2017.jpg?w=672&h=372&crop=1",
          players: ["CURRY ", "Thompson ", "Green ", "Bogut", "Ezeli "]
    
        },
        {
          year: "2013-2014",
          champion: "San Antonio Spurs",
          url: "https://imagesvc.timeincapp.com/v3/fan/image?url=https%3A%2F%2Fairalamo.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F451289960.jpeg&c=sc&w=850&h=560",
          players: [" Tim Duncan", " TONY PARKER ", "Manu Ginobili ", " Kawhi Leonard", "Tiago Spitter "]
    
        }
      ]

  constructor() { }

  ngOnInit() {
  }

}
