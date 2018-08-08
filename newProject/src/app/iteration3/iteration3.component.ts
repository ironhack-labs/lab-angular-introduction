import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iteration3',
  templateUrl: './iteration3.component.html',
  styleUrls: ['./iteration3.component.css']
})
export class Iteration3Component implements OnInit {

  championships: Array<object> = [
    {
      year: "2015-16", 
      champion: "Cleveland Cavaliers",
      badge: "https://cbscleveland.files.wordpress.com/2014/12/cavslogo_770x433.jpg?w=770",
      bestPlayers: ["Lebron James", "Kyrie Irving", "Kevin Love", "J.R. Smith", "Anderson Varejao"] 
    },
    {
      year: "2014-15", 
      champion: "Golden State Warriors",
      badge: "http://www.stickpng.com/assets/images/58419ce2a6515b1e0ad75a69.png",
      bestPlayers: ["Stephen Curry", "Klay Thompson", "Draymong Green", "Andrew Bogut", "Gestus Ezeli"] 
    },
    {
      year: "2013-14", 
      champion: "San Antonio Spurs",
      badge: "http://1000logos.net/wp-content/uploads/2017/11/San-Antonio-Spurs-Logo.png",
      bestPlayers: ["Tim Duncan", "Tony Parker", "Manu Ginobili", "Kawhi Leonard", "Tiago"] 
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
