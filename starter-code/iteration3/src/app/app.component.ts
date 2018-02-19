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
    src: "http://as01.epimg.net/img/especiales/baloncesto/nba/escudos/cleveland_cavaliers.svg",
    best: ["Lebron", "Irving", "Love", "Smith", "Varejao"]

  }, {
    year: "2014-2015",
    name: "Golden State Warriors",
    src: "http://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/bucks/logo-300b-GSW.png",
    best: ["Curry", "Thompson", "Green", "Bogut", "Ezeli"]  
  },{
    year: "2013-2014",
    name: "San Antonio Spurs",
    src: "http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/sas.png",
    best: ["Duncan", "Parker", "Ginóbili", "Leonard", "Splitter"]  
  }]
}