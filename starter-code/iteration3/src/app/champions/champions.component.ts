import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent {
  @Input() championships: Array<object>;

  constructor() { }

  ngOnInit() {
  }

}
