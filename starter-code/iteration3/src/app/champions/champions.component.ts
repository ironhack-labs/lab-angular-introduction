import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {

  champions = [
    {year: '2018',name:'champion name 2018',champUrl:'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/chi.png&h=150&w=150'},
    {year: '2017',name:'champion name 2017',champUrl:'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/chi.png&h=150&w=150'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
