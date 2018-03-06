import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championships',
  templateUrl: './championships.component.html',
  styleUrls: ['./championships.component.css']
})
export class ChampionshipsComponent implements OnInit {

  constructor() { }
  champion: Array<Object> = [
    {year: '2015-16',
    name: 'Cleveland',
    image: 'https://www.printyourbrackets.com/nba-logos/cleveland-cavaliers-logo.png',
    bestPlayers: ['leb H', 'kyr B', 'Jr Smith', 'Anderson V']
    },
    {year: '2014-15',
    name: 'Golden State Warriors',
    image: 'https://upload.wikimedia.org/wikipedia/sco/thumb/0/01/Golden_State_Warriors_logo.svg/838px-Golden_State_Warriors_logo.svg.png',
    bestPlayers: ['Joe C', 'Norman J', 'Ram T', 'Ali J']
    },
    {year: '2013-14',
    name: 'San Antonio Spurs',
    image: 'http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/sas.png',
    bestPlayers: ['Fred B', 'John D', 'Jr Luc', 'Bob T']
    }
    ];
  ngOnInit() {
  }

}
