import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championships',
  templateUrl: './championships.component.html',
  styleUrls: ['./championships.component.css']
})
export class ChampionshipsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

let championslist = ["2105-16", "Cleveland Cavs"];

class Champions {
  constructor (
    public year: number,
    public teamname: string,
    public url: string,
    public bestPlayers: string,
  ) {}
}
