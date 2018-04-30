import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {
  championships: Array<Object> = [{
    year: 2017,
    name: "Golden State Warriors",
    imgurl: "https://usatftw.files.wordpress.com/2016/05/logo-golden-state-warriors.png?w=1000&h=600&crop=1",
    bestPlayers: ["Stephen Curry", "Kevin Durant", "D. Green", "Pachulia", "Klay Thompson"]
  },
  {
    year: 2016,
    name: "Cleveland Cavaliers",
    imgurl: "https://cbscleveland.files.wordpress.com/2015/03/cavs-logo-2003.jpg?w=600&h=320",
    bestPlayers: ["Lebron James", "Irving", "K. Love", "T. Thompson", "Dellavedova"]
  },
  {
    year: 2015,
    name: "Golden State Warriors",
    imgurl: "https://usatftw.files.wordpress.com/2016/05/logo-golden-state-warriors.png?w=1000&h=600&crop=1",
    bestPlayers: ["Stephen Curry", "Andrew Bogut", "D. Green", "H. Barnes","Klay Thompson"]
  }];

  constructor() { }

  ngOnInit() {
  }

}
