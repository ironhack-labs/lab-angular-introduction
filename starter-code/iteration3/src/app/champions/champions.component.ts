import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {
  title = 'Check it out!';
  champions = [
    { year: '2015-2016', team: 'Cleveland Cavaliers', img: '../../assets/img/cc.png', players: ['Lebron James', 'Kyrie Irving', 'Kevin Love', 'J.R. Smith', 'Andreson Varejao'] },
    { year: '2016-2017', team: 'Golden State Warriors', img: '../../assets/img/gsw.png', players: ['Stephen Curry', 'Klat Thompson', 'Draymong Green', 'Andrew Bogut', 'Gestus Ezeli'] },
    { year: '2013-2014', team: 'San Antonio Spurs', img: '../../assets/img/sas.png', players: ['Tim Duncan', 'Tony Parker', 'Manu Ginóbili', 'Kawhi Leonard', 'Tiago Splitter'] },
  ]
  constructor() { }

  ngOnInit() {
  }

}
