import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  iterationThree: Array<Object> = [
    {year: "2015-16",
    title: "Cleveland Cavaliers",
    image: "assets/images/cavaliers.jpg",
    best: ["Lebron James", "Kyrie Irving", "Kevin Love", "J.R. Smith", "Anderson"]
    },
    {year: "2014-15",
    title: "New York Nicks",
    image: "assets/images/nicks.jpg",
    best: ["Lebron James", "Kyrie Irving", "Kevin Love", "J.R. Smith", "Anderson"]
    },
    {year: "2013-2014",
    title: "Lakers",
    image: "assets/images/lakers.jpg",
    best: ["Lebron James", "Kyrie Irving", "Kevin Love", "J.R. Smith", "Anderson"]
    },
  ];
}
