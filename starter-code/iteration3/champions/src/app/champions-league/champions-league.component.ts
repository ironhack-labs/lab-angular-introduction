import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champions-league',
  templateUrl: './champions-league.component.html',
  styleUrls: ['./champions-league.component.css']
})
export class ChampionsLeagueComponent implements OnInit {

  championsList: any = [
    { year: 2017,
      name: 'Real Madrid',
      badge: 'https://pbs.twimg.com/profile_images/855073776215654400/oGEOJ2JU.jpg',
      stars: ['Cristiano Ronaldo', 'Sergio Ramos', 'Toni Kroos', 'Luka Modric', 'Marcelo Vieira']
    },
    { year: 2016,
      name: 'Real Madrid',
      badge: 'https://pbs.twimg.com/profile_images/855073776215654400/oGEOJ2JU.jpg',
      stars: ['Cristiano Ronaldo', 'Sergio Ramos', 'Toni Kroos', 'Luka Modric', 'Marcelo Vieira']
    },
    { year: 2015,
      name: 'Barcelona',
      badge: 'https://upload.wikimedia.org/wikipedia/ms/8/87/FC_Barcelona_Crest.png',
      stars: ['Lionel Messi', 'Neymar', 'Luis Suarez', 'Andres Iniesta', 'Gerard Pique']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
