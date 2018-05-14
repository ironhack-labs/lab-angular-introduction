import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'NBA Championships';

  teams: Array<Object> = [
    {
      year: '2015-16',
      name: 'Cleveland Cavaliers',
      logo: '../assets/images/cavs.jpg',
      players: [
        'Lebron James',
        'Kyring Irving',
        'Kevin Love',
        'JR Smith',
        'Anderson Varejao'
      ]
    }, {
      year: '2014-15',
      name: 'Golden State Warriors',
      logo: '../assets/images/warriors.png',
      players: [
        'Stephen Curry',
        'Clay Thompson',
        'Draymond Green',
        'Andrew Bogut',
        'Festus Ezeli'
      ]      
    }, {
      year: '2013-14',
      name: 'San Antonio Spurs',
      logo: '../assets/images/spurs.jpg',
      players: [
        'Tony Parker',
        'Tim Duncan',
        'Kawhi Leonard',
        'Manu Ginobili',
        'Thiago Splitter'
      ]      
    }
  ];

}
