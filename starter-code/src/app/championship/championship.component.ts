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
       bestPlayers: ['Epi', 'Villacampa', 'Herreros']},
     {year: 2016,
       team: 'Estudiantes',
       bestPlayers: ['Pinone', 'Orenga', 'Llul']},
     {year: 2015,
       team: 'Pau Orthez',
       bestPlayers: ['Pau Gasol', 'Marc Gasol', 'Ibaka']},
     {year: 2014,
       team: 'Angeles Lakers',
       bestPlayers: ['Kobe Briant', 'Jordan', 'Pipen']},
     {year: 2013,
       team: 'Atletico de Madrid ',
       bestPlayers: ['Torres', 'Gabi', 'Saul']},
   ]



  constructor() { }

  ngOnInit() {
  }

}
