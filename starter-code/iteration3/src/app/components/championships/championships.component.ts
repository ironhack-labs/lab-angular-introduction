import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championships',
  templateUrl: './championships.component.html',
  styleUrls: ['./championships.component.css']
})
export class ChampionshipsComponent implements OnInit {

  championships: Array<object> = [
    {
      year: `2015 - 16`,
      champion: `Cavaliers`,
      url: `http://hunt4freebies.com/wp-content/uploads/2013/10/Cavaliers-Logo.png`,
      mvps: [`Michael Jordan`, `Allen Iversion`]
    },
    {
      year: `2014 - 15`,
      champion: `Golden State Warriors`,
      url: `https://images-na.ssl-images-amazon.com/images/I/91Zl4tW61SL._SY355_.jpg`,
      mvps: [`Dirk Nowitzki`, `Shaquil O'Neil`]
    },
    {
      year: `2013 - 14`,
      champion: `Sant Antionio Spurs`,
      url: `http://cdn.bleacherreport.net/images/team_logos/328x328/san_antonio_spurs.png`,
      mvps: [`Yao Ming`, `Dennis Rodman`]
    }
  ];
  constructor() { }

  ngOnInit() {}

}
