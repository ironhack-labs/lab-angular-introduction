import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-event-bind',
  templateUrl: './my-event-bind.component.html',
  styleUrls: ['./my-event-bind.component.css']
})
export class MyEventBindComponent implements OnInit {
  lastLetter = '';
  currentText = '';

  constructor() { }

  ngOnInit() {
  }

  onKey (theEvent, text) {
    console.table(theEvent);
    this.lastLetter = theEvent.key;
    this.currentText = text
  }

}
