import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nba-champs';
  champs = [
    {
      team: 'Golden State Warriors',
      year: '2017-2018',
      img: 'https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/102010/golden_state_warriors.png?itok=bX7P8iwn',
      players: ['Stephen Curry', 'Draymond Green', 'Klay Thompson', 'Kevin Durant', 'Andre Iguadalo']
    },
    {
      team: 'Golden State Warriors',
      year: '2016-2017',
      img: 'https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/102010/golden_state_warriors.png?itok=bX7P8iwn',
      players: ['Stephen Curry', 'Draymond Green', 'Klay Thompson', 'Kevin Durant', 'Andre Iguadalo']
    },
    {
      team: 'Cleveland Cavaliers',
      year: '2015-2016',
      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Cleveland_Cavaliers_logo.svg/200px-Cleveland_Cavaliers_logo.svg.png',
      players: ['Lebron James', 'Kyrie Irving', 'Kevin Love', 'J.R. Smith', 'Tristan Thompson']
    }

  ];
}
