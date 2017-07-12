import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {
  teams: Object[] = [
    {
      year: 1936,
      name: 'Shakhtar Donetsk FC',
      championUrl: 'https://upload.wikimedia.org/wikipedia/en/2/20/FC_Shakhtar_Donetsk.png',
      best_players: ['I.Petrov', 'A.Vorobey', 'O.Matveyev', 'S.Atelkin']
    },
    {
      year: 1927,
      name: 'Dynamo Kyiv FC',
      championUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/FC_Dynamo_Kyiv_logo.svg/432px-FC_Dynamo_Kyiv_logo.svg.png',
      best_players: ['A.Shevchenko', 'S.Rebrov', 'O.Husev', 'A.Milevskiy']
    },
    {
      year: 1936,
      name: 'Chornomorets Odessa FC',
      championUrl: 'https://upload.wikimedia.org/wikipedia/en/7/77/Chornomorets_odesa_logo_uk.jpg',
      best_players: ['P.Pereverza', 'O.Mashinin', 'O.Kalitov', 'Y.Smirnov']
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
