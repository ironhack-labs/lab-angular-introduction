import { Component, OnInit } from '@angular/core';

// interface NbaChampionship {
//   year: string;
//   name: string;
//   championUrl: string;
//   bestPlayers: Array<string>;
// }

@Component({
  selector: 'app-nba-championship',
  templateUrl: './nba-championship.component.html',
  styleUrls: ['./nba-championship.component.css']
})
export class NbaChampionshipComponent implements OnInit {
  // array: Array<NbaChampionship>;
  array;
  constructor() {
    this.array = [
      {
        year: '2115-2116',
        name: 'Cleveland Cavaliers',
        bestPlayers: ['Jim Smith', 'Roger Samson', 'Bort Flankswitcher']
      },
      {
        year: '4023-4343',
        name: 'Ohio Mamawebos',
        bestPlayers: ['Smith Johnson', 'Roger Michalsmith', 'Ruddiger']
      },
      {
        year: '3012-3014',
        name: 'Birmingham Mamakanuleres',
        bestPlayers: ['Jim Smith', 'Roger Samson', 'Bort Flankswitcher']
      }

    ];

  }

  ngOnInit() {
  }

}
