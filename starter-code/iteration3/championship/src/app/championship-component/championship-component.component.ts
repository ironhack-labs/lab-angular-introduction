import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'championship-component',
  templateUrl: './championship-component.component.html',
  styleUrls: ['./championship-component.component.css']
})
export class ChampionshipComponentComponent implements OnInit {
  championships: Array<Championship> = [
    new Championship("2017-12-05", "SK Gaming", "https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/SK_Gaming_logo.svg/1200px-SK_Gaming_logo.svg.png", ["FaZe Clan","Fnatic"]),
    new Championship("2017-05-30", "G2 Esports", "http://super-cdn.g2esports.com/wp-content/themes/g2-esports/library/img/download-logo-new-inverted.png", ["North","SK Gaming"]),
    new Championship("2016-10-26", "Cloud9", "http://liquipedia.net/commons/images/8/89/C9.png", ["SK Gaming","mousesports"]),
  ];

  constructor() { }

  ngOnInit() {
  }

}

class Championship {
  constructor(
    public year: String,
    public championTeam: String,
    public url: String,
    public otherWinners: Array<string>
  ) { }
}