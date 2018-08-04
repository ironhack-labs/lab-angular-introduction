import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'nba-champions';
  champions: Array<Object> = [
    {
      id: 1,
      name: 'Dallas Mavericks',
      season: '2010-11',
      logo: 'https://www.mavs.com/wp-content/uploads/2014/08/mavslogo.jpg'
    }, {
      id: 2,
      name: 'Miami Heat',
      season: '2011-12',
      logo: 'http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/mia.png'
    }, {
      id: 3,
      name: 'Miami Heat',
      season: '2012-13',
      logo: 'http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/mia.png'
    }
  ];
  bestPlayers: Array<Object> = [
    {
      team: ['Dirk Nowitzki', 'Jason Kidd', 'Jason Terry', 'Shawn Marion', 'Tyson Chandler'],
    }, {
      team: ['Dwyane Wade','Mario Chalmers','Lebron James','Shane Battier','Chris Bosh'],
    }, {
      team: ['Dwyane Wade','Mario Chalmers','Lebron James','Chris Bosh','Chris Andersen'],
    }
  ]
}
