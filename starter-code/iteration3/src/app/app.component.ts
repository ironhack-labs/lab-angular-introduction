import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  teams = [{
    year: "2015-2016",
    champion: "Cleveland Cavaliers",
    champion_url: "http://falso9sports.com/wp-content/uploads/cle.png",
    best_players: ['c1','c2','c3','c4','c5']
  },{
    year: "2014-2015",
    champion: "Golden State Warriors",
    champion_url: "http://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/27/2016/10/07193054/warriors-300x300.png",
    best_players: ['g1','g2','g3','g4','g5']
  },{
    year: "2013-2014",
    champion: "San Antonio Spurs",
    champion_url: "https://i2.wp.com/www.nbamaniacs.com/wp-content/uploads/2012/10/logo-spurs.jpg?fit=400%2C400&ssl=1",
    best_players: ['s1','s2','s3','s4','s5']
  }]
}
