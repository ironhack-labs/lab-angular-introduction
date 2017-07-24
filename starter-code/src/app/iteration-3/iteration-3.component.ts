import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iteration-3',
  templateUrl: './iteration-3.component.html',
  styleUrls: ['./iteration-3.component.css']
})
export class Iteration3Component {
  champions: Array<Object> = [
    {
     year: "2015-26",
     champion: "Cavaliers",
     image: 'assets/cavaliers.png',
     best_players: ["Cavaliers", "Warriors", "Spurs", "Celtics", "Pistons"]
    },
    {
     year: "2012-20",
     champion: "Pistons",
     image: 'assets/gsw.png',
     best_players: ["Cavaliers", "Warriors", "Spurs", "Celtics", "Pistons"]
    },
    {
     year: "2010-22",
     champion: "Spurs",
     image: 'assets/spurs.jpg',
     best_players: ["Cavaliers", "Warriors", "Spurs", "Celtics", "Pistons"]
   },
 ];
}
