import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championship',
  templateUrl: './championship.component.html',
  styleUrls: ['./championship.component.css']
})
export class ChampionshipComponent implements OnInit {
  champions = [
    {
      year: '2026-21',
      champion: "Cantoblanco Riders",
      img: 'http://www.spulsa.info/wp-content/uploads/logos-images-25-trending-modern-logo-inspiration-ideas-on-pinterest-logo.jpg',
      bestPlayers: ['Boris','Oliver','Pernia']
    },
    {
      year: '2054-82',
      champion: "Torrelodones Vikings",
      img: 'https://i.pinimg.com/originals/47/71/97/47719718055159feb5d9e21c269ccf1d.jpg',
      bestPlayers: ['Amaebi','Skizola','Pernia']
    },
    {
      year: '2031-34',
      champion: "Navalmoral Pirates",
      img: 'http://www.mackinacpartners.com/wp-content/uploads/2016/04/Comerica_Park-logo.png',
      bestPlayers: ['Mily','Vanili','Adolf']
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
