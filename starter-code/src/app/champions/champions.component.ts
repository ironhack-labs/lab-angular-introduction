import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {

  championTeams:Object[] = [
    {
      year:'2015 - 2016',
      name:'Cleveland Caveliers',
      imageUrl:'../../assets/cavs.png',
      bestPlayers:[
        'lebron james',
        'kyrie irving',
        'kevin love',
        'jr smith'
      ]
    },
    {
      year:'2016 - 2017',
      name:'Golden State Warriors',
      imageUrl:'../../assets/gsw.png',
      bestPlayers:[
        'stpehen curry',
        'draymond green',
        'klay thompson',,
        'kevin durant'
      ]
    },
    {
      year:'2014 - 2015',
      name:'Golden State Warriors',
      imageUrl:'../../assets/gsw.png',
      bestPlayers:[
        'stpehen curry',
        'draymond green',
        'klay thompson',,
        'kevin durant'
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
