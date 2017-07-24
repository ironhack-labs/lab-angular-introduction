import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.css']
})
export class ChampionComponent {
  constructor() { }
  champions: Array<Object> = [
    {
      year: '2015 · 2016',
      name: 'Cleveland Cavaliers',
      champion_url: './assets/images/angular.jpg',
      best_players: ['Lebron James', 'Kyrie Irving', 'Kevin Love']
    },
    {
      year: '2014 · 2015',
      name: 'Golden State Warriors',
      champion_url: './assets/images/angular.jpg',
      best_players: ['Stephen Curry', 'Klay Thompson', 'Draymong Green']
    },
    {
      year: '2013 · 2014',
      name: 'San Antonio Spurs',
      champion_url: './assets/images/angular.jpg',
      best_players: ['Tim Duncan', 'Tony Parker', 'Manu Ginóbili']
    },
  ]
}
