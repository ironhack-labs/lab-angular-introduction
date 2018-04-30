import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nba-champions',
  templateUrl: './nba-champions.component.html',
  styleUrls: ['./nba-champions.component.css']
})
export class NbaChampionsComponent implements OnInit {

  nbaChampions: Array<Object> = [
    {
      year: '2015-16',
      name: 'Cleveland Cavaliers',
      championUrl: 'http://wksu.org/news/images/38532/Cavaliers-Logo.png',
      bestPlayers: ['james', 'kevin', 'alvin', 'joe', 'lilly']
    }, {
      year: '2014-15',
      name: 'Golden State Warriors',
      championUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/1200px-Golden_State_Warriors_logo.svg.png',
      bestPlayers: ['nanna', 'sheila', 'byron', 'mihai', 'marketa']
    }, {
      year: '2013-14',
      name: 'San Antonio Spurs',
      championUrl: 'https://vignette.wikia.nocookie.net/logopedia/images/d/d7/200px-San_Antonio_Spurs_svg.png/revision/latest?cb=20160511024947',
      bestPlayers: ['german', 'lola', 'sid', 'joe', 'nancy']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
