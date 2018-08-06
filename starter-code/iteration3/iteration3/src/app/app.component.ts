import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iteration3';
  champions: Array<Object> = [
    {
      id: 1,
      name: 'Cleveland Cavaliers',
      season: '2015-16',
      logo: '',
    }, {
      id: 2,
      name: 'Golden State Warriors',
      season: '2014-15',
      logo: '',
    }, {
      id: 3,
      name: 'San Antonio Spurs',
      season: '2013-14',
      logo: '',
    }
  ];

  bestPlayers: Array<Object> = [
    {
      team: ['Lebron James', 'Kyrie Irving', 'Kevin Love', 'J.R.Smith', 'Anderson Varejao']
    }, {
      team: ['Stephen Curry', 'Klay Thompson', 'Draymong Green', 'Andrew Bogut', 'Gestus Ezeli']
    }, {
      team: ['Tim Duncan', 'Tony Parker', 'Manu Ginóbili', 'Kawhi Leonard', 'Tiago Splitter']
    }
  ];
}
