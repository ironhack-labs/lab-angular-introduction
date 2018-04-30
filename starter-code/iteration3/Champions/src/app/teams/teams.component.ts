import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  Championships = [
    {
      year: 2012,
      champion: 'Miami Heat',
      championUrl: 'https://cdn.worldvectorlogo.com/logos/miami-heat-1.svg',
      bestPlayers: ['Joel Anthony', 'Chris Bosh', 'LeBron James', 'Dwyane Wade', 'Mario Chalmers']
    },
    {
      year: 2013,
      champion: 'Miami Heat',
      championUrl: 'https://cdn.worldvectorlogo.com/logos/miami-heat-1.svg',
      bestPlayers: ['Joel Anthony', 'Chris Bosh', 'LeBron James', 'Dwyane Wade', 'Mario Chalmers']
    },
    {
      year: 2017,
      champion: 'Golden State Warriors ',
      championUrl: 'https://seeklogo.com/images/G/golden-state-warriors-logo-C4106147E7-seeklogo.com.png',
      bestPlayers: ['Curry Stephen', 'Durant Kevin', 'Green Draymond', 'Iguodala Andre', 'Barnes Matt']
    },

  ];
  constructor() { }

  ngOnInit() {
  }

}
