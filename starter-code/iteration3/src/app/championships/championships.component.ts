import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championships',
  templateUrl: './championships.component.html',
  styleUrls: ['./championships.component.css']
})
export class ChampionshipsComponent {
  arrayOfChampions: Array<object> = [
    {
      year: '2015-16',
      name: 'Cleveland Cavaliers',
      logo: 'http://armstrongonewire.com/sites/Portals/1/cleveland-cavaliers-logo-vector.png',
      bestPlayers: [
      'Lebron',
      'Irving',
      'Love'
      ]
    },
    {
      year: '2014-15',
      name: 'Golden State Warriors',
      logo: 'http://steamgirlscamp.com/wp-content/uploads/2016/03/c63-oow-warriors-logo-2716739.png',
      bestPlayers: [
        'Curry',
        'Thompson',
        'Green'
      ]
    },
    {
      year: '2013-14',
      name: 'San Antonio',
      logo: 'http://content.sportslogos.net/logos/6/233/full/4719.gif',
      bestPlayers: [
        'Duncan',
        'Parker',
        'Splitter'
        
      ]
    },
]



  constructor() { }

  ngOnInit() {
  }

}
