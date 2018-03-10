import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {
  champions: Array<Object> = [{
    year: '2015-16',
    champion: 'Cliveland Cavaliers',
    championURL: 'http://lorempixel.com/400/200',
    bestPlayers: ['Lebron James', 'Kyrle Living', 'Kevin Love'],
  }, {
    year: '2013-16',
    champion: 'Cliveland One',
    championURL: 'http://lorempixel.com/400/200',
    bestPlayers: ['Lebron James', 'Kyrle Living', 'Kevin Love'],
  }, {
    year: '2012-16',
    champion: 'Cliveland Two',
    championURL: 'http://lorempixel.com/400/200',
    bestPlayers: ['Lebron James', 'Kyrle Living', 'Kevin Love'],
  },];

  constructor() { }

  ngOnInit() {
  }

}
