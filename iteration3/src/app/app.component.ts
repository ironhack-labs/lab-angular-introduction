import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div *ngFor="let champion of championsNBA" class="col-md-4 col-sm-6">
          <h1> {{ champion.year }} </h1>
          <h3> {{ champion.name }} </h3>
          <img src="{{ champion.image }}">
          <h5>Best Players:</h5>
          <ul>
            <li *ngFor="let best of champion.best_player">
            <p>{{best}}</p>
            </li>
          </ul>
      </div>
  </div>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  championsNBA = [
    {
      year: '2015-2016',
      name: 'Cleveland Cavaliers',
      image: 'http://a4.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnba%2F500%2Fcle.png',
      best_player: [
        'Lebron James',
        'Kyrie Irving',
        'Kevin Love',
        'J.R. Smith',
        'Anderson Varejao'
      ]
    },
    {
      year: '2014-2015',
      name: 'Golden State Warriors',
      image: 'http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/gsw.png',
      best_player: [
        'Steph Curry',
        'Klay Thompson',
        'Andre Iguodala',
        'Draymond Green',
        'Andrew Bogut'
      ]
    },
    {
      year: '2013-2014',
      name: 'San Antonio Spurs',
      image: 'http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/sas.png',
      best_player: [
        'Tony Parker',
        'Manu Ginobili',
        'Kawhi Leonard',
        'Tim Duncan',
        'Tiago Splitter'
      ]
    }
  ]
}
