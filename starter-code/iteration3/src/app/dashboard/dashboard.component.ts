import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  teams = [
    {
      year: 2016,
      teamName: "Cleveland Cavaliers",
      PicUrl: "https://cbscleveland.files.wordpress.com/2014/12/cavslogo_770x433.jpg?w=770",
      topPlayers: [
        "Lebron James", "Kyrie Irving",
        "Kevin Love", "J.R. Smith", "Anderson Varejao"
      ]
    },
    {
      year: 2015,
      teamName: "Golden State Warriors",
      PicUrl: "http://wwwcdn.howdesign.com/wp-content/uploads/LogoPrimary_300x329.jpg",
      topPlayers: [
        "Stephen Curry", "Klay Thompson",
        "Draymong Green", "Andrew Bogut", "Gestus Ezeli"

      ]
    },
    {
      year: 2014,
      teamName: "San Antonio Spurs",
      PicUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/San_Antonio_Spurs.svg/1200px-San_Antonio_Spurs.svg.png",
      topPlayers: [
        "Tim Duncan", "Tony Parker", 
        "Manu Ginbili", "Kawhi Leonard", "Tiago Splitter"
      ]
    },
  ]

  ngOnInit() {
  }



}
