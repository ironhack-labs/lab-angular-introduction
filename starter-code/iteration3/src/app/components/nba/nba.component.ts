import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nba',
  templateUrl: './nba.component.html',
  styleUrls: ['./nba.component.css']
})
export class NbaComponent implements OnInit {

  championships: Array<Object> = [
    {
    year: 2015,
    team: 'Cleveland Cavaliers',
    img: 'https://i.eurosport.com/_iss_/sport/TeamSports/club/logo/large/10730.png',
    players: [
      'Lebron James',
      'Kirie Irving',
      'Kevin Love',
      'J.R. Smith',
      'Anderson Varejao',
    ]
  }, {
    year: 2014,
    team: 'Golden State Warriors',
    img: 'https://www.freepnglogos.com/uploads/warriors-png-logo/golden-state-warriors-png-logo-9.png',
    players: [
      'Stephen Curry',
      'Klay Thompson',
      'Draymong Green',
      'Andrew Bogut',
      'Gestus Ezeli',
    ]
  }, {
    year: 2013,
    team: 'San Antonio Spurs',
    // tslint:disable-next-line:max-line-length
    img: 'https://images.vexels.com/media/users/3/132006/isolated/preview/cb8990f888a45561c9d33a73b8c2c801-san-antonio-spurs-logo-by-vexels.png',
    players: [
      'Tim Duncan',
      'Tony Parker',
      'Manu Ginobili',
      'Kawhi Leonard',
      'Tiago Splitter',
    ]
  },
];


  constructor() { }

  ngOnInit() {

  }

}
