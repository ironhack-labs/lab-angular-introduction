import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  championships = [
    new championships('2015-16','Cleveland Cavalliers',
    'http://as01.epimg.net/img/especiales/baloncesto/nba/escudos/cleveland_cavaliers.svg',
    [
      'Lebron',
      'Lebron',
      'Lebron',
      'Lebron'
    ]
  ),
  new championships('2015-16','Cleveland Cavalliers',
    'http://as01.epimg.net/img/especiales/baloncesto/nba/escudos/cleveland_cavaliers.svg',
    [
      'Lebron',
      'Lebron',
      'Lebron',
      'Lebron'
    ]
  ),
  new championships('2015-16','Cleveland Cavalliers',
    'http://as01.epimg.net/img/especiales/baloncesto/nba/escudos/cleveland_cavaliers.svg',
    [
      'Lebron',
      'Lebron',
      'Lebron',
      'Lebron'
    ]
  )]

}


class championships {
  constructor(
    public year:string,
    public champion:string,
    public championUrl:string,
    public bestPlayers:Array<string>
  ){}
}
