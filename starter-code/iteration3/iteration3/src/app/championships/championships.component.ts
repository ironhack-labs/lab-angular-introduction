import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championships',
  templateUrl: './championships.component.html',
  styleUrls: ['./championships.component.css']
})
export class ChampionshipsComponent implements OnInit {
  myChampions = [
    {
        Team: 'Brooklyn Nets',
        Year: '2016/17',
        Img: 'http://www.sweethoops.com/wp-content/uploads/2015/04/brooklyn-nets-logo-png.png',
        Title: 'Best Payers',
        myBest : ['Tipo de Incognito', 'Tipo de Incognito', 'Tipo de Incognito', 'Tipo de Incognito', 'Tipo de Incognito']

      }, {
      Team: 'Philadelphia 76ers',
      Year: '2015/16',
      Img: 'https://s3.amazonaws.com/freebiesupply/large/2x/philadelphia-76ers-logo-black-and-white.png',
      Title: 'Best Payers',
      myBest : ['Tipo de Incognito', 'Tipo de Incognito', 'Tipo de Incognito', 'Tipo de Incognito', 'Tipo de Incognito']
    },  {
      Team: 'Minnesota Timberwolves',
      Year: '2014 / 15',
      Img: 'https://i.pinimg.com/originals/e5/e4/dc/e5e4dcd1a62fde773dffaa2c9efa4e12.png',
      Title: 'Best Payers',
      myBest : ['Tipo de Incognito', 'Tipo de Incognito', 'Tipo de Incognito', 'Tipo de Incognito', 'Tipo de Incognito']
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
