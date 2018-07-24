import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'champions-component',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {

  champions:Array<any> = [{
    year:       '2015-16',
    team:       'Cleveland Cavaliers',
    badgeURL:   'https://upload.wikimedia.org/wikipedia/en/4/4b/Cleveland_Cavaliers_logo.svg',
    mvps:       [
                'Lebron James',
                'Kyrie Irving',
                'Kevin Love',
                'J.R. Smith',
                'Anderson Varejao'
                ]
  },
  {
    year:       '2014-15',
    team:       'Golden State Warriors',
    badgeURL:   'https://upload.wikimedia.org/wikipedia/en/0/01/Golden_State_Warriors_logo.svg',
    mvps:       [
                'Stephen Curry',
                'Klay Thompson',
                'Draymong Green',
                'Andrew Bogut',
                'Gestus Ezeli'
                ]
  },
  {
    year:       '2013-14',
    team:       'San Antonio Spurs',
    badgeURL:   'https://upload.wikimedia.org/wikipedia/en/a/a2/San_Antonio_Spurs.svg',
    mvps:       [
                'Tim Duncan',
                'Tony Parker',
                'Manu Ginobli',
                'Kawhi Leonard',
                'Tiago Splitter'
                ]
  }
  ];

  constructor() { }

  ngOnInit() {
  }

}
