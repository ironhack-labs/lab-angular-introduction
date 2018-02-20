import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {
  champions: Array<{}> =
  [
    {
      year: 2016,
      champion: 'Cavaliers',
      championUrl: 'https://cdn.shopify.com/s/files/1/0257/6087/products/9d3436d635b7a3f48c0229cc1b28905a20170505-19753-1r2gd0h_05af7895-9148-4bec-a21f-611f61809938.png?v=1510679676',
      bestPlayers: ['Lebron James', 'Kyrie Irving']
    },
    {
      year: 2015,
      champion: 'Warriors',
      championUrl: 'https://multzone.com/wp-content/uploads/2017/09/Golden-State-Warriors.gif',
      bestPlayers: ['Steph Currie', 'Klay Thompson']
    }
  ]
  constructor() {   }

  ngOnInit() {
  }

}
