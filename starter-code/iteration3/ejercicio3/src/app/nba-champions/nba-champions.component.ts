import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nba-champions',
  templateUrl: './nba-champions.component.html',
  styleUrls: ['./nba-champions.component.css']
})
export class NbaChampionsComponent implements OnInit {

  championship:Array<object> = [{
    year: "2015-16",
    champion: "Cleveland Cavaliers",
    url: "http://falso9sports.com/wp-content/uploads/cle.png",
    bestplayers: ["Lebron James","Kirie Irving", "Kevin Love", "J.R.Smith"]
  },
  {
    year: "2014-2015",
    champion: "Golden State Warriors",
    url: "http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/gsw.png",
    bestplayers: ["Steven Curry","Klay Thompson", "Draymond Green", "Andrew Bogut"]
  },
  {
    year: "2013-2014",
    champion: "San Antonio Spurs",
    url: "https://i2.wp.com/www.nbamaniacs.com/wp-content/uploads/2012/10/logo-spurs.jpg?fit=400%2C400&ssl=1",
    bestplayers: ["Tim Duncan","Tony Parker", "Manu Ginobili", "Thiago Splitter"]
  }];


  constructor() { }

  ngOnInit() {
  }

}
