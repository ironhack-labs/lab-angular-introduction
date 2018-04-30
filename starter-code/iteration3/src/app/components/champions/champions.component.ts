import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {

  constructor() { }

  champions: Array<Object> = [
    {
      year: '2014-15',
      name: 'Barcelona',
      img: 'https://as01.epimg.net/img/comunes/fotos/fichas/equipos/medium/3.png',
      bestPlayers: ['Messi', 'Suárez', 'Iniesta', 'Xavi']
    }, {
      year: '2015-16',
      name: 'Real Madrid',
      img: 'https://vignette.wikia.nocookie.net/real-madrid/images/e/e5/Escudo-real-madrid.png/revision/latest?cb=20130515003934&path-prefix=es',
      bestPlayers: ['Cristiano Ronaldo', 'Modrid', 'Kroos', 'Ramos' ]
    },
    {
      year: '2016-17',
      name: 'Real Madrid',
      img: 'https://vignette.wikia.nocookie.net/real-madrid/images/e/e5/Escudo-real-madrid.png/revision/latest?cb=20130515003934&path-prefix=es',
      bestPlayers: ['Cristiano Ronaldo', 'Modrid', 'Kroos', 'Ramos']
    }
  ];

  ngOnInit() {
  }

}
