import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NBA Champions';
  // champions: Array<Object> = [];
  champions = [
    {
      year: "2015-16",
      name: "Cleveland Cavaliers",
      image: "assets/img/cleveland.png",
      bestPlayers: ["Lebron James","Kyrlie Erving","Kevin Love"]
    },
    {
      year: "2014-15",
      name: "Golden State Warriors",
      image: "assets/img/golden.png",
      bestPlayers: ["Stephen Curry","Klay Thompson","Draymong Green"]
    },
    {
      year: "2013-14",
      name: "San Antonio Spurs",
      image: "assets/img/spurs.png",
      bestPlayers: ["Tim Duncan","Tony Parker","Manu Ginobilli"]
    }
  ];
}
