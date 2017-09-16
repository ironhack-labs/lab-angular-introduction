import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nba-item',
  templateUrl: './nba-item.component.html',
  styleUrls: ['./nba-item.component.css']
})
export class NbaItemComponent implements OnInit {
  @Input() champion : any;

  constructor() { }

  ngOnInit() {
  }


}
