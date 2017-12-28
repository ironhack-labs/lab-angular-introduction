import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nba-item',
  templateUrl: './nba-item.component.html',
  styleUrls: ['./nba-item.component.css']
})
export class NbaItemComponent implements OnInit {
  @Input() nbaCard: any;

  constructor() { }

  ngOnInit() {
  }

}
