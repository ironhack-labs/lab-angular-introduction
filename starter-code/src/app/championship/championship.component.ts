import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championship',
  templateUrl: './championship.component.html',
  styleUrls: ['./championship.component.css']
})
export class ChampionshipComponent implements OnInit {
  champions: Array<Object> = [
    {year: 2017,
      team: 'Golden State',
      bestPlayers: ['Jony Jones', 'Winny Winston', 'Danny Donald']},
    {year: 2016,
      team: 'Cleveland Cavalliers',
      bestPlayers: ['Jony Jones', 'Winny Winston', 'Miguel Blesa']},
    {year: 2015,
      team: 'Matalascañas Tomcats',
      bestPlayers: ['Mikel "Miki" Rumayor', 'Tom Tompsom', 'Luke Lucas']},
    {year: 2014,
      team: 'New England Nerds',
      bestPlayers: ['Simone Simoncelli', 'Rakim Hakam', 'Susan Sarandon']},
    {year: 2013,
      team: 'Asdfadsada',
      bestPlayers: ['Juan', 'Simon', 'Joaquin']},
  ]


  constructor() { }

  ngOnInit() {
  }

}
