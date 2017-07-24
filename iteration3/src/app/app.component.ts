import { Component } from '@angular/core';

export class Championship {
  year: string;
  teamname: string;
  champion_url: string;
  best_players: Array<string>
}

const championships: Championship[] = [
  {
    year: '2015-2016',
    teamname: 'Cleveland Cavaliers',
    champion_url: 'https://pbs.twimg.com/profile_images/876825394388676609/bh_djrkM_400x400.jpg',
    best_players: [
      'Lebron James',
      'Kyrie Irving',
      'Kevin Love',
      'J.R. Smith',
      'Anderson Vareajo'
    ]
  },
  {
    year: '2014-2015',
    teamname: 'Golden State Warriors',
    champion_url: 'https://pbs.twimg.com/profile_images/2178397831/59693a_400x400.jpg',
    best_players: [
      'Stephen Curry',
      'Klay Thompson',
      'Draymond Green',
      'Andrew Bogut',
      'Gestus Ezeli'
    ]
  },
  {
    year: '2013-2014',
    teamname: 'San Antonio Spurs',
    champion_url: 'https://pbs.twimg.com/profile_images/870330221370556416/5i_8BAc-_400x400.jpg',
    best_players: [
      'Tim Duncan',
      'Tony Parker',
      'Manu Ginobili',
      'Kawhi Leonard',
      'Tiago Splitter'
    ]
  }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  championships: Championship[] = championships;
}
