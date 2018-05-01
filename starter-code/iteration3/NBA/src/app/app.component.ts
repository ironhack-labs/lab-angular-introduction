import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dashboard';
  content: Array<Object> = [
    {
      year: "2000",
      champion: "NY Nicks",
      championurl: "",
      bestplayers: ["Paco", "Juan", "Pedro"],
      img: "http://cdn.nba.net/assets/amp/include/images/nba-logo.png"
    }, {
      year: "2003",
      champion: "Chicago Bulls",
      championurl: "",
      bestplayers: ["Paco", "Juan", "Pedro"],
      img: "http://cdn.nba.net/assets/amp/include/images/nba-logo.png"

    }, {
      year: "3006",
      champion: "San Antonio Spurs",
      championurl: "",
      bestplayers: ["Paco", "Juan", "Pedro"],
      img: "http://cdn.nba.net/assets/amp/include/images/nba-logo.png"
    }
  ]
}
