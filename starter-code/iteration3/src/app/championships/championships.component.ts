import { Component, OnInit } from '@angular/core';
import { Url, UrlObject } from 'url';

@Component({
  selector: 'app-championships',
  templateUrl: './championships.component.html',
  styleUrls: ['./championships.component.css']
})
export class ChampionshipsComponent implements OnInit {

  constructor(
    public year: number,
    public champion: string,
    public bestPlayers: Array<string>,
    public championUrl: Url
    ) { }

  ngOnInit() {
  }

}
