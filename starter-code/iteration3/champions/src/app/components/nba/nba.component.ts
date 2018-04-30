import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nba',
  templateUrl: './nba.component.html',
  styleUrls: ['./nba.component.css']
})
export class NbaComponent implements OnInit {

  championships: Array<Object> = [
    {
      year: '2015-16',
      name: 'Cleveland',
      championUrl: 'xxx',
      bestPlayers: ['Lebron J.', 'Kayle L.', 'Kevin L.']
    }, {
      year: '2014-15',
      name: 'Golden State',
      championUrl: 'xxx',
      bestPlayers: ['Stephen C.', 'Kilay T.', 'Andrew B.']
    }, {
      year: '2013-14',
      name: 'San Antonio',
      championUrl: 'xxx',
      bestPlayers: ['Tim D.', 'Tony P.', 'Manu G.']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
