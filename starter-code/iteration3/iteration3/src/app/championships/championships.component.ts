import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championships',
  templateUrl: './championships.component.html',
  styleUrls: ['./championships.component.css']
})
export class ChampionshipsComponent implements OnInit {
 champions = [
  { imagen: 'http://www.stickpng.com/assets/images/58419c8da6515b1e0ad75a63.png',
    year: '1991',
    name: 'Cleveland',
    title: 'Best Players',
    players: ['Lebron', 'Keylor', 'Mochi', 'Pato']
  },
  { imagen: 'http://www.stickpng.com/assets/images/58419c8da6515b1e0ad75a63.png',
  year: '1994',
  name: 'Madrid',
  title: 'Best Players',
  players: ['Cristiano', 'Keylor', 'Lucca', 'Secretario']
},
{ imagen: 'http://www.stickpng.com/assets/images/58419c8da6515b1e0ad75a63.png',
year: '1994',
name: 'Barcelona',
title: 'Best Players',
players: ['Messi', '55', '66', '777']
}]
  constructor() { }

  ngOnInit() {
  }

}
