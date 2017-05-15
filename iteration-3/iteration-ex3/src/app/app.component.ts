import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<ul class="list-of-teams">
    <li *ngFor="let team of teams">
      <div class="team">
        <span> {{ team.year }} </span>
        <span> {{ team.name }} </span>
      </div>
        <ul class="list-of-players">
          <li *ngFor="let player of team.bestPlayers">
              <span> {{ player }} </span>
          </li>
      </ul>
    </li>
</ul>`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';

  teams: Array<Object> = [
    {
      year: '2015-2016',
      name: 'Cleveland Cavaliers',
      bestPlayers: ["Kyrie Irving", "JR Smith", "Lebron James", "Kevin Love", "Frye"]
    }, {
      year: '2014-2015',
      name: 'Golden State Warriors',
      bestPlayers: ["Stephen Curry", "Klay Thompson", "Harrisson Barnes", "Draymond Green", "Andrew Bogut"]
    }, {
      year: '2013-2014',
      name: 'Sant Antonio Spurs',
      bestPlayers: ["Tony Parker", "Manudona", "Kawhi Leonard", "Tim Duncan", "Danny Green"]
    },
  ];
}
