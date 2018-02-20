import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championships',
  templateUrl: './championships.component.html',
  styleUrls: ['./championships.component.css']
})
export class ChampionshipsComponent implements OnInit {
  title = 'Sergio';
  championships: Array<Object> = [
    {year: '2016-17',
    name: 'Pittsburgh Penguins',
    championUrl: 'https://s3.amazonaws.com/pq-imgs/images/quizzes/Pittsburgh-Penguin-14179.gif',
    bestPlayer: 'Manolito Gafotas'
    },
    {year: '2014-15',
    name: 'Chicago Blackhawks',
    championUrl: 'https://ticketcrusader.com/wp-content/uploads/2015/08/Blackhawks.jpg',
    bestPlayer: 'Cañita Brava'
    },
    {year: '2013-14',
    name: 'Los Angeles Kings',
    championUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/LosAngelesKings1988.svg/220px-LosAngelesKings1988.svg.png',
    bestPlayer: 'Débora Melo'

    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
