import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nba-champs',
  templateUrl: './nba-champs.component.html',
  styleUrls: ['./nba-champs.component.css']
})
export class NbaChampsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

championship: Object [] = [
    {
      year: '2015-16',
      champion: 'Cleveland Cavaliers',
      src: '../assets/images/ClevelandLogo.png',
      bestPlayers: [
        'Lebron James',
        'Kyrie Irving',
        'Kevin Love',
        'J.R. Smith',
        'Anderson Varejao'
        ]
    },

    {
      year: '2014-15',
      champion: 'Golden State Warriors',
      src: '../assets/images/Golden_State_Warriors_logo.svg.png',
      bestPlayers: [
        'Stephen Curry',
        'Klay Thompson',
        'Draymong Green',
        'Andrew Bogut',
        'Gestus Ezeli'
      ]
    },

    {
      year: '2013-14',
      champion: 'San Antionio Spurs',
      src: '../assets/images/SAS.png',
      bestPlayers: [
        'Tim Duncan',
        'Tony Parker',
        'Manu Ginobili',
        'Kawhi Leonard',
        'Tiago Splitter'
      ]
    },
  ];
}
