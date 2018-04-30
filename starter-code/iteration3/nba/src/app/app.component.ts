import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NBA Champions';
  championships: Array<Object> =[
    {
    year: '2015-16',
    champion: 'Cleveland Cavaliers',
      championUrl: "https://misc-rnnukmcdu8mee.netdna-ssl.com/san/logos/1fe763ea4bef7a13d7d43b0d9e177ca4-84bb6c12045e7fc7a67925e4a4d41f2c.png",
      bestPlayers: ['Williams, Mo', 'Thompson, Tristan','Smith, J. R.']
    },
    {
      year: '2014-15',
      champion: 'Golden State Warriors',
      championUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/1200px-Golden_State_Warriors_logo.svg.png",
      bestPlayers: ['Klay Thompson', 'Stephen Curry', 'David Lee']
    },
    {
      year: '2014-15',
      champion: 'San Antonio Spurs',
      championUrl: "https://d1tjohjvimcqgl.cloudfront.net/teams/logos/nba/SA.png",
      bestPlayers: ['Ayres, Jeff', 'Baynes, Aron', 'Belinelli, Marco']
    }
  ];
}
