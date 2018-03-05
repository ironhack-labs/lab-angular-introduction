import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
  `
    <div *ngFor="let team of teams">
      <div style="width: 30%; float: left; text-align: center;" class="container">
        <h1>{{ team.year }}</h1>
        <h2>{{ team.name }}</h2>
        <img style = "height: 100px" src=" {{ team.championUrl }} " alt="team icon"/>
        <h1>Best Players:</h1>
        <ul style="list-style-type: none;">
          <li *ngFor="let player of team.bestPlayers">
            {{ player }}
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: [
    `

    `
  ]
})

export class AppComponent {
  teams: Array<Object> = [
    {
      year: '2014-15',
      name: 'Golden State Warriors',
      championUrl: 'assets/images/gsw.png',
      bestPlayers: ['Steph Curry', 'Klay Thompson', 'Draymond Green']
    },
    {
      year: '2015-16',
      name: 'Cleveland Cavaliers',
      championUrl: 'assets/images/cle.png',
      bestPlayers: ['LeBron James', 'Kyrie Irving', 'Kevin Love']
    },
    {
      year: '2016-17',
      name: 'Golden State Warriors',
      championUrl: 'assets/images/gsw.png',
      bestPlayers: ['Kevin Durant', 'Steph Curry', 'Klay Thompson']
    }
  ];
}
