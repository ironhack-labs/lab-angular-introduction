import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  champions = [
    {
      champion:"Golden State Warriors",
      year: "2015",
      logo: `http://kiaenzona.com/wp-content/uploads/2016/10/WARRIORS.png`,
      players: ["Stephen Curry", "Klay Thompson", "Steve Kerr"]
    },
    {
      champion:"Cleveland Cavaliers",
      year: "2016",
      logo: `https://piratasdelbasket.net/wp-content/uploads/2017/05/cleveland-cavaliers.jpg`,
      players: ["LeBron James", "James Jones", "Kevin Love"]
    },
    {
      champion:"Golden State Warriors",
      year: "2017",
      logo: `http://kiaenzona.com/wp-content/uploads/2016/10/WARRIORS.png`,
      players: ["Stephen Curry", "Klay Thompson", "Steve Kerr"]
    }
  ]
}
