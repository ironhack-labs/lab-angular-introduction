import { Component, OnInit, Input } from '@angular/core';

import { Champion } from './Champion';

@Component({
  selector: 'app-nba-champions',
  templateUrl: './nba-champions.component.html',
  styleUrls: ['./nba-champions.component.css']
})
export class NbaChampionsComponent implements OnInit {

  constructor() { }

  @Input() champion: Champion;

  ngOnInit() {
  }

}
