import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NBA CHAMPIONS';
  teams =[{
    date : "2015 - 2016",
    name: "Clevelan",
    url : "http://as01.epimg.net/img/especiales/baloncesto/nba/escudos/cleveland_cavaliers.svg",
    players: ["Lebron", "Alberto", "Christian"],

  },
  {
    date : "2014 - 2015",
    name: "Golden State",
    url : "http://nba.frgimages.com/FFImage/thumb.aspx?i=/productimages/_491000/altimages/FF_491928ALT4_full.jpg&w=600",
    players: ["Peter", "Juan", "Christian"],

  },
  {
    date : "2013 - 2014",
    name: "San Antonio",
    url : "http://as01.epimg.net/img/especiales/baloncesto/nba/escudos/san_antonio_spurs.svg",
    players: ["Rodri", "Loco", "Javi"],

  }]
}
