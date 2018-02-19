import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  teams: Array<object> = [{
    year: "2015-2016",
    name: "Cleveland Cavaliers",
    src: "https://i.ebayimg.com/images/g/rzQAAOSw7GRZL8hM/s-l300.jpg",
    best: ["Lebron", "Irving", "Love", "Smith", "Vareiao"]

  }, {
    year: "2014-2015",
    name: "Golden State Warriors",
    src: "http://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/bucks/logo-300b-GSW.png",
    best: ["Curry", "Thompson", "Green", "Bogut", "Ezeli"]  
  },{
    year: "2013-2014",
    name: "San Antonio Spurs",
    src: "https://i.ebayimg.com/images/g/jX0AAOSwFyhaSK4D/s-l300.jpg",
    best: ["Duncan", "Parker", "Ginóbili", "Leonard", "Splitter"]  
  }]
}
