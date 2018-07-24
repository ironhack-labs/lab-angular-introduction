import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  championships = [{
    year: "2015- 16",
    champion: "Cleveland Cavaliers",
    img: "images/cleveland.png",
    bestPlayers: ["Lebron James", "Kyrie Irving", "Kevin Love", "J. R. Smith", "Anderson Varejao"]
  },
  {
    year: "2014- 15",
    champion: "Golden State Warriors",
    img: "images/golden.png",
    bestPlayers: ["Stephen Curry", "Klay Thompson", "Draymong Green", "Andrew Bogut", "Gestus Ezeli"]
  },
  {
    year: "2013- 14",
    champion: "San Antonio Spurs",
    img: "images/san_antonio.png",
    bestPlayers: ["Tim Duncan", "Tony Parker", "Manu Ginobili", "Kawhi Leonard", "Tiago Splitter"]
  }]
}
