import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-champions',
  templateUrl: './my-champions.component.html',
  styleUrls: ['./my-champions.component.css']
})
export class MyChampionsComponent implements OnInit {

  constructor() { }

  champions = [
    {
      year: 2016,
      champion: 'Borgore',
      url: 'http://www.reed.edu/reed_magazine/december2011/articles/features/images/582_almanac_14.jpg',
      players: [
        'Gianni Richards',
        'Michael Lochte', 
        'Ryan Phelps',
        'Yeast Chreast'
      ]
    },
    {
      year: 2017,
      champion: 'Getter',
      url: 'https://share.america.gov/wp-content/uploads/2015/01/Scuba1.jpg',
      players: [
        'Mr. Basket',
        'Mr. Basket\'s son',
        'Chreast Meast', 
        'Yandy Cardero'
      ]
    },
    {
      year: 2018,
      champion: 'Hackerank',
      url: 'http://www.guy-sports.com/fun_pictures/funny_ironing_board.jpg',
      players: [
        'August Rodriguez',
        'Luisa Brockton',
        'Richard Robinson',
        'Hanz Simmons'
      ]
    }
  ]

  ngOnInit() {
  }

}
