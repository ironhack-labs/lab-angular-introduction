import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nba-champs-component',
  templateUrl: './nba-champs-component.component.html',
  styleUrls: ['./nba-champs-component.component.css']
})
export class NbaChampsComponentComponent implements OnInit {
  champions: Array<Object>= [
    {
      championYear: '2015-16',
      championName: 'Cleveland Cavaliers',
      url: 'https://www.seeklogo.net/wp-content/uploads/2015/11/cleveland-cavaliers-logo-vector-download.jpg',
      text: 'Best Players',
      bestPlayers: [{
        item: 'Lebron James',
      },      
      {
        item: 'Kyrie Irving',
      },      
      {
        item: 'Kevin Love',
      }],
    },
    {
      championYear: '2015-14',
      championName: 'Golden State Warriors',
      url: 'http://wwwcdn.howdesign.com/wp-content/uploads/LogoPrimary_300x329.jpg',
      text: 'Best Players',
      bestPlayers: [{
        item: 'Stephen Curry',
      },      
      {
        item: 'Klay Thomson',
      },      
      {
        item: 'Draimong Green',
      }],
    },
];


  constructor() { }

  ngOnInit() {
  }

}
