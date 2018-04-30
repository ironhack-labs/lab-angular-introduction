import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {
  champions: Array<Object> = [{
    year: "2015",
    name: "Golden State Warriors",
    photo: "https://seeklogo.com/images/G/golden-state-warriors-logo-C4106147E7-seeklogo.com.png", 
    listPlayers: ["Stephen Curry", "Klay Thompson", "Draymond Green"]
  },
  {
    year: "2014",
    name: "San Antonio Spurs",
    photo: "https://s3.amazonaws.com/freebiesupply/thumbs/2x/san-antonio-spurs-logo.png", 
    listPlayers: ["Manu Ginóbili", "Tim	Duncan", "Tony Parker"]
  },
  {
    year: '2017',
    name: 'Golden State Warriors',
    photo: 'https://seeklogo.com/images/G/golden-state-warriors-logo-C4106147E7-seeklogo.com.png',
    listPlayers: ['Barnes, Matt', 'Clark, Ian','Curry, Stephen']
  },
  {
    year: '2016',
    name: 'Cleveland Cavaliers',
    photo: 'http://wksu.org/news/images/38532/Cavaliers-Logo.png',
    listPlayers: ['Dellavedova, Matthew', 'Frye, Channing', 'Irving, Kyrie']
  },
  {
    name: 'Miami Heat',
    year: "2013",
    photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Miami_Heat_logo.svg/1200px-Miami_Heat_logo.svg.png',
    listPlayers: ['Joel Anthony', 'Shane Battier', 'Chris Bosh'],
  }, 
  {
    name: 'Miami Heat',
    year: "2012",
    photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Miami_Heat_logo.svg/1200px-Miami_Heat_logo.svg.png',
    listPlayers: ['Allen, Ray', 'Andersen, Chris', 'Anthony, Joel'
    ]
  }]
  constructor() { }

  ngOnInit() {
  }

}
