import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  championships = [ {
    year:'2015-16',
    champion:'Cleveland Cavalliers',
    championUrl:'http://as01.epimg.net/img/especiales/baloncesto/nba/escudos/cleveland_cavaliers.svg',
    bestPlayers:[
      'Lebron',
      'Lebron',
      'Lebron',
      'Lebron'
    ]
  },{
    year:'2015-16',
    champion:'Cleveland Cavalliers',
    championUrl:'http://as01.epimg.net/img/especiales/baloncesto/nba/escudos/cleveland_cavaliers.svg',
    bestPlayers:[
      'Lebron',
      'Lebron',
      'Lebron',
      'Lebron'
    ]
  },{
    year:'2015-16',
    champion:'Cleveland Cavalliers',
    championUrl:'http://as01.epimg.net/img/especiales/baloncesto/nba/escudos/cleveland_cavaliers.svg',
    bestPlayers:[
      'Lebron',
      'Lebron',
      'Lebron',
      'Lebron'
    ]
  }]

}
