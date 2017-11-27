import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championship-component',
  templateUrl: './championship-component.component.html',
  styleUrls: ['./championship-component.component.css']
})
export class ChampionshipComponentComponent implements OnInit {

  champions: Array<Object> = [
     {year: 2017,
       team: 'Golden State',
       bestPlayers: ['Jordan', 'Pippen', 'Rodman'],
      url:'http://www.dineshopplay.com/wp-content/uploads/sites/www.dineshopplay.com/images/2017/09/warriors-300x300.png'},
     {year: 2016,
       team: 'Cleveland Cavalliers',
       bestPlayers: ['Jordan', 'Pippen', 'Rodman'],
       url:'http://wakr.net/media/k2/items/cache/16d4d7624188e88edfa53c1fa0b163f5_XL.jpg?t=-62169984000'},
     {year: 2015,
       team: 'Golden State',
       bestPlayers: ['Jordan', 'Pippen', 'Rodman'],
       url:'http://www.dineshopplay.com/wp-content/uploads/sites/www.dineshopplay.com/images/2017/09/warriors-300x300.png'},
     {year: 2014,
       team: 'Chicago',
       bestPlayers: ['Jordan', 'Pippen', 'Rodman'],
       url:'https://i.ebayimg.com/images/g/TKkAAOSwq~tZPsNW/s-l300.jpg'},
   ]


  constructor() { }

  ngOnInit() {
  }

}
