import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championship',
  templateUrl: './championship.component.html',
  styleUrls: ['./championship.component.css']
})
export class ChampionshipComponent implements OnInit {

  champList: any [] = [
    {
      year: '2015-16',
      team: 'Cleveland Cavaliers',
      link: '/assets/cavs.jpg',
      players: ['Lebron James','Kyrie Irving','Kevin Love', 'J.R. Smith', 'Anderson Varejao' ]

    },
    {
      year: '2014-15',
      team: 'Golden State Warriors',
      link: '/assets/warriors.jpg',
      players: ['Stephen Curry','Klay Thompson','Draymond Grenn', 'ANdrew Bogut', 'Gestus Ezeli' ]

    },
    {
      year: '2013-14',
      team: 'San Antonio Spurs',
      link: '/assets/spurs.jpg',
      players: ['Tim Duncan','Tony Parker','Manu Ginobili', 'Kawhi Leonard', 'Tiago Splitter' ]

    }

  ];

  // bestPlayers: any = [
  //
  //     {player1: 'Lebron James'},
  //     {player2: 'Kyrie Irving'},
  //     {player3: 'Kevin Love'},
  //     {player4: 'J.R. Smith'},
  //     {player5: 'Anderson Varejao'}
  //
  //
  // ]

  constructor() { }

  ngOnInit() {
  }

}
