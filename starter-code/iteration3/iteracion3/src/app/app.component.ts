import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title: Array<Object> = [
    {
      data:'2013-14',
      nombre: 'san antonio spurs',
      imagen:"https://i2.wp.com/www.nbamaniacs.com/wp-content/uploads/2012/10/logo-spurs.jpg?fit=400%2C400&ssl=1",
      player:'best players'
    }, {
      data:'2014-15',
      nombre: 'golden state warriors',
      imagen:"http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/gsw.png",
      player:'best players'
    }, {
      data:'2015-16',
      nombre: 'cleveland cavaliers',
      imagen:"https://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/cavaliers/images/170531-global-logo.png",
      player:'best players'
    }, 
  ];
}

