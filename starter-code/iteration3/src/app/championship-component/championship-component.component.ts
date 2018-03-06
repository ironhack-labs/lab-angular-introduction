import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championship-component',
  templateUrl: './championship-component.component.html',
  styleUrls: ['./championship-component.component.css']
})
export class ChampionshipComponentComponent implements OnInit {

  constructor() { }
  championArray: Array<Object> = [
    {year: '2015-2016',
    champion: 'Cleveland Cavaliers',
    championUrl: 'http://www.stickpng.com/assets/images/58419c8da6515b1e0ad75a63.png',
    bestPlayers: ['Lebron James', 'Kyrie Irving', 'Kevin Love', 'J.R. Smith', 'Anderson Varejao']
    },
    {year: '2014-2015',
    champion: 'Golden State Warriors',
    championUrl: 'http://wwwcdn.howdesign.com/wp-content/uploads/LogoPrimary_300x329.jpg',
    bestPlayers: ['Stephen Curry', 'Klay Thompson', 'Draymong Green', 'Andrew Bogut', 'Gestus Ezeli']
    },
    {year: '2013-2014',
    champion: 'San Antonio Spurs',
    championUrl: 'http://www.freelogovectors.net/wp-content/uploads/2011/10/san_antonio_spurs-logo.jpg',
    bestPlayers: ['Tim Duncan', 'Tony Parker', 'Many Ginóbili', 'Kawhi Leonard', 'Tiago Splitter']
    }
  ];
  ngOnInit() {
  }

}
