import { Component } from '@angular/core';

@Component({
  selector: 'app-nba-champions',
  templateUrl: './nba-champions.component.html',
  styleUrls: ['./nba-champions.component.css']
})

export class NbaChampionsComponent {
  champions: Array<Object> = [
    {
      year: '2015-16',
      name: 'Cleveland Cavaliers',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT271ea5uRF4ZrGRvRvFuS7oavUVNABbBkkG0wCogUiPV1NfMY',
      bestPlayers: ['Lebron', 'kyrie', 'kevin', 'Jr', 'Anderson']
    }, {
      year: '2014-15',
      name: 'Golden State Warriors',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT271ea5uRF4ZrGRvRvFuS7oavUVNABbBkkG0wCogUiPV1NfMY',
      bestPlayers: ['Stephen Curry', 'Klay', 'Sraymong', 'Andrew', 'Gestus']
    }, {
      year: '2013-14',
      name: 'San Antonio Spurs',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT271ea5uRF4ZrGRvRvFuS7oavUVNABbBkkG0wCogUiPV1NfMY',
      bestPlayers: ['Tim Duncan', 'Tony Parker', 'Manu', 'Kawhi', 'Tiago Splitter']
    }
  ]
};
