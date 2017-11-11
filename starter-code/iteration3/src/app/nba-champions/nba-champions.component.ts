import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nba-champions',
  templateUrl: './nba-champions.component.html',
  styleUrls: ['./nba-champions.component.css'],
})
export class NbaChampionsComponent implements OnInit {

  nbaChampions: Array<Object> = [{
      year: '2015-16',
      team: 'Cleveland Cavaliers',
      logo: 'http://media.cleveland.com/startingblocks/photo/new-cavaliers-primary-logojpg-ecde4d110d8b58e4.jpg',
      players: ['Lebron James', 'Kyrie Irving', 'Kevin Love', 'J.R. Smith', 'Anderson Varejao']
  },{
      year: '2014-15',
      team: 'Golden State Warriors',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/838px-Golden_State_Warriors_logo.svg.png',
      players: ['Stephen Curry', 'Klay Thompson', 'Draymong Green', 'Andrew Bogut', 'Gestus Ezeli']
  },{
      year: '2013-14',
      team: 'San Antonio Spurs',
      logo: 'http://ww3.hdnux.com/photos/41/05/33/8672978/3/rawImage.png',
      players: ['Tim Duncan', 'Tony Parker', 'Manu Ginobili', 'Kawhi Leonard', 'Tiago Splitter']
  }];

  constructor() { }

  ngOnInit() {
  }

}
