import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-championships',
  templateUrl: './my-championships.component.html',
  styleUrls: ['./my-championships.component.css']
})
export class MyChampionshipsComponent implements OnInit {

  champions: Array<Object> = [
     {year: 2000,
       team: 'Los Angeles Lakers',
       url: 'http://as01.epimg.net/img/especiales/baloncesto/nba/escudos/los_angeles_lakers.svg',
       bestPlayers: ['Jony Jones', 'Winny Winston', 'Danny Donald']},
     {year: 1999,
       team: 'San Antonio Spurs',
       url: 'http://cdn.bleacherreport.net/images/team_logos/328x328/san_antonio_spurs.png',
       bestPlayers: ['Jony Jones', 'Winny Winston', 'Miguel Blesa']},
     {year: 1998,
       team: 'Chicago Bulls',
       url: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Chicago_Bulls_logo.svg/1200px-Chicago_Bulls_logo.svg.png',
       bestPlayers: ['Mikel "Miki" Rumayor', 'Tom Tompsom', 'Luke Lucas']},
   ]


  constructor() { }

  ngOnInit() {
  }

}
