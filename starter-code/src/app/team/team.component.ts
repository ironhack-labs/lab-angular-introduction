import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  @Input() quote: any;

  constructor() { }

  ngOnInit() {
  }

}
